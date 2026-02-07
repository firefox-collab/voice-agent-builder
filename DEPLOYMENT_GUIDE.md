# Deployment Guide for Hostinger

This guide will walk you through deploying your Voice-Agent-Builder application to Hostinger's hosting service.

---

## Important: Hostinger Compatibility

**Before you begin, please note:**

Hostinger's standard shared hosting **does NOT support Node.js applications** like Next.js out of the box. You have two main options:

### Option 1: Hostinger VPS (Recommended)
- Full control over Node.js environment
- Can run Next.js applications
- More expensive (~$4-8/month)

### Option 2: Static Export to Shared Hosting
- Export Next.js as static HTML/CSS/JS
- Works with standard Hostinger shared hosting
- More affordable (~$2-4/month)
- **Limited functionality** - No server-side features

This guide covers **both options**.

---

## Prerequisites

1. **Hostinger Account**
   - Sign up at: https://www.hostinger.com/
   - Choose between VPS or Shared Hosting

2. **Domain Name** (optional but recommended)
   - Purchase through Hostinger or link existing domain

3. **Local Project Ready**
   - Completed local development
   - Tested with `npm run build` successfully
   - All changes committed (if using Git)

---

## Option 1: Deploy to Hostinger VPS (Full Next.js)

This option maintains all features including API routes and server-side rendering.

### Step 1: Set Up VPS

1. **Purchase Hostinger VPS**
   - Go to Hostinger dashboard
   - Select VPS hosting plan
   - Complete purchase

2. **Access VPS**
   - From Hostinger panel, note your VPS IP address
   - Get SSH credentials (username and password)

3. **Connect via SSH**
   - On Windows: Use PuTTY or Windows Terminal
   - On Mac/Linux: Use built-in terminal

   ```bash
   ssh root@your-vps-ip-address
   ```

### Step 2: Install Required Software

Once connected to your VPS:

```bash
# Update system packages
apt update && apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Verify installation
node --version
npm --version

# Install PM2 (process manager)
npm install -g pm2

# Install nginx (web server)
apt install -y nginx
```

### Step 3: Upload Your Project

**Method A: Using Git (Recommended)**

```bash
# Navigate to web directory
cd /var/www

# Clone your repository
git clone <your-repository-url> voice-agent-builder
cd voice-agent-builder

# Install dependencies
npm install

# Build the project
npm run build
```

**Method B: Using SFTP**

1. Use FileZilla or WinSCP
2. Connect to your VPS using SFTP:
   - Host: your-vps-ip-address
   - Port: 22
   - Username: root
   - Password: your-vps-password

3. Upload entire project folder to `/var/www/voice-agent-builder`

4. SSH into VPS and run:
```bash
cd /var/www/voice-agent-builder
npm install
npm run build
```

### Step 4: Start the Application

```bash
# Start with PM2
pm2 start npm --name "voice-agent" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on boot
pm2 startup
```

### Step 5: Configure Nginx

```bash
# Create nginx configuration
nano /etc/nginx/sites-available/voice-agent
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and exit (Ctrl+X, Y, Enter).

```bash
# Enable the site
ln -s /etc/nginx/sites-available/voice-agent /etc/nginx/sites-enabled/

# Remove default site
rm /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Restart nginx
systemctl restart nginx
```

### Step 6: Point Domain to VPS

1. Go to your domain registrar (or Hostinger domain management)
2. Update DNS A record:
   - Type: A
   - Name: @ (or your subdomain)
   - Value: your-vps-ip-address
   - TTL: 3600

3. Wait 1-24 hours for DNS propagation

### Step 7: Set Up SSL (HTTPS)

```bash
# Install Certbot
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d your-domain.com -d www.your-domain.com

# Test auto-renewal
certbot renew --dry-run
```

Your site should now be live at `https://your-domain.com`!

---

## Option 2: Deploy Static Export to Shared Hosting

This option converts Next.js to static files but loses server-side features.

### Step 1: Configure Static Export

