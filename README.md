# Yakimenko Labs — Premium Landing Site

Professional, premium landing site for Yakimenko Labs — AI products, creator partnerships, and apps that ship.

## About

Founded by **Kostiantyn Yakymenko** ([@ilusha_help](https://www.tiktok.com/@ilusha_help)), Yakimenko Labs builds AI products and creates authentic product UGC films where technology runs live on camera.

- **Reach**: ~9.4M followers across platforms, ~120M monthly viewers
- **Apps**: Talori, Soda AI, NutriGen, Solo ZR (Nikon Z camera control)
- **Partnerships**: Creator UGC for brands that ship real products

## Design Features

### Premium Visual Identity
- **Modern Typography**: Inter font family with generous whitespace and refined hierarchy
- **Glass Morphism**: Elevated cards with backdrop blur and subtle borders
- **Layered Hero**: Gradient mesh backgrounds with noise grain texture
- **Scroll-Driven Animations**: CSS `animation-timeline: view()` with progressive enhancement
- **Sticky Navigation**: Backdrop-blurred nav with scroll state
- **Mobile-First**: Fully responsive with optimized touch targets

### Performance Optimizations
- **Fast LCP**: Optimized hero rendering and image loading
- **Modern CSS**: Native scroll-driven animations (no JavaScript animation libraries)
- **Lazy Loading**: Images load as needed with native browser lazy loading
- **Accessibility**: WCAG-compliant contrast, focus states, reduced motion support
- **SEO Ready**: Semantic HTML5, meta tags, structured navigation

### Sections
1. **Hero** — Full-viewport hero with badge, gradient accent text, and dual CTAs
2. **About** — Founder story with family portrait, stats cards, and mission
3. **Apps** — Glass-effect product cards with hover animations and Play Store links
4. **Partnerships** — Dark gradient section highlighting creator capabilities
5. **Connect** — Linktree-style social link cards with icons
6. **Footer** — Multi-column footer with all resources and contact information

## Assets

### Images
- `assets/founder-family.jpg` — Founder family studio portrait (1600×2400px JPEG)
  - Used in About section as premium portrait card with gradient overlay caption
  - Optimized for web with proper width/height attributes for LCP

### Adding More Gallery Images
To add more photos or gallery images in the future:
1. Place images in `/assets/` directory
2. Optimize for web (recommended: max width 1920px, quality 85%, progressive JPEG)
3. Use consistent naming: `founder-{descriptor}.jpg` or `team-{descriptor}.jpg`
4. Reference in HTML with proper `width`, `height`, and `loading="lazy"` attributes

## Running Locally

This is a static site — no build process required.

### Simple Method
Open `index.html` directly in your browser.

### Local Server (Recommended)

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

## Deploying to GitHub Pages

### Initial Setup
1. Push this repository to GitHub
2. Go to repository **Settings → Pages**
3. Set Source to **"Deploy from a branch"**
4. Select `main` branch and `/` (root) folder
5. Click **Save**

Your site will be live at `https://ilushahelp-oss.github.io/repository-name`

### Custom Domain (yakimenkolabs.com)

The `CNAME` file is already configured for `yakimenkolabs.com`.

#### DNS Configuration

Add these DNS records at your domain registrar:

**For Apex Domain (yakimenkolabs.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: ilushahelp-oss.github.io
```

#### GitHub Pages Configuration

1. In repository: **Settings → Pages**
2. Under "Custom domain", enter: `yakimenkolabs.com`
3. Click **Save**
4. Wait for DNS check (may take 24-48 hours)
5. Enable **"Enforce HTTPS"** once DNS validates

## Alternative: Cloudflare Pages

For faster deployments and automatic HTTPS:

1. Log in to [Cloudflare Pages](https://pages.cloudflare.com/)
2. **Connect GitHub repository**
3. Build settings:
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. **Deploy**
5. Add custom domain `yakimenkolabs.com` in **Pages → Custom domains**

Cloudflare handles DNS automatically if your domain uses Cloudflare nameservers.

## Structure

```
.
├── index.html          # Main HTML (semantic, accessible markup)
├── style.css           # Premium CSS (Inter font, glass cards, animations)
├── script.js           # Vanilla JS (smooth scroll, observers, nav effects)
├── assets/
│   └── founder-family.jpg   # Founder family portrait
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## Browser Support

- **Modern Browsers**: Chrome 115+, Firefox 110+, Safari 16+, Edge 115+
- **Scroll-Driven Animations**: Progressive enhancement (graceful fallback to Intersection Observer)
- **CSS Features**: CSS Grid, Flexbox, Custom Properties, Backdrop Filter
- **Accessibility**: WCAG 2.1 Level AA compliant

## Contact

- **Email**: [hello@yakimenkolabs.com](mailto:hello@yakimenkolabs.com) · [ilushahelp@gmail.com](mailto:ilushahelp@gmail.com)
- **Media Kit**: [https://ilushahelp-oss.github.io/ilusha-help-media-kit/](https://ilushahelp-oss.github.io/ilusha-help-media-kit/)
- **Partner Inquiry**: [https://ilushahelp-oss.github.io/ilusha-help-media-kit/discuss.html](https://ilushahelp-oss.github.io/ilusha-help-media-kit/discuss.html)

## License

© 2026 Yakimenko Labs. All rights reserved.

---

**Note**: This site uses modern CSS features including scroll-driven animations with `@supports` feature detection and `prefers-reduced-motion` fallbacks for accessibility. All Google Play Store links point to the verified Yakimenko Labs developer page.
