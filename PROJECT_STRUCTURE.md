# Simply Natural - Project Structure

## 📁 File Organization

### HTML Pages
- `index.html` - Home page with hero section, featured plants, testimonials
- `store.html` - All products page
- `plants.html` - Plants collection page
- `Cactos.html` - Cactus collection page
- `about_us.html` - About us page with team section
- `contact_us.html` - Contact form and map
- `my_account.html` - Login/Register page
- `cart.html` - Shopping cart page

### CSS Files
- `style.css` - Home page styles
- `common.css` - Shared styles (navbar, footer, cart modal)
- `store.css` - Store page styles
- `plants.css` - Plants page styles
- `cactos.css` - Cactus page styles
- `about_us.css` - About page styles
- `contact_us.css` - Contact page styles
- `my_account.css` - Account page styles
- `cart-modal.css` - Cart modal styles
- `cart-page.css` - Cart page styles
- `responsive.css` - Mobile responsive styles

### JavaScript Files
- `app.js` - Main app logic (fetch products, render cards)
- `cart.js` - Cart functionality (add/remove items, localStorage)
- `cart-page.js` - Cart page specific logic

### Data
- `data.json` - Product data (plants, cactus, home info cards)

### Resources
- `resource/` - Images, logos, backgrounds

## 🎯 Key Features

### 1. Shopping Cart System
- Add to cart functionality
- Cart modal (slides from right)
- LocalStorage persistence
- Real-time price updates
- Cart page with quantity management

### 2. Product Display
- Dynamic product loading from JSON
- Featured plants section
- Category filtering (Plants/Cactus)
- Sale badges and pricing
- Star ratings
- Hover effects with "Add to Cart" button

### 3. Responsive Design
- Mobile-first approach
- Bootstrap 5 grid system
- Custom breakpoints in responsive.css
- Collapsible navigation

### 4. Pages Overview

#### Home (index.html)
- Hero section with CTA
- Info cards (Plants Collection, Free Shipping, Money Back)
- Featured plants grid
- Help section
- Testimonials
- Footer

#### Store (store.html)
- Featured plants (items 4, 5, 6)
- Full plant collection
- Help section
- Footer

#### Plants (plants.html)
- Filtered plants only
- Grid layout

#### Cactus (Cactos.html)
- Filtered cactus only
- Grid layout

#### About Us (about_us.html)
- Hero with overlay
- Company summary
- Team members with social links
- Interested section

#### Contact Us (contact_us.html)
- Contact details (location, phone, email)
- Contact form
- Google Maps embed
- Footer

#### My Account (my_account.html)
- Login form
- Register form
- Password toggle

#### Cart (cart.html)
- Cart table
- Quantity controls
- Coupon input
- Update cart button

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.8
- **Icons**: Font Awesome 6.4.0 & 7.0.1
- **Fonts**: Google Fonts (Poppins)
- **Data**: JSON
- **Storage**: LocalStorage

## 🎨 Design System

### Colors
- Primary Green: `#8DD348`
- Hover Green: `#7bc239`
- Text Color: `#2b2f38c0`
- Dark Text: `#2c3e50`
- Light Gray: `#5d6167`
- Background Light: `#F9F9F9`

### Typography
- Font Family: 'Poppins', sans-serif
- Weights: 300, 400, 500, 600, 700

## 📱 Responsive Breakpoints

- Desktop: > 991px
- Tablet: 768px - 991px
- Mobile: < 768px
- Small Mobile: < 576px

## 🚀 Getting Started

1. Open `index.html` in a browser
2. Navigate through pages using the navbar
3. Add products to cart
4. View cart by clicking price or bag icon

## 📝 Notes

- All pages use consistent navbar and footer
- Cart persists across page reloads
- Active page highlighting in navigation
- All images in `resource/` folder
- Bootstrap grid for responsive layouts
