# Render.com Deployment Checklist

## Pre-Deployment

### 1. Test Locally
- [ ] Run `npm install` to ensure all dependencies work
- [ ] Run `npm run build` to test production build
- [ ] Run `npm start` to test production server
- [ ] Visit http://localhost:5000 and test all features
- [ ] Test contact form submission
- [ ] Test dark mode toggle
- [ ] Test navigation and scroll animations
- [ ] Test on mobile viewport

### 2. Prepare Repository
- [ ] Create GitHub repository
- [ ] Ensure `.gitignore` excludes:
  - `node_modules/`
  - `dist/`
  - `.env`
  - `.local/`
- [ ] Commit all changes
- [ ] Push to GitHub

### 3. Verify Configuration Files
- [ ] `render.yaml` exists in project root
- [ ] `package.json` has correct scripts:
  - `build`: `tsx script/build.ts`
  - `start`: `node dist/index.cjs`
- [ ] `.env.example` documents required variables

## Deployment Steps

### 1. Connect to Render
- [ ] Go to https://render.com
- [ ] Sign up or log in
- [ ] Click "New +" → "Blueprint" (or "Web Service")

### 2. Configure Service
- [ ] Connect GitHub repository
- [ ] Select repository: `gad-legal-consult`
- [ ] Render detects `render.yaml` automatically
- [ ] Review settings:
  - Build Command: `npm install && npm run build`
  - Start Command: `npm start`
  - Environment: `NODE_ENV=production`, `PORT=10000`

### 3. Deploy
- [ ] Click "Apply" or "Create Web Service"
- [ ] Wait for build to complete (2-5 minutes)
- [ ] Check build logs for errors

## Post-Deployment

### 1. Verify Deployment
- [ ] Visit your Render URL (e.g., `https://gad-legal-consult.onrender.com`)
- [ ] Test all pages and sections
- [ ] Check scroll animations work
- [ ] Test navigation highlighting
- [ ] Test contact form
- [ ] Test dark mode
- [ ] Test on mobile device
- [ ] Check favicon appears correctly

### 2. Monitor
- [ ] Check Render dashboard for logs
- [ ] Monitor for any errors
- [ ] Test after app wakes from sleep (free tier)

### 3. Optional: Custom Domain
- [ ] Purchase domain (e.g., from Namecheap, GoDaddy)
- [ ] Add custom domain in Render settings
- [ ] Update DNS records (A record or CNAME)
- [ ] Wait for SSL certificate (automatic)
- [ ] Verify domain works with HTTPS

## Common Issues & Solutions

### Build Fails
**Problem:** Dependencies fail to install
**Solution:** 
- Check Node version compatibility
- Verify all dependencies in package.json
- Check Render build logs

### App Won't Start
**Problem:** Server doesn't start after build
**Solution:**
- Verify `dist/index.cjs` was created
- Check start command: `npm start`
- Review server logs in Render dashboard

### Port Binding Error
**Problem:** App tries to use wrong port
**Solution:**
- Ensure server reads `process.env.PORT`
- Render sets PORT=10000 automatically
- Check `server/index.ts` uses `process.env.PORT`

### Slow First Load
**Problem:** App takes 30+ seconds to load
**Solution:**
- This is normal on free tier (cold start)
- App sleeps after 15 min inactivity
- Upgrade to paid plan for always-on service

### Forms Don't Work
**Problem:** Contact form submissions fail
**Solution:**
- Check server logs in Render
- Verify API routes are working
- Currently logs to console (check Render logs)

## Render Free Tier Notes

**Limitations:**
- 750 hours/month runtime
- App sleeps after 15 min inactivity
- Cold start: ~30 seconds
- Shared resources

**Good For:**
- Portfolio websites
- Demo projects
- Low-traffic sites
- Testing before production

**When to Upgrade:**
- Need 24/7 uptime
- High traffic expected
- Custom domain with SSL
- Faster performance

## Quick Commands

```bash
# Test build locally
npm run build

# Test production server locally
npm start

# Push updates
git add .
git commit -m "Your update message"
git push

# Render auto-deploys on push
```

## Support Resources

- Render Docs: https://render.com/docs
- Render Status: https://status.render.com
- Community Forum: https://community.render.com

Your website is ready for deployment! 🚀
