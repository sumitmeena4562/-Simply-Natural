# Simply Natural - Setup & Management Guide

## 🚀 Quick Start

### Option 1: Direct Browser
1. Navigate to project folder
2. Double-click `index.html`
3. Website opens in default browser

### Option 2: Live Server (Recommended)
1. Install VS Code extension: "Live Server"
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Auto-refresh on file changes

## 📂 File Management

### Adding New Products

Edit `data.json`:

```json
{
    "id": 13,
    "name": "New Plant Name",
    "type": "Plants",
    "image": "resource/new-plant.jpg",
    "price": "$30.00",
    "category": "Featured Plants",
    "onSale": true,
    "salePrice": "$25.00"
}
```

### Adding New Images

1. Place image in `resource/` folder
2. Reference in HTML: `resource/image-name.jpg`
3. Supported formats: JPG, PNG, SVG, WEBP

### Creating New Pages

1. Copy existing HTML template
2. Update page-specific content
3. Link CSS: `<link rel="stylesheet" href="page-name.css">`
4. Add to navbar in all pages

## 🎨 Styling Guide

### Using CSS Variables

```css
/* In your CSS file */
.my-element {
    color: var(--text-color);
    background: var(--primary-green);
}
```

### Adding Responsive Styles

Add to `responsive.css`:

```css
@media (max-width: 767px) {
    .my-element {
        font-size: 14px;
    }
}
```

## 🛒 Cart System

### How It Works

1. **Add to Cart**: Click bag icon on product
2. **Storage**: Saved in browser localStorage
3. **Persistence**: Cart survives page refresh
4. **View Cart**: Click price or bag icon in navbar

### Cart Functions

```javascript
// Add item
addToCart({id: 1, name: "Plant", price: 30, image: "..."})

// Remove item
removeFromCart(index)

// Update cart display
updateCart()
```

## 🔧 Common Tasks

### Change Logo
Replace `resource/plants-store-logo-green.svg`

### Update Colors
Edit CSS variables in `common.css`:
```css
:root {
    --primary-green: #8DD348;
    --hover-green: #7bc239;
}
```

### Modify Footer
Edit footer section in each HTML file (consistent across all pages)

### Add Social Links
Update icon-wrape sections with actual URLs:
```html
<a href="https://instagram.com/yourpage">
    <i class="fa-brands fa-instagram"></i>
</a>
```

## 📱 Testing Responsive Design

### Browser DevTools
1. Press F12
2. Click device toggle (Ctrl+Shift+M)
3. Select device or custom size

### Test Breakpoints
- 1920px (Desktop)
- 1024px (Tablet landscape)
- 768px (Tablet portrait)
- 576px (Mobile)
- 375px (Small mobile)

## 🐛 Troubleshooting

### Products Not Loading
- Check `data.json` syntax
- Verify `app.js` is linked
- Check browser console (F12)

### Cart Not Working
- Ensure `cart.js` is loaded
- Check localStorage is enabled
- Clear browser cache

### Images Not Showing
- Verify file path: `resource/image.jpg`
- Check file exists
- Check file extension matches

### Styles Not Applying
- Check CSS file is linked
- Verify CSS syntax
- Clear browser cache (Ctrl+F5)

## 📦 Deployment

### GitHub Pages
1. Create GitHub repository
2. Push all files
3. Settings → Pages → Deploy from main branch

### Netlify
1. Drag & drop project folder
2. Site deploys automatically

### Traditional Hosting
1. Upload all files via FTP
2. Maintain folder structure
3. Set `index.html` as default page

## 🔐 Best Practices

1. **Backup**: Keep copies before major changes
2. **Testing**: Test on multiple browsers
3. **Mobile**: Always check mobile view
4. **Images**: Optimize before uploading
5. **Code**: Keep consistent formatting
6. **Comments**: Add comments for complex code

## 📞 Support

For issues or questions:
- Check browser console for errors
- Verify all files are present
- Test in different browser
- Review this guide

## ✅ Checklist Before Launch

- [ ] All images load correctly
- [ ] All links work
- [ ] Cart functionality works
- [ ] Forms validate properly
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Contact info updated
- [ ] Social links added
- [ ] SEO meta tags added
- [ ] Favicon displays
