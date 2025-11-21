# CSS File Structure - Simply Natural

## File Organization

### 1. **common.css** (Shared Styles)
- CSS Variables (colors, fonts)
- Reset styles
- Navigation (navbar)
- Footer
- Common utilities

### 2. **Page-Specific CSS Files**

#### style.css (Home Page)
- Hero section
- Featured plants section
- Testimonials
- Home-specific layouts

#### store.css (Store Page)
- Product grid
- Featured plants container
- Help section
- Store-specific layouts

#### about_us.css (About Us Page)
- Hero section with overlay
- Team section
- Company info section
- About-specific layouts

#### contact_us.css (Contact Us Page)
- Contact form
- Map integration
- Contact details section

#### plants.css (Plants Collection)
- Plant collection grid
- Product cards
- Filter layouts

#### cactos.css (Cactus Collection)
- Cactus collection grid
- Product cards
- Category-specific styles

#### my_account.css (Account Page)
- Login/Register forms
- Form validation styles
- Account-specific layouts

## CSS Loading Order

All HTML files should load CSS in this order:
1. Bootstrap CSS
2. Font Awesome
3. Google Fonts (Poppins)
4. **common.css** (shared styles)
5. Page-specific CSS

## CSS Variables (in common.css)

```css
--text-color: #2b2f38c0;
--primary-green: #8DD348;
--hover-green: #7bc239;
--dark-text: #2c3e50;
--light-gray: #5d6167;
--bg-light: #F9F9F9;
```

## Benefits

✓ No code duplication
✓ Easier maintenance
✓ Consistent styling across pages
✓ Smaller file sizes
✓ Better performance
