---
name: Culinary Kinetic
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3d4a3e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6c7b6d'
  outline-variant: '#bbcbbb'
  surface-tint: '#006d37'
  primary: '#006d37'
  on-primary: '#ffffff'
  primary-container: '#2ecc71'
  on-primary-container: '#005027'
  inverse-primary: '#4ae183'
  secondary: '#944a00'
  on-secondary: '#ffffff'
  secondary-container: '#fc8f34'
  on-secondary-container: '#663100'
  tertiary: '#4b6076'
  on-tertiary: '#ffffff'
  tertiary-container: '#9fb5ce'
  on-tertiary-container: '#32475c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bfe9c'
  primary-fixed-dim: '#4ae183'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#cfe5ff'
  tertiary-fixed-dim: '#b3c9e2'
  on-tertiary-fixed: '#051d30'
  on-tertiary-fixed-variant: '#34495e'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  button-text:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 16px
  gutter: 12px
---

## Brand & Style
The design system centers on a "Fresh & Fast" narrative, targeting busy urban professionals who value health and efficiency. The personality is energetic, reliable, and appetizing. 

The aesthetic blends **Modern Corporate** precision with **Tactile** warmth. It utilizes generous whitespace to reduce cognitive load during quick shopping sessions, paired with vibrant accent colors that trigger hunger and action. High-quality ingredient photography serves as the primary "texture," while the UI remains a clean, functional frame around the products.

## Colors
This design system utilizes a high-energy palette to drive the quick-commerce experience.
- **Primary (Chef Green):** Used for primary actions, success states, and indicating freshness. It is the dominant color for conversion points.
- **Secondary (Vibrant Orange):** Used for highlights, promotional banners, and appetite-stimulating accents.
- **Tertiary (Charcoal):** Reserved for primary text and high-contrast iconography to ensure legibility.
- **Neutral (Soft Gray/White):** Defines the background and surface layers, providing a clean "kitchen-top" feel.

## Typography
The typography strategy prioritizes immediate scanning and professional clarity. **Montserrat** is used for headlines to provide a confident, geometric, and modern feel. **Inter** is used for all body text and UI labels due to its exceptional legibility at small sizes on mobile displays. 

For quick-commerce, price points should always use `headline-md` or larger in Montserrat to ensure they are the first thing a user sees after the product image.

## Layout & Spacing
The design system employs a **Fluid Grid** for mobile, centered on a 4-column structure. 
- **Margins:** A standard 16px side margin ensures content does not feel cramped against the bezel.
- **Rhythm:** An 8pt spatial system governs all padding and margins to maintain a tight, mathematical harmony.
- **Vertical Flow:** Content is organized in "shelves" or horizontal carousels to maximize vertical density while allowing for easy discovery.

## Elevation & Depth
Depth is created through **Ambient Shadows** and **Tonal Layering**. 
- **Level 0 (Background):** #F8F9FA.
- **Level 1 (Cards/Cards):** Pure white (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.05)).
- **Level 2 (Interactive/Floating):** Used for FABs (Floating Action Buttons) and active carts, utilizing a more pronounced shadow with a slight green tint (0px 8px 24px rgba(46, 204, 113, 0.15)).
Avoid heavy borders; use subtle 1px strokes in light gray (#E9ECEF) only when two white surfaces meet.

## Shapes
A **Rounded** shape language is used to evoke a friendly, approachable, and organic feel, echoing the shapes found in nature and fresh produce. 
- **Standard UI elements:** (Buttons, Input fields) use 0.5rem (8px).
- **Cards and Containers:** Use `rounded-lg` (16px) to create a soft, modern frame for food imagery.
- **Search Bars:** Use `rounded-xl` (24px) or full pill-shape to distinguish them as high-priority utility elements.

## Components
- **Primary Button:** High-saturation #2ECC71 background, white text, 16px height-padding. Use subtle scale-down animations on press to feel "squishy" and responsive.
- **Product Cards:** Vertical orientation. Image takes up the top 60%. Price is anchored bottom-left in Montserrat. A "+" (Add to Cart) button is anchored bottom-right in #E67E22.
- **Chips:** Used for dietary tags (e.g., "Vegan," "Gluten-Free"). Light primary tint background with dark green text. No shadows.
- **Input Fields:** Soft gray background (#F1F3F5), 8px border-radius, no border until focused. On focus, use a 2px #2ECC71 stroke.
- **Inventory Badges:** Small, high-contrast labels placed on the corner of product images to denote "Low Stock" or "New Arrival."
- **Quantity Selector:** A pill-shaped component with "-" and "+" icons. Use #F8F9FA as the background to distinguish it from the main action buttons.