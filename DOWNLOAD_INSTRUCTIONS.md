# Download and Installation Instructions

This guide explains how to download and prepare your Voice-Agent-Builder application for local development.

---

## Quick Start Overview

Here's what you'll do:

1. **Download** the project files
2. **Extract** to your local PC
3. **Open** in Cursor IDE
4. **Install** dependencies
5. **Run** the development server

**Total time:** 10-15 minutes

---

## Step 1: Download the Project

You're currently working in an online development environment. To download your project to your local PC, you have several options:

### Option A: Download as ZIP (Recommended for Beginners)

#### From Bolt.new (if applicable):

1. Click the **"Download Project"** button (usually in the top-right corner)
2. Choose **"Download as ZIP"**
3. Save the file to your computer (e.g., `Downloads` folder)
4. The file will be named something like `voice-agent-builder.zip`

#### Manual Download:

If there's no download button, you can manually create a ZIP:

1. Select all project files in the file browser
2. Right-click and select "Download" or "Download as ZIP"
3. Save to your desired location

### Option B: Using Git (For Advanced Users)

If you've pushed your code to GitHub, GitLab, or similar:

1. Copy your repository URL
2. On your local PC, open terminal/command prompt
3. Navigate to where you want the project:
   ```bash
   cd C:\Projects
   ```
4. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```

---

## Step 2: Extract the Files

1. **Locate the downloaded ZIP file**
   - Usually in your `Downloads` folder
   - Look for `voice-agent-builder.zip` (or similar name)

2. **Extract the ZIP**
   - **Windows:** Right-click the ZIP → "Extract All..." → Choose destination
   - **Mac:** Double-click the ZIP file
   - **Linux:** Right-click → "Extract Here"

3. **Recommended location:**
   ```
   Windows: C:\Projects\voice-agent-builder
   Mac: ~/Projects/voice-agent-builder
   Linux: ~/Projects/voice-agent-builder
   ```

4. **Verify the extraction:**
   - Open the folder
   - You should see files like:
     - `package.json`
     - `next.config.js`
     - `app/` folder
     - `lib/` folder
     - etc.

---

## Step 3: Prepare for Cursor

Before opening in Cursor, make sure you have:

### Prerequisites Installed:

#### Node.js (Required)

**Check if already installed:**
```bash
node --version
```

**If not installed:**
1. Download from: https://nodejs.org/
2. Choose the **LTS version** (recommended)
3. Run the installer
4. Restart your computer
5. Verify: `node --version` (should show v18.x.x or higher)

#### Cursor IDE (Required)

**Download and install:**
1. Go to: https://cursor.sh/
2. Click "Download for Windows/Mac/Linux"
3. Install the application
4. Launch Cursor

---

## Step 4: Open in Cursor

1. **Launch Cursor IDE**

2. **Open the project:**
   - Click **File** → **Open Folder**
   - Navigate to where you extracted the project
   - Select the `voice-agent-builder` folder
   - Click **Select Folder** or **Open**

3. **Cursor will load the project**
   - You'll see the file structure in the left sidebar
   - The editor will open in the center
   - Terminal panel will be at the bottom (or can be opened with Ctrl+`)

---

## Step 5: Verify Project Structure

Make sure you have these key files and folders:

```
voice-agent-builder/
├── app/
│   ├── api/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── supabase.js
│   └── vapi.js
├── public/
├── .env
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── REMOVED_DEPENDENCIES.md
├── SETUP_INSTRUCTIONS.md
├── DEPLOYMENT_GUIDE.md
└── DOWNLOAD_INSTRUCTIONS.md  (this file)
```

**If any files are missing**, you may have extracted the wrong folder. Look for a nested folder inside and use that one instead.

---

## Step 6: Install Dependencies

Now you need to install all the required npm packages.

1. **Open Cursor's integrated terminal:**
   - Press `Ctrl+`` (backtick) or
   - Menu: **Terminal** → **New Terminal**

2. **Make sure you're in the project root:**
   ```bash
   # You should see the project name in the terminal prompt
   # Example: PS C:\Projects\voice-agent-builder>

   # Verify with:
   dir  # Windows
   ls   # Mac/Linux

   # You should see package.json listed
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Wait for installation:**
   - This may take 2-5 minutes
   - You'll see progress messages
   - When complete, you'll see something like:
     ```
     added 312 packages, and audited 313 packages in 2m
     ```

5. **If you see errors:**
   - Make sure Node.js is properly installed
   - Try closing and reopening Cursor
   - Delete `node_modules` folder and try again

---

## Step 7: Run the Development Server

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Wait for startup:**
   You should see:
   ```
     ▲ Next.js 14.2.18
     - Local:        http://localhost:3000

    ✓ Ready in 2.3s
   ```

