# Quick Command Reference

## 🚀 Deploy to Render (After Fix)

```bash
# Commit the fix
git add package.json render.yaml
git commit -m "Fix: Move build tools to dependencies for Render"
git push

# Render auto-deploys in 2-5 minutes
# Visit: https://gad-legal-consult.onrender.com
```

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:5000
```

## 🏗️ Build & Test

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Type check
npm run check
```

## 🔄 Update Deployment

```bash
# Make changes, then:
git add .
git commit -m "Your update message"
git push

# Render auto-deploys
```

## 🧹 Clean & Rebuild

```bash
# Remove build artifacts
Remove-Item -Recurse -Force dist

# Remove dependencies
Remove-Item -Recurse -Force node_modules

# Fresh install
npm install

# Build
npm run build
```

## 🐛 Troubleshooting

```bash
# Check for TypeScript errors
npm run check

# Test build
npm run build

# Check if port is in use
netstat -ano | findstr :5000

# Kill process on port 5000
taskkill /F /PID <PID>
```

## 📦 Package Management

```bash
# Install new package
npm install package-name

# Install as dev dependency
npm install -D package-name

# Update all packages
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## 🌐 Git Commands

```bash
# Check status
git status

# View changes
git diff

# Commit all changes
git add .
git commit -m "Your message"

# Push to GitHub
git push

# View commit history
git log --oneline

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main
```

## 🎯 Render Dashboard

**Access:** https://dashboard.render.com

**Useful actions:**
- View logs: Click "Logs" tab
- Manual deploy: Click "Manual Deploy"
- Clear cache: Settings → "Clear build cache"
- Environment vars: Settings → "Environment"
- Custom domain: Settings → "Custom Domain"

## 📊 Check Deployment Status

**In Render Dashboard:**
- Green dot = Live
- Yellow dot = Deploying
- Red dot = Failed

**Check logs:**
- Build logs: See build process
- Runtime logs: See server output
- Events: See deployment history

## 🔗 Important URLs

**Local:**
- http://localhost:5000

**Render:**
- Dashboard: https://dashboard.render.com
- Your app: https://gad-legal-consult.onrender.com (after deploy)
- Docs: https://render.com/docs

## ⚡ One-Line Commands

```bash
# Full deploy from scratch
git init && git add . && git commit -m "Initial" && git push -u origin main

# Quick update
git add . && git commit -m "Update" && git push

# Clean rebuild
Remove-Item -Recurse -Force dist,node_modules; npm install; npm run build

# Test everything
npm install && npm run build && npm start
```

## 📝 Notes

- `npm ci` is faster than `npm install` (used in Render)
- Build takes 2-5 minutes on Render
- Free tier sleeps after 15 min (normal)
- Auto-deploy on every git push
- Logs show form submissions

## 🎉 You're All Set!

Everything is configured and ready. Just push to GitHub and deploy!
