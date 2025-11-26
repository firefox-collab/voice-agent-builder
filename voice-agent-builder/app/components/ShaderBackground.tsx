'use client'

import { useEffect, useRef } from 'react'

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
    if (!gl) {
      console.warn('WebGL not supported')
      return
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      vec3 topColor = vec3(0.49, 0.73, 0.98);
      vec3 midColor = vec3(0.61, 0.83, 1.0);
      vec3 bottomColor = vec3(0.73, 0.91, 0.99);

      vec3 darkLineColor = vec3(0.016, 0.20, 0.44);
      vec3 radiantLineColor = vec3(0.08, 0.36, 0.68);
      vec3 particleColor = vec3(0.76, 0.784, 0.80);
      vec3 particleGlow = vec3(0.48, 0.68, 0.80);

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;

        float gradient = st.y;

        vec3 baseColor;
        if (gradient < 0.4) {
          baseColor = mix(topColor, midColor, gradient / 0.4);
        } else {
          baseColor = mix(midColor, bottomColor, (gradient - 0.4) / 0.6);
        }

        vec3 color = baseColor;
        float waveThickness = 0.0023;
        float totalWaveIntensity = 0.0;

        for(int i = 0; i < 10; i++) {
          float fi = float(i);
          float offset = fi * 0.03;
          float speed = (0.25 + fi * 0.05) * 0.4;
          float freq = 3.0 + fi * 0.7;
          float amp = 0.14 - fi * 0.008;

          float wave = sin(st.x * freq + u_time * speed + st.y * (2.0 + fi * 0.3)) * amp;
          float waveY = 0.35 + offset + wave;

          float dist = abs(st.y - waveY);
          float waveLine = smoothstep(waveThickness, 0.0, dist);

          vec3 lineColor = mix(darkLineColor, radiantLineColor, sin(fi * 0.5 + u_time * 0.3) * 0.5 + 0.5);
          color = mix(color, lineColor, waveLine * 0.9);

          float glowDist = dist * 80.0;
          float glow = exp(-glowDist * glowDist) * 0.16;
          color += lineColor * glow;

          totalWaveIntensity += waveLine;

          float particleX = fract(u_time * 0.06 + fi * 0.1);
          float particleWave = sin(particleX * freq + u_time * speed + waveY * (2.0 + fi * 0.3)) * amp;
          float particleY = 0.35 + offset + particleWave;

          vec2 particlePos = vec2(particleX, particleY);
          float particleDist = length(st - particlePos);

          float particle = smoothstep(0.0042, 0.0, particleDist);
          color = mix(color, particleColor, particle);

          float particleHalo = exp(-particleDist * 60.0) * 0.24;
          color += particleGlow * particleHalo;
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `

    function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type)
      if (!shader) return null

      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }

      return shader
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ])
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeLocation = gl.getUniformLocation(program, 'u_time')

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl?.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const startTime = Date.now()
    let animationId: number

    function render() {
      if (!gl || !canvas) return

      const currentTime = (Date.now() - startTime) / 1000.0

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program)

      gl.enableVertexAttribArray(positionLocation)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, currentTime)

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  )
}
