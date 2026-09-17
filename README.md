# Yakimenko Labs
 
Professional landing site for Yakimenko Labs — AI products, creator partnerships, and apps that ship.

## About

Founded by Kostiantyn Yakymenko ([@ilusha_help](https://www.tiktok.com/@ilusha_help)), Yakimenko Labs builds AI products and creates authentic product UGC films where technology runs live on camera.

- **Reach**: ~9.4M followers across platforms, ~120M monthly viewers
- **Apps**: Talori, Soda AI, NutriGen, Solo ZR (Nikon Z camera control)
- **Partnerships**: Creator UGC for brands that ship real products

## Running Locally

This is a static site — no build process required.

1. Clone the repository
2. Open `index.html` in your browser

Or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/` (root) folder
5. Click Save

Your site will be live at `https://ilushahelp-oss.github.io/repository-name`

## Connecting Custom Domain (yakimenkolabs.com)

The `CNAME` file is already configured for `yakimenkolabs.com`.

### DNS Configuration

Add these DNS records at your domain registrar:

**For Apex Domain (yakimenkolabs.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain (www.yakimenkolabs.com):**
```
Type: CNAME
Name: www
Value: ilushahelp-oss.github.io
```

### GitHub Pages Configuration

1. In GitHub repository: Settings → Pages
2. Under "Custom domain", enter: `yakimenkolabs.com`
3. Click Save
4. Wait for DNS check to complete
5. Enable "Enforce HTTPS" (recommended)

DNS propagation can take 24-48 hours.

## Alternative: Cloudflare Pages

1. Log in to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
4. Deploy
5. Add custom domain `yakimenkolabs.com` in Pages → Custom domains

Cloudflare handles DNS automatically if your domain is on Cloudflare.

## Structure

```
.
├── index.html       # Main HTML file
├── style.css        # Styles (CSS variables, responsive design)
├── script.js        # Vanilla JS (smooth scroll, animations)
├── CNAME            # Custom domain configuration
└── README.md        # This file
```

## Contact

- Email: ilushahelp@gmail.com
- Media Kit: https://ilushahelp-oss.github.io/ilusha-help-media-kit/
- Partner Inquiry: https://ilushahelp-oss.github.io/ilusha-help-media-kit/discuss.html

## License

© 2026 Yakimenko Labs. All rights reserved.
