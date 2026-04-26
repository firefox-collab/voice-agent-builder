'use client'

import { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';

// The Public Key is required to initialize the Vapi client.
// It should be set in .env.local as NEXT_PUBLIC_VAPI_PUBLIC_KEY
// or you can hardcode it here for testing.
const PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "92f5e21c-30c4-433d-b625-2d0ced0da5f2";

interface VapiDemoButtonProps {
  agentId: string;
  label?: string;
}

export default function VapiDemoButton({ agentId, label = "Live Agent Demo" }: VapiDemoButtonProps) {
  const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active'>('inactive');
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    // Only initialize if we have the window object to avoid SSR issues
    if (typeof window !== 'undefined' && !vapiRef.current) {
      vapiRef.current = new Vapi(PUBLIC_KEY);
    }
    
    if (!vapiRef.current) return;
    
    const vapi = vapiRef.current;
    
    const onCallStart = () => setCallStatus('active');
    const onCallEnd = () => setCallStatus('inactive');
    const onError = (e: any) => {
      console.error('Vapi error:', e);
      setCallStatus('inactive');
    };

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('error', onError);

    return () => {
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
      vapi.off('error', onError);
    };
  }, []);

  const toggleCall = async () => {
    if (!vapiRef.current) return;

    try {
      if (callStatus === 'active') {
        vapiRef.current.stop();
        setCallStatus('inactive');
      } else {
        if (PUBLIC_KEY === "YOUR_VAPI_PUBLIC_KEY_HERE") {
          alert("Please add your Vapi Public Key (from Vapi Dashboard -> API Keys) to the VapiDemoButton component to enable live calling.");
          return;
        }
        setCallStatus('loading');
        await vapiRef.current.start(agentId);
      }
    } catch (err) {
      console.error('Error toggling Vapi call:', err);
      setCallStatus('inactive');
    }
  };

  return (
    <button 
      onClick={toggleCall}
      disabled={callStatus === 'loading'}
      className={`mt-auto w-full font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all ${
        callStatus === 'active' 
          ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 shadow-sm' 
          : callStatus === 'loading'
          ? 'bg-gray-50 text-gray-400 border border-gray-200 cursor-wait'
          : 'bg-primary-50 text-primary-700 border border-primary-200 hover:bg-primary-100 group-hover:border-primary-300 group-hover:shadow-sm'
      }`}
    >
      <span className="mr-2 flex items-center justify-center">
        {callStatus === 'active' ? (
          <span className="relative flex h-3 w-3 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        ) : callStatus === 'loading' ? (
          <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : '🎙️'}
      </span>
      {callStatus === 'active' ? 'End Call' : callStatus === 'loading' ? 'Connecting...' : label}
    </button>
  );
}