3. **Open in browser:**
   - Open your web browser
   - Navigate to: `http://localhost:3000`
   - You should see the Voice-Agent-Builder landing page!

---

## Step 8: Test Everything

### Test 1: Page Loads
- [ ] Landing page displays correctly
- [ ] Navigation menu works
- [ ] All sections are visible
- [ ] Animated background shows

### Test 2: Form Submission
- [ ] Scroll to the bottom CTA form
- [ ] Fill in test data
- [ ] Click "Start My Free Trial"
- [ ] Success message appears

### Test 3: Hot Reload
- [ ] Open `app/page.tsx` in Cursor
- [ ] Find the main heading (around line 113)
- [ ] Change the text slightly
- [ ] Save (Ctrl+S)
- [ ] Browser automatically refreshes with your change

If all tests pass, **you're ready to develop!**

---

## Common Issues and Solutions

### Issue 1: "npm: command not found"

**Problem:** Node.js not installed or not in PATH

**Solution:**
1. Install Node.js from https://nodejs.org/
2. Restart your computer
3. Open a new terminal and try again

### Issue 2: "Cannot find module"

**Problem:** Dependencies not installed correctly

**Solution:**
```bash
# Delete node_modules and lockfile
rm -rf node_modules package-lock.json  # Mac/Linux
# OR
rmdir /s node_modules && del package-lock.json  # Windows

# Reinstall
npm install
```

### Issue 3: "Port 3000 is already in use"

**Problem:** Another application is using port 3000

**Solution:**
```bash
# Use a different port
npm run dev -- -p 3001

# Or find and kill the process using port 3000
```

### Issue 4: Files are read-only

**Problem:** Extracted files have read-only permissions

**Solution:**
1. Right-click project folder
2. Properties → Security
3. Make sure your user has "Full Control"
4. Apply to all subfolders

### Issue 5: Cursor won't open the folder

**Problem:** Folder path is too long or has special characters

**Solution:**
1. Extract to a shorter path (e.g., `C:\Projects\vab`)
2. Avoid spaces and special characters in folder names
3. Try opening Cursor as Administrator

---

## Next Steps

Now that you have the project running locally:

1. **Read the documentation:**
   - `REMOVED_DEPENDENCIES.md` - Understand what was removed
   - `SETUP_INSTRUCTIONS.md` - Detailed setup guide
   - `DEPLOYMENT_GUIDE.md` - When ready to deploy

2. **Start customizing:**
   - Edit content in `app/page.tsx`
   - Modify styles in `app/globals.css`
   - Add new components in `app/components/`

3. **Test regularly:**
   - Run `npm run build` to test production build
   - Check mobile responsiveness
   - Test form functionality

4. **Prepare for deployment:**
   - Test thoroughly in development
   - Fix any bugs or issues
   - Follow `DEPLOYMENT_GUIDE.md` when ready

---

## File Management Tips

### Keep Your Project Organized

1. **Use version control (Git):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Regular backups:**
   - Copy the entire project folder regularly
   - Or push to GitHub/GitLab

3. **Don't commit sensitive files:**
   - `.env` should never be shared
   - `node_modules` is too large (will be recreated)
   - `.next` is build output (will be recreated)

### Recommended .gitignore

If using Git, make sure you have:

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

---

## Folder Size and Storage

**Expected sizes:**
- Downloaded ZIP: ~5-10 MB
- Extracted project: ~10-15 MB
- After `npm install`: ~300-400 MB (includes node_modules)
- After first build: ~400-500 MB (includes .next)

**Storage recommendations:**
- Keep at least 1 GB free on your drive
- node_modules can be deleted and reinstalled anytime
- .next folder can be deleted and rebuilt anytime

---

## Getting Help

If you encounter issues not covered here:

1. **Check the error message**
   - Read it carefully
   - Copy the exact error text

2. **Search online:**
   - Google the error message
   - Check Stack Overflow
   - Review Next.js documentation

3. **Cursor AI Assistant:**
   - Press `Ctrl+K` in Cursor
   - Describe your problem
   - Cursor AI can help debug

4. **Community resources:**
   - Next.js Discord: https://nextjs.org/discord
   - Next.js GitHub Discussions: https://github.com/vercel/next.js/discussions

---

## Checklist

Use this checklist to ensure everything is set up correctly:

- [ ] Project downloaded and extracted
- [ ] Node.js installed (v18+)
- [ ] Cursor IDE installed
- [ ] Project opened in Cursor
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server runs (`npm run dev`)
- [ ] Website opens at localhost:3000
- [ ] Form submission works
- [ ] Hot reload works when editing files
- [ ] Production build works (`npm run build`)
- [ ] Read all documentation files

---

**You're all set!** Continue with `SETUP_INSTRUCTIONS.md` for detailed development guidance.

Happy coding! 🚀
