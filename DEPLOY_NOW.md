# Deploy to Render.com - Quick Start

## ✅ Build Issue Fixed!
Moved build tools to dependencies. Your deployment will now work!

## 🚀 Deploy in 5 Minutes

### Step 1: Push to GitHub (2 minutes)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "GAD Legal Consult - Ready for deployment"

# Create a new repository on GitHub.com, then run:
git remote add origin https://github.com/YOUR_USERNAME/gad-legal-consult.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render (3 minutes)

1. **Go to:** https://dashboard.render.com
2. **Click:** "New +" → "Blueprint"
3. **Connect:** Your GitHub account
4. **Select:** Your repository
5. **Click:** "Apply"
6. **Wait:** 2-5 minutes for build

**Done!** Your site will be live at: `https://gad-legal-consult.onrender.com`

## That's It!

Your website is now live with:
- ✅ Professional scroll animations
- ✅ Active navigation highlighting
- ✅ Dark mode toggle
- ✅ Contact form
- ✅ Custom GAD favicon
- ✅ Automatic HTTPS
- ✅ Auto-deploy on git push

## Free Tier Notes

- App sleeps after 15 min of inactivity
- First load after sleep: ~30 seconds
- Perfect for portfolio/demo sites
- Upgrade to $7/month for always-on

## Update Your Site

```bash
# Make changes to your code
git add .
git commit -m "Update website"
git push

# Render automatically redeploys!
```

## Need Custom Domain?

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Render: Settings → Custom Domain
3. Add your domain
4. Update DNS records (Render shows instructions)
5. Free SSL certificate (automatic)

## Support

- **Render Docs:** https://render.com/docs
- **Issues?** Check Render dashboard logs
- **Questions?** https://community.render.com

Your website is deployment-ready! 🎉