1. Open `next.config.js` in your project:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. Remove or comment out API routes (they won't work in static export):
   - `/app/api/submit-form/route.js`
   - `/app/api/agents/create/route.js`

3. Update form submission in `app/page.tsx` to use external service:

```typescript
// Option: Submit to external form handler like Formspree, Getform, etc.
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

### Step 2: Build Static Files

```bash
# In your local project directory
npm run build

# Next.js will create an 'out' folder with static files
```

### Step 3: Upload to Hostinger

1. **Log in to Hostinger**
   - Go to: https://hpanel.hostinger.com/

2. **Access File Manager**
   - Click on your hosting account
   - Click "File Manager"

3. **Navigate to public_html**
   - Click on `public_html` folder
   - Delete all existing files (if it's a new install)

4. **Upload Files**
   - Click "Upload Files"
   - Select ALL files from your `out` folder
   - Wait for upload to complete

5. **Alternative: Use FTP**
   - Get FTP credentials from Hostinger panel
   - Use FileZilla or similar
   - Upload contents of `out` folder to `public_html`

### Step 4: Configure Domain

1. In Hostinger panel, go to "Domains"
2. Point your domain to the hosting account
3. Wait for DNS propagation (1-24 hours)

### Step 5: Enable SSL

1. In Hostinger panel, go to "SSL"
2. Click "Install SSL"
3. Wait a few minutes for installation

Your site should now be live!

---

## Environment Variables for Production

If you're using external services (Option 1 - VPS):

### Via SSH

```bash
# Navigate to project directory
cd /var/www/voice-agent-builder

# Create/edit .env file
nano .env
```

Add your production variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
VAPI_API_KEY=your_production_vapi_key
N8N_WEBHOOK_URL=your_production_webhook_url
```

Save and restart the application:

```bash
pm2 restart voice-agent
```

---

## Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Forms work (if applicable)
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (HTTPS)
- [ ] DNS is properly configured
- [ ] 404 pages handled correctly
- [ ] Performance is acceptable

---

## Updating Your Deployed Site

### For VPS Deployment:

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Navigate to project
cd /var/www/voice-agent-builder

# Pull latest changes (if using Git)
git pull origin main

# Or upload new files via SFTP

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart application
pm2 restart voice-agent
```

### For Static Export:

1. Make changes locally
2. Run `npm run build`
3. Upload new files from `out` folder to Hostinger
4. Replace old files

---

## Common Issues

### Issue 1: Port 3000 already in use (VPS)

```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Restart your app
pm2 restart voice-agent
```

### Issue 2: Site not loading after deployment

**Check:**
- DNS propagation (use https://dnschecker.org/)
- Nginx configuration: `nginx -t`
- Application status: `pm2 status`
- Nginx logs: `tail -f /var/log/nginx/error.log`

### Issue 3: SSL not working

```bash
# Check certbot
certbot certificates

# Renew manually
certbot renew

# Restart nginx
systemctl restart nginx
```

### Issue 4: 502 Bad Gateway (VPS)

```bash
# Check if app is running
pm2 status

# Check app logs
pm2 logs voice-agent

# Restart app
pm2 restart voice-agent
```

---

## Performance Optimization

### Enable Gzip Compression (VPS)

Add to nginx configuration:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript
           application/x-javascript application/xml+rss
           application/javascript application/json;
```

### Enable Caching

Add to nginx configuration:

```nginx
location /_next/static {
    alias /var/www/voice-agent-builder/.next/static;
    expires 365d;
    access_log off;
}
```

---

## Security Best Practices

1. **Change Default SSH Port** (VPS)
   ```bash
   nano /etc/ssh/sshd_config
   # Change Port 22 to something else (e.g., 2222)
   systemctl restart sshd
   ```

2. **Set Up Firewall** (VPS)
   ```bash
   ufw allow 80/tcp
   ufw allow 443/tcp
   ufw allow 2222/tcp  # Your SSH port
   ufw enable
   ```

3. **Keep Software Updated** (VPS)
   ```bash
   apt update && apt upgrade -y
   ```

4. **Regular Backups**
   - Use Hostinger's backup feature, or
   - Set up automated backups with cron jobs

---

## Monitoring and Maintenance

### Check Application Health (VPS)

```bash
# View running processes
pm2 status

# View logs
pm2 logs voice-agent

# Monitor resources
pm2 monit
```

### Set Up Uptime Monitoring

Use services like:
- UptimeRobot (free): https://uptimerobot.com/
- Pingdom: https://www.pingdom.com/
- StatusCake: https://www.statuscake.com/

---

## Cost Estimate

### Hostinger VPS
- **VPS Plan**: $4-8/month
- **Domain**: $10-15/year
- **SSL**: Free (Let's Encrypt)
- **Total**: ~$5-10/month

### Hostinger Shared Hosting (Static)
- **Hosting**: $2-4/month
- **Domain**: $10-15/year
- **SSL**: Free (included)
- **Total**: ~$3-5/month

---

## Need Help?

### Hostinger Support
- Live chat: Available 24/7 in Hostinger panel
- Knowledge base: https://support.hostinger.com/

### Community Resources
- Next.js Docs: https://nextjs.org/docs
- Nginx Docs: https://nginx.org/en/docs/
- DigitalOcean Tutorials: https://www.digitalocean.com/community/tutorials

---

## Alternative Hosting Options

If Hostinger doesn't meet your needs, consider:

1. **Vercel** (Easiest for Next.js)
   - Free tier available
   - Zero configuration
   - Best for Next.js apps
   - https://vercel.com/

2. **Netlify** (Good for static sites)
   - Free tier available
   - Great for static exports
   - https://www.netlify.com/

3. **DigitalOcean App Platform**
   - Starting at $5/month
   - Managed Node.js hosting
   - https://www.digitalocean.com/

4. **Railway**
   - Easy deployment
   - Pay-as-you-go
   - https://railway.app/

---

**Congratulations!** Your Voice-Agent-Builder should now be live on Hostinger!
