# Voice Agent Builder 🎙️

**AI Voice Receptionists for Philippine SMBs**

---

## 📦 Local Development Version

This version has been prepared for **local development and testing** on your PC. All external dependencies (Supabase, Vapi, n8n) have been removed or stubbed out to allow you to work offline and iterate quickly.

### 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   ```
   http://localhost:3000
   ```

### 📚 Documentation

**Please read these guides in order:**

1. **[DOWNLOAD_INSTRUCTIONS.md](./DOWNLOAD_INSTRUCTIONS.md)** - How to download and extract this project
2. **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Complete setup guide for Cursor IDE
3. **[REMOVED_DEPENDENCIES.md](./REMOVED_DEPENDENCIES.md)** - What was removed and how to restore it
4. **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - How to deploy to Hostinger production server

---

## 🎯 What is Voice Agent Builder?

Voice Agent Builder helps Philippine small and medium businesses deploy AI voice receptionists in 3 simple steps:

1. **Choose your industry** (Restaurant, Clinic, Salon, Retail, Real Estate, Auto Repair)
2. **Customize your agent** (voice, personality, business details)
3. **Launch and relax** (24/7 AI receptionist handles calls)

### Key Features

- ⚡ **5-minute setup** - No coding required
- 🗣️ **Natural conversations** - Understands Taglish (code-switching)
- 📅 **Smart scheduling** - Books and manages appointments
- 📊 **Call analytics** - Track what customers ask about
- 🔒 **Secure & private** - Bank-level encryption
- 💰 **Affordable pricing** - Starting at ₱1,500/month

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Components:** Custom UI components
- **TypeScript:** For type safety

### Backend (Currently Stubbed)
- **Database:** Supabase (PostgreSQL)
- **Voice AI:** Vapi.ai
- **Automation:** n8n workflows
- **Authentication:** Supabase Auth

### Development Tools
- **IDE:** Cursor (recommended)
- **Package Manager:** npm
- **Linting:** ESLint
- **Build:** Next.js build system

---

## 📁 Project Structure

```
voice-agent-builder/
├── app/
│   ├── api/                    # API routes (stubbed)
│   │   ├── agents/create/     # Voice agent creation
│   │   └── submit-form/       # Form submission
│   ├── components/            # React components
│   │   ├── ShaderBackground.tsx
│   │   └── ui/               # Reusable UI components
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── lib/
│   ├── supabase.js           # Stubbed Supabase client
│   └── vapi.js               # Stubbed Vapi functions
├── public/                   # Static assets
├── .env                      # Environment variables
├── package.json              # Dependencies
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── *.md                      # Documentation files
```

---

## 🚀 Current Status

**Version:** Local Development Build
**Built by:** AICore
**Founder:** Art

### ✅ Completed Features

- ✓ Professional landing page design
- ✓ Animated shader background
- ✓ Industry-specific solutions showcase
- ✓ Pricing calculator
- ✓ FAQ accordion
- ✓ Contact form (local submission)
- ✓ Mobile responsive design
- ✓ Prepared for local development

### 🔄 Pending Integration

- ⏳ Supabase database connection
- ⏳ Vapi voice AI integration
- ⏳ n8n automation workflows
- ⏳ User authentication
- ⏳ Payment processing (Stripe)
- ⏳ Production deployment

---

## 💻 Development Workflow

### For Local Testing

1. **Make changes** to any file
2. **Save** (Ctrl+S) - browser auto-refreshes
3. **Test** in browser at localhost:3000
4. **Iterate** quickly without external dependencies

### Building for Production

```bash
# Test production build
npm run build

# Run production build locally
npm run start
```

### Testing Checklist

- [ ] Landing page loads correctly
- [ ] All sections display properly
- [ ] Navigation works
- [ ] Form submission works
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Production build succeeds

---

## 🌐 External Services (Not Included)

This local version **does not** include:

- **Supabase** - Database and authentication
- **Vapi.ai** - Voice AI agents
- **n8n** - Workflow automation
- **Stripe** - Payment processing

See [REMOVED_DEPENDENCIES.md](./REMOVED_DEPENDENCIES.md) for details on how to restore these services.

---

## 📦 Deployment Options

### Option 1: Hostinger VPS
- Full Next.js support
- Server-side rendering
- API routes work
- ~$5-10/month

### Option 2: Hostinger Shared Hosting
- Static export only
- Limited functionality
- More affordable
- ~$3-5/month

### Option 3: Vercel (Recommended)
- Zero configuration
- Best for Next.js
- Free tier available
- Easiest deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete instructions.

---

## 🎓 Learning Resources

### Next.js
- Official Docs: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn

### Tailwind CSS
- Official Docs: https://tailwindcss.com/docs
- Components: https://tailwindui.com/

### React
- Official Docs: https://react.dev/
- React Patterns: https://reactpatterns.com/

### TypeScript
- Official Docs: https://www.typescriptlang.org/docs/

---

## 🐛 Troubleshooting

### Common Issues

**Port 3000 in use:**
```bash
npm run dev -- -p 3001
```

**Module not found:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run build
# Check output for specific errors
```

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for more troubleshooting tips.

---

## 📝 Next Steps

1. **Complete local setup** following [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
2. **Customize the design** - Edit colors, text, images
3. **Test all features** - Ensure everything works as expected
4. **Plan integration** - Review [REMOVED_DEPENDENCIES.md](./REMOVED_DEPENDENCIES.md)
5. **Deploy to production** - Follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 📫 Support

If you need help:

1. Check the documentation files first
2. Review Next.js documentation
3. Use Cursor AI assistant (Ctrl+K)
4. Search for errors on Google/Stack Overflow

---

## 📄 License

See [LICENSE](./LICENSE) file for details.

---

## 🙏 Credits

**Built with:**
- Next.js
- Tailwind CSS
- Cursor IDE
- Love and patience ❤️

**Building HOME, one voice agent at a time.** 🏡