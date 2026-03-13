# Deploy GAD Legal Consult to Render.com

## Quick Start

### Prerequisites
- GitHub account
- Render.com account (free tier available)
- Your code pushed to a GitHub repository

### Step-by-Step Deployment

#### 1. Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - GAD Legal Consult website"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/gad-legal-consult.git

# Push to GitHub
git push -u origin main
```

#### 2. Deploy on Render.com

**Option A: Using render.yaml (Recommended)**

1. Go to https://render.com and sign in
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml`
5. Click "Apply" to deploy

**Option B: Manual Setup**

1. Go to https://render.com and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:

**Settings:**
- Name: `gad-legal-consult`
- Runtime: `Node`
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Plan: `Free` (or choose paid plan)

**Environment Variables:**
- `NODE_ENV` = `production`
- `PORT` = `10000` (Render uses this port)

5. Click "Create Web Service"

#### 3. Wait for Deployment

- First deployment takes 2-5 minutes
- Render will install dependencies and build your app
- You'll get a URL like: `https://gad-legal-consult.onrender.com`

#### 4. Configure Custom Domain (Optional)

1. In Render dashboard, go to your service
2. Click "Settings" → "Custom Domain"
3. Add your domain (e.g., `www.gadlegal.com`)
4. Update your DNS records as instructed by Render
5. Render provides free SSL certificates

## Configuration Files

### render.yaml
Already created in your project root. This file tells Render how to deploy your app.

### Environment Variables
Your app works without a database, so no additional env vars needed. The required ones are:
- `NODE_ENV=production` (set automatically)
- `PORT=10000` (Render's default)

## Post-Deployment

### Verify Your Deployment
1. Visit your Render URL
2. Test all sections and animations
3. Check contact form submission (logs to console)
4. Test dark mode toggle
5. Verify navigation highlighting works

### Monitor Your App
- Render dashboard shows logs and metrics
- Free tier: App sleeps after 15 min of inactivity
- First request after sleep takes ~30 seconds to wake up

### Update Your Deployment
```bash
# Make changes to your code
git add .
git commit -m "Update website"
git push

# Render automatically redeploys on push
```

## Troubleshooting

### Build Fails
- Check Render logs for errors
- Verify all dependencies are in package.json
- Ensure Node version compatibility

### App Won't Start
- Check start command: `npm start`
- Verify build created `dist/index.cjs`
- Check environment variables

### Port Issues
- Render uses PORT=10000 by default
- Your app reads from process.env.PORT
- Don't hardcode port numbers

## Free Tier Limitations

- App sleeps after 15 minutes of inactivity
- 750 hours/month of runtime
- Slower cold starts
- No custom SSL on free tier (Render subdomain only)

**Upgrade to paid plan for:**
- No sleep/downtime
- Faster performance
- Custom domains with SSL
- More resources

## Alternative: Static Site Deployment

Since your website is mostly static, you could also deploy to:
- **Render Static Site** (free, no sleep)
- **Vercel** (free, excellent performance)
- **Netlify** (free, easy setup)
- **Cloudflare Pages** (free, global CDN)

However, you need the Express server for form handling, so Web Service is the right choice.

## Need Help?

- Render Docs: https://render.com/docs
- Render Community: https://community.render.com
- Check Render status: https://status.render.com

Your website is ready to deploy! Just push to GitHub and connect to Render.
