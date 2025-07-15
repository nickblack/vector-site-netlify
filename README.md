# VECTOR Landing Page

A high-converting landing page for VECTOR, the deep tech GTM framework by Nick Black. Built with vanilla HTML, CSS, and JavaScript for easy deployment on platforms like Netlify.

## 🚀 Quick Deploy to Netlify

1. **Push to GitHub**: Upload these files to a GitHub repository
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy settings: Build command (leave empty), Publish directory: `/` (root)
3. **Custom Domain**: Add your custom domain in Netlify settings

## 📁 File Structure

```
vector-site/
├── index.html          # Main landing page
├── styles.css          # VECTOR brand styling
├── script.js           # Interactive functionality
├── assets/             # Brand assets
│   ├── NB_OnlySymbol_AW.png
│   ├── NB_OnlySymbol_White_AW.png
│   └── Favicon.png
├── images/             # Customer photos
│   ├── Nick Black -122.jpg
│   ├── Nick Black -125.jpg
│   └── Nick Black -130.jpg
└── README.md           # This file
```

## 🎨 Brand Color Palette

| Name                | Hex      | Usage                                      |
|---------------------|----------|---------------------------------------------|
| **Vector Purple**   | #BA37F3  | Dominant brand color, hero/section backgrounds, gradients, accents |
| **Primary Dark**    | #272726  | Header, footer, navigation backgrounds      |
| **Green**           | #148F7C  | Primary action button (e.g., Download Playbook) |
| **Turquoise**       | #1CA6B2  | Secondary action button (e.g., Book Consultation) |
| **Light Gray**      | #F0F0F0  | Section backgrounds, cards                  |
| **White**           | #FFFFFF  | Backgrounds, whitespace                     |

- **Primary CTA:** Green (#148F7C) button with white text
- **Secondary CTA:** Turquoise (#1CA6B2) button or outline with turquoise text
- **Header/Footer:** Use Primary Dark (#272726) for backgrounds
- **Hero/Sections:** Use Vector Purple (#BA37F3) as dominant color, especially in gradients

## 🔧 Features

### Lead Capture
- Modal popup for email collection
- Form validation and success states
- Analytics tracking hooks (ready for GA4)

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Fast loading with lazy image loading

### Performance
- Vanilla JavaScript (no frameworks)
- Optimized images and assets
- Smooth scroll animations
- Intersection Observer for performance

## 📊 Analytics Integration

The site includes tracking hooks for:
- CTA button clicks
- Form submissions
- Scroll depth (ready for implementation)

To add Google Analytics 4:
1. Add your GA4 tracking code to `index.html`
2. Uncomment the gtag implementation in `script.js`

## 🎯 Conversion Optimization

- **Primary CTA**: "Download Playbook" (lead magnet)
- **Secondary CTA**: "Book Consultation" (direct contact)
- **Social Proof**: Customer testimonials and success stories
- **Clear Value Prop**: Deep tech GTM framework positioning

## 🔄 Content Updates

### Easy Updates
- **Text**: Edit `index.html` directly
- **Styling**: Modify `styles.css`
- **Functionality**: Update `script.js`

### Brand Assets
- Replace images in `images/` folder
- Update logos in `assets/` folder
- Maintain aspect ratios for best results

## 📈 Performance Metrics

Monitor these key metrics:
- **Conversion Rate**: Playbook downloads
- **Engagement**: Time on page, scroll depth
- **Traffic Sources**: Organic, direct, referrals
- **Mobile Performance**: Core Web Vitals

## 🛠️ Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Use a local server for testing forms:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

## 📞 Support

For technical issues or brand updates, contact the development team.

---

**VECTOR by Nick Black** - Deep Tech GTM Framework 