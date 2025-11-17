# 🚀 Deploy TextFlow to GitHub Pages

## Method 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Push Your Code to GitHub

If you haven't already:

```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **"Settings"** (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **"Save"**

### Step 3: Wait for Deployment

- GitHub will build and deploy your site
- It usually takes 1-2 minutes
- You'll see a green checkmark when it's done

### Step 4: Access Your Site

Your site will be live at:
**`https://[yourgithub_handle].github.io/textflow/`**

---

## Method 2: Using GitHub Actions (Advanced)

If you want more control, you can use GitHub Actions:

### Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

---

## Important: Fix Asset Paths for GitHub Pages

GitHub Pages serves from a subdirectory (`/textflow/`), but your paths use absolute paths (`/styles.css`). 

### Quick Fix: Add Base Tag

Add this to the `<head>` section in `index.html` (right after `<meta charset="UTF-8">`):

```html
<base href="/textflow/">
```

This tells the browser to prepend `/textflow/` to all relative paths, making your absolute paths work correctly.

**OR** if you want to use a custom domain, you can keep absolute paths and they'll work fine.

---

## Custom Domain (Optional)

1. In GitHub Pages settings, add your custom domain
2. Update DNS records as instructed
3. Your site will be available at your custom domain

---

## Troubleshooting

### Images/CSS/JS Not Loading?

- Check that paths use relative paths (`/assets/...` not `assets/...`)
- Clear browser cache (hard refresh: Cmd+Shift+R)
- Check GitHub Pages build logs in Settings → Pages

### 404 Errors?

- Make sure `index.html` is in the root directory
- Check that GitHub Pages is enabled and pointing to `main` branch

---

## Quick Deploy Checklist

- [ ] Code pushed to GitHub (`main` branch)
- [ ] GitHub Pages enabled in Settings
- [ ] Source set to `main` branch, `/ (root)` folder
- [ ] Wait 1-2 minutes for deployment
- [ ] Visit: `https://[yourgithub_handle].github.io/textflow/`

---

**That's it!** Your site will auto-deploy on every push to `main` branch. 🎉

