# Setup Instructions for Cursor IDE

This guide will help you set up the Voice-Agent-Builder project in Cursor IDE on your local PC for development and testing.

---

## Prerequisites

Before you begin, make sure you have the following installed on your PC:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: Open terminal and run `node --version`

2. **Cursor IDE**
   - Download from: https://cursor.sh/
   - Install and open Cursor

3. **Git** (optional, but recommended)
   - Download from: https://git-scm.com/
   - Verify installation: Run `git --version`

---

## Step 1: Download the Project

You have two options:

### Option A: Download ZIP file (Recommended for beginners)

1. Download the project ZIP file from your source
2. Extract the ZIP file to your desired location (e.g., `C:\Projects\voice-agent-builder`)
3. Remember this location for the next steps

### Option B: Using Git (If you have Git installed)

```bash
# Clone the repository
git clone <your-repository-url>
cd voice-agent-builder
```

---

## Step 2: Open Project in Cursor

1. Launch Cursor IDE
2. Click **File** → **Open Folder**
3. Navigate to the project folder (where you extracted/cloned it)
4. Click **Select Folder**

Cursor will now load the project. You should see the file structure in the left sidebar.

---

## Step 3: Install Dependencies

1. Open the integrated terminal in Cursor:
   - Press **Ctrl + `** (backtick) or
   - Click **Terminal** → **New Terminal** from the menu

2. Make sure you're in the project root directory (you should see `package.json` listed)

3. Run the following command:

```bash
npm install
```

This will install all required dependencies. It may take 2-5 minutes depending on your internet speed.

**Expected Output:**
```
added 312 packages, and audited 313 packages in 2m
```

---

## Step 4: Environment Setup

The project comes with a pre-configured `.env` file with placeholders. No changes are needed for local development.

If you need to check or modify environment variables:

1. Open the `.env` file in the project root
2. The file should look like this:

```env
# Environment variables for Voice-Agent-Builder
# This file is cleaned for local development

# When you're ready to integrate external services, add:
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# ...
```

For local development, you don't need to add anything yet.

---

## Step 5: Start the Development Server

1. In the Cursor terminal, run:

```bash
npm run dev
```

2. Wait for the server to start. You should see:

```
  ▲ Next.js 14.2.18
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Ready in 2.3s
```

3. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

You should now see the Voice-Agent-Builder landing page!

---

## Step 6: Making Changes and Testing

### Hot Reload

Next.js has **hot reload** enabled by default. This means:
- Any changes you make to files will automatically refresh in the browser
- No need to restart the server for most changes
- Just save the file (Ctrl+S) and check your browser

### Key Files to Know

| File Path | Purpose |
|-----------|---------|
| `app/page.tsx` | Main landing page |
| `app/components/ShaderBackground.tsx` | Animated background |
| `app/components/ui/` | Reusable UI components |
| `app/globals.css` | Global styles |
| `app/api/submit-form/route.js` | Form submission handler |

### Testing the Form

1. Scroll to the bottom of the landing page
2. Fill out the contact form with test data
3. Click "Start My Free Trial"
4. You should see a success message

The form data will be logged in your Cursor terminal (where `npm run dev` is running).

---

## Step 7: Building for Production (Testing)

To test if your project builds correctly:

1. Stop the development server (Press `Ctrl+C` in terminal)

2. Run the build command:

```bash
npm run build
```

3. If successful, you'll see:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization
```

4. To test the production build locally:

```bash
npm run start
```

5. Open `http://localhost:3000` to view the production version

---

## Common Issues and Solutions

### Issue 1: Port 3000 is already in use

**Error:**
```
Port 3000 is already in use
```

**Solution:**
- Close any other applications using port 3000, or
- Use a different port: `npm run dev -- -p 3001`

### Issue 2: Module not found errors

**Error:**
```
Module not found: Can't resolve '@/...'
```

**Solution:**
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Issue 3: ESLint errors

**Error:**
```
ESLint errors preventing build
```

**Solution:**
- For development, you can disable ESLint temporarily
- Or fix the specific errors shown in the terminal

### Issue 4: Out of memory error

**Error:**
```
FATAL ERROR: ... JavaScript heap out of memory
```

**Solution:**
Increase Node.js memory limit:
```bash
$env:NODE_OPTIONS="--max-old-space-size=4096"  # Windows PowerShell
npm run build
```

---

## Cursor IDE Tips

### Using Cursor AI Assistant

1. **Ask questions**: Press `Ctrl+K` to open Cursor AI chat
2. **Code suggestions**: Type `//` and describe what you want, Cursor will suggest code
3. **Explain code**: Select code, right-click → "Ask Cursor" → "Explain this code"

### Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+P` | Quick file search |
| `Ctrl+Shift+F` | Search across all files |
| `Ctrl+D` | Select next occurrence |
| `Alt+Up/Down` | Move line up/down |
| `Ctrl+/` | Toggle comment |
| `Ctrl+`+`` | Open terminal |

---

## Next Steps

1. **Customize the content**: Edit `app/page.tsx` to change text, colors, and layout
2. **Test responsiveness**: Use browser dev tools to test mobile views
3. **Review documentation**: Read `REMOVED_DEPENDENCIES.md` to understand what was removed
4. **Prepare for deployment**: When ready, see `DEPLOYMENT_GUIDE.md`

---

## Getting Help

If you encounter issues:

1. Check the error message in the Cursor terminal
2. Search for the error on Google or Stack Overflow
3. Review Next.js documentation: https://nextjs.org/docs
4. Check Cursor documentation: https://cursor.sh/docs

---

## File Structure Overview

```
voice-agent-builder/
├── app/
│   ├── api/                      # API routes
│   │   ├── agents/create/       # Agent creation endpoint (stubbed)
│   │   └── submit-form/         # Form submission endpoint
│   ├── components/              # React components
│   │   ├── ShaderBackground.tsx # Animated background
│   │   └── ui/                  # UI components
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main landing page
├── lib/
│   ├── supabase.js              # Stubbed Supabase client
│   └── vapi.js                  # Stubbed Vapi functions
├── public/                      # Static assets
├── .env                         # Environment variables
├── package.json                 # Dependencies
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
├── REMOVED_DEPENDENCIES.md      # Documentation of removed services
├── SETUP_INSTRUCTIONS.md        # This file
└── DEPLOYMENT_GUIDE.md          # Production deployment guide
```

---

## Development Workflow

1. **Morning**: Start dev server (`npm run dev`)
2. **Work**: Make changes to files
3. **Test**: Check changes in browser
4. **Build**: Periodically run `npm run build` to ensure no errors
5. **Evening**: Commit your changes (if using Git)

---

## Ready to Deploy?

Once you're happy with your local development and testing, proceed to `DEPLOYMENT_GUIDE.md` for instructions on deploying to Hostinger.

Good luck with your development!
