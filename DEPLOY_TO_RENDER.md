# Deploy GAD Legal Consult to Render.com - Complete Guide

## What You Need

1. **GitHub Account** - To host your code
2. **Render Account** - Sign up at https://render.com (free)
3. **Your Code** - Already ready in this folder

## Deployment Process

### Step 1: Push to GitHub

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render

#### Method 1: Blueprint (Easiest - Uses render.yaml)

1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Blueprint"**
3. Click **"Connect GitHub"** and authorize Render
4. Select your repository
5. Render detects `render.yaml` automatically
6. Click **"Apply"**
7. Wait 2-5 minutes for deployment

#### Method 2: Manual Web Service

1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Fill in the form:

```
Name: gad-legal-consult
Runtime: Node
Region: Choose closest to your users
Branch: main
Build Command: npm install && npm run build
Start Command: npm start
Plan: Free (or Starter for $7/month)
```

5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `10000`

6. Click **"Create Web Service"**

### Step 3: Wait for Build

- Render installs dependencies
- Runs build command
- Starts your server
- Assigns a URL: `https://YOUR_APP_NAME.onrender.com`

### Step 4: Test Your Live Site

Visit your Render URL and verify:
- ✅ Homepage loads
- ✅ Scroll animations work
- ✅ Navigation highlighting works
- ✅ Dark mode toggle works
- ✅ Contact form appears
- ✅ All sections display correctly
- ✅ Mobile responsive

## Configuration Files Included

### render.yaml
```yaml
services:
  - type: web
    name: gad-legal-consult
    runtime: node
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
    healthCheckPath: /
```

This file tells Render exactly how to deploy your app.

## Environment Variables

Your app only needs:
- `NODE_ENV=production` (automatically set)
- `PORT=10000` (Render's default)

No database or API keys required!

## Custom Domain Setup (Optional)

### After Deployment:

1. **Buy a domain** (Namecheap, GoDaddy, etc.)
2. **In Render Dashboard:**
   - Go to your service
   - Click "Settings" → "Custom Domain"
   - Click "Add Custom Domain"
   - Enter your domain: `www.gadlegal.com`

3. **Update DNS Records:**
   - Add CNAME record: `www` → `your-app.onrender.com`
   - Or A record to Render's IP (shown in dashboard)

4. **SSL Certificate:**
   - Render provides free SSL automatically
   - Takes 5-10 minutes to activate
   - Your site will be HTTPS

## Automatic Deployments

Once connected, Render automatically redeploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update website"
git push

# Render automatically:
# 1. Detects the push
# 2. Runs build
# 3. Deploys new version
# 4. Zero downtime
```

## Free Tier Details

**What You Get:**
- 750 hours/month (enough for one always-on service)
- Free SSL on Render subdomain
- Automatic deployments
- Build minutes included

**Limitations:**
- App sleeps after 15 min of inactivity
- Cold start: ~30 seconds on first request
- Shared resources (slower performance)

**When to Upgrade ($7/month Starter):**
- No sleep/downtime
- Faster performance
- Custom domain with SSL
- More resources

## Monitoring Your App

### Render Dashboard Shows:
- **Logs** - Real-time server logs
- **Metrics** - CPU, memory, requests
- **Events** - Deployments, restarts
- **Health** - Uptime status

### Check Logs:
1. Go to your service in Render
2. Click "Logs" tab
3. See real-time output
4. Contact form submissions appear here

## Troubleshooting

### Build Fails
```
Error: Cannot find module 'xyz'
```
**Fix:** Add missing dependency to package.json

### App Won't Start
```
Error: Cannot find dist/index.cjs
```
**Fix:** Ensure build command ran successfully

### Port Error
```
Error: EADDRINUSE
```
**Fix:** Render handles ports automatically, don't hardcode

### Slow Loading
**Issue:** First load takes 30+ seconds
**Reason:** Free tier cold start (normal)
**Fix:** Upgrade to paid plan or accept cold starts

## Alternative Platforms

If you want to try other platforms:

### Vercel (Recommended for Static)
- Excellent performance
- Free tier generous
- Easy setup
- Global CDN

### Netlify
- Similar to Vercel
- Great for static sites
- Free tier available

### Railway
- Similar to Render
- $5/month minimum
- No sleep on free trial

### Fly.io
- Global deployment
- Free tier available
- More complex setup

## Cost Comparison

| Platform | Free Tier | Paid Plan | Best For |
|----------|-----------|-----------|----------|
| Render | 750hrs, sleeps | $7/mo | Full-stack apps |
| Vercel | Generous | $20/mo | Static/Serverless |
| Netlify | 100GB/mo | $19/mo | Static sites |
| Railway | $5 credit | $5/mo | Hobby projects |

## Next Steps After Deployment

1. **Share your URL** with clients
2. **Set up analytics** (Google Analytics, Plausible)
3. **Monitor performance** in Render dashboard
4. **Update content** as needed (auto-deploys)
5. **Consider custom domain** for professional look

## Quick Reference

**Your Render URL:** `https://gad-legal-consult.onrender.com` (after deployment)

**Build Command:** `npm install && npm run build`

**Start Command:** `npm start`

**Port:** 10000 (Render default)

**Deployment Time:** 2-5 minutes

**Auto-Deploy:** Yes (on git push)

Ready to go live! 🚀
