# Render Deployment Troubleshooting

## ✅ FIXED: tsx not found

**Status:** RESOLVED

**What was wrong:** Build tools were in devDependencies

**Fix applied:** Moved tsx, esbuild, vite to dependencies

**Action needed:** Push updated package.json to GitHub

```bash
git add package.json
git commit -m "Fix: Move build tools to dependencies"
git push
```

## Common Issues & Solutions

### 1. Build Fails - Module Not Found

**Error:**
```
sh: 1: tsx: not found
```

**Solution:** ✅ Already fixed! Build tools are now in dependencies.

### 2. Build Fails - Out of Memory

**Error:**
```
FATAL ERROR: Reached heap limit
```

**Solution:**
Add to render.yaml:
```yaml
buildCommand: NODE_OPTIONS="--max-old-space-size=4096" npm ci && npm run build
```

### 3. App Won't Start

**Error:**
```
Error: Cannot find module 'dist/index.cjs'
```

**Solution:**
- Check build logs - did build complete?
- Verify start command: `npm start`
- Check package.json: `"start": "node dist/index.cjs"`

### 4. Port Binding Error

**Error:**
```
Error: listen EADDRINUSE
```

**Solution:**
Ensure server uses `process.env.PORT`:
```typescript
const PORT = process.env.PORT || 5000;
```

### 5. Environment Variables Missing

**Error:**
```
DATABASE_URL is not defined
```

**Solution:**
Your app doesn't need DATABASE_URL (uses in-memory storage).
Only required env vars:
- `NODE_ENV=production` (auto-set)
- `PORT=10000` (auto-set)

### 6. Slow First Load (Free Tier)

**Issue:** App takes 30+ seconds to load

**Reason:** Free tier sleeps after 15 min inactivity

**Solutions:**
- Accept it (normal for free tier)
- Upgrade to Starter plan ($7/mo)
- Use a service like UptimeRobot to ping your site

### 7. Build Takes Too Long

**Issue:** Build times out after 15 minutes

**Solutions:**
- Check for large dependencies
- Remove unused packages
- Consider code splitting
- Upgrade to paid plan (more resources)

### 8. Static Files Not Loading

**Issue:** Images/CSS not loading

**Solution:**
Check paths are relative:
```typescript
// Good
<img src="/images/logo.png" />

// Bad
<img src="./images/logo.png" />
```

### 9. API Routes 404

**Issue:** `/api/contact` returns 404

**Solution:**
- Check server routes are registered
- Verify Express is serving API routes
- Check Render logs for errors

### 10. SSL Certificate Issues

**Issue:** HTTPS not working

**Solution:**
- Wait 5-10 minutes after deployment
- Render provides free SSL automatically
- Check custom domain DNS settings

## Checking Logs

**In Render Dashboard:**
1. Go to your service
2. Click "Logs" tab
3. See real-time output
4. Filter by severity

**Useful log commands:**
```bash
# In your code
console.log('Server started on port', PORT);
console.error('Error:', error);
```

## Verify Deployment

**Checklist:**
- [ ] Build completed successfully
- [ ] Service shows "Live"
- [ ] URL is accessible
- [ ] Homepage loads
- [ ] Animations work
- [ ] Dark mode works
- [ ] Contact form appears
- [ ] Mobile responsive
- [ ] HTTPS active

## Getting Help

**Render Support:**
- Docs: https://render.com/docs
- Community: https://community.render.com
- Status: https://status.render.com

**Check These First:**
1. Build logs in Render dashboard
2. Runtime logs in Render dashboard
3. Browser console for frontend errors
4. Network tab for API errors

## Quick Fixes

**Redeploy:**
```bash
# Force redeploy
git commit --allow-empty -m "Trigger redeploy"
git push
```

**Clear Build Cache:**
In Render dashboard:
1. Go to service settings
2. Click "Clear build cache"
3. Trigger manual deploy

**Restart Service:**
In Render dashboard:
1. Click "Manual Deploy"
2. Select "Clear build cache & deploy"

## Your Deployment is Fixed! ✅

The tsx issue is resolved. Just push your changes and deploy!
