# Render.com Deployment - Quick Reference Card

## 📋 Deployment Commands

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Deploy GAD Legal Consult"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 2. Go to Render.com
# https://dashboard.render.com
# New + → Blueprint → Connect Repo → Apply

# 3. Your site is live!
# https://gad-legal-consult.onrender.com
```

## ⚙️ Configuration (Already Done)

**File:** `render.yaml`
```yaml
Build: npm install && npm run build
Start: npm start
Port: 10000
Environment: production
```

## 🌍 Your URLs

**Local Development:**
- http://localhost:5000

**Render Production:**
- https://gad-legal-consult.onrender.com (after deployment)
- Or your custom domain

## 🔄 Update Deployment

```bash
# Make changes
git add .
git commit -m "Update website"
git push

# Render auto-deploys (2-3 minutes)
```

## 💰 Pricing

**Free Tier:**
- 750 hours/month
- Sleeps after 15 min
- Cold start: ~30 sec
- Perfect for demos

**Starter ($7/mo):**
- Always on
- No cold starts
- Custom domain + SSL
- Better performance

## 🛠️ Render Dashboard

**Access:** https://dashboard.render.com

**Features:**
- Real-time logs
- Deployment history
- Environment variables
- Custom domains
- Metrics & monitoring

## 📞 Support

**Render:**
- Docs: https://render.com/docs
- Status: https://status.render.com
- Community: https://community.render.com

**Your App:**
- Check logs in Render dashboard
- Contact form logs appear in server logs

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] Repository connected
- [ ] Blueprint applied
- [ ] Build successful
- [ ] Site accessible
- [ ] All features working
- [ ] Mobile responsive
- [ ] SSL active (HTTPS)

## 🎯 What Gets Deployed

✅ React frontend with animations
✅ Express backend for forms
✅ All images and assets
✅ Custom GAD favicon
✅ Dark mode functionality
✅ Contact form handling
✅ Newsletter subscription

## 🚨 Important Notes

1. **First deploy takes 2-5 minutes**
2. **Free tier sleeps after 15 min** (normal)
3. **Auto-deploys on git push** (convenient)
4. **Logs show form submissions** (check dashboard)
5. **No database needed** (in-memory storage)

## 🎉 You're Ready!

Your website is deployment-ready. Just push to GitHub and connect to Render!
