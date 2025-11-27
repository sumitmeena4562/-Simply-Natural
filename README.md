# Simply Natural 🌿

A modern, responsive e-commerce website for plants and succulents built with HTML, CSS, JavaScript, and Bootstrap 5.

![Simply Natural](resource/hero-bg.jpg)

## 🌟 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Shopping Cart** - Add/remove items with localStorage persistence
- **Dynamic Products** - Products loaded from JSON data
- **Category Filtering** - Browse by Plants or Cactus
- **Modern UI** - Clean design with smooth animations
- **Contact Form** - Get in touch with integrated map

## 🚀 Live Demo

[View Live Site](https://yourusername.github.io/simply-natural)

## 📸 Screenshots

### Home Page
![Home](resource/hero-bg.jpg)

### Store
Browse our collection of plants and cacti

### About Us
Learn about our team and mission

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.8
- Font Awesome 6.4.0
- Google Fonts (Poppins)

## 📁 Project Structure

```
Simply Natural/
├── index.html              # Home page
├── store.html              # All products
├── plants.html             # Plants collection
├── Cactos.html             # Cactus collection
├── about_us.html           # About page
├── contact_us.html         # Contact page
├── my_account.html         # Login/Register
├── cart.html               # Shopping cart
├── style.css               # Home styles
├── common.css              # Shared styles
├── app.js                  # Main JavaScript
├── cart.js                 # Cart functionality
├── data.json               # Product data
├── components/             # Reusable components
│   ├── navbar.js
│   ├── footer.js
│   └── cart-modal.js
└── resource/               # Images and assets
```

## 🎯 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/simply-natural.git
cd simply-natural
```

2. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use Live Server in VS Code
```

3. **That's it!** No build process required.

## 💻 Usage

### Adding Products

Edit `data.json`:

```json
{
    "id": 13,
    "name": "New Plant",
    "type": "Plants",
    "image": "resource/new-plant.jpg",
    "price": "$30.00",
    "category": "Featured Plants",
    "onSale": true,
    "salePrice": "$25.00"
}
```

### Customizing Colors

Edit CSS variables in `common.css`:

```css
:root {
    --primary-green: #8DD348;
    --hover-green: #7bc239;
    --text-color: #2b2f38c0;
}
```

## 📱 Responsive Breakpoints

- Desktop: > 991px
- Tablet: 768px - 991px
- Mobile: < 768px
- Small Mobile: < 576px

## 🎨 Color Palette

- Primary Green: `#8DD348`
- Hover Green: `#7bc239`
- Text Color: `#2b2f38c0`
- Dark Text: `#2c3e50`
- Light Gray: `#5d6167`
- Background: `#F9F9F9`

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch
4. Save and wait for deployment

### Netlify

1. Drag and drop project folder
2. Site deploys automatically

## 📝 Documentation

- [Project Structure](PROJECT_STRUCTURE.md)
- [Setup Guide](SETUP_GUIDE.md)
- [Duplicate Code Cleanup](DUPLICATE_CODE_CLEANUP.md)
- [Implementation Guide](IMPLEMENTATION_GUIDE.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Website: [yourwebsite.com](https://yourwebsite.com)

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for icons
- Google Fonts for Poppins font
- Unsplash for images

## 📞 Support

For support, email support@simplynatural.com or open an issue.

---

Made with ❤️ by Simply Natural Team
