# WR Sourcing Website

A modern, responsive website for WR Sourcing - a textile sourcing and production solutions company.

## 🎯 Overview

WR Sourcing is a professional website showcasing textile sourcing services, product categories, and company information. The site features an elegant dark theme with orange accents and smooth animations.

## ✨ Features

### 🎨 Design
- **Modern Dark Theme** - Sophisticated gray and orange color scheme
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Hover effects, transitions, and interactive elements
- **Professional Layout** - Clean, organized sections with clear navigation

### 🚀 Key Components

#### 1. **Navigation Bar**
- Fixed header with WR Sourcing logo
- Desktop menu with smooth scroll links
- Mobile-responsive hamburger menu
- "Get Started" call-to-action button

#### 2. **Hero Slider**
- Auto-rotating image carousel (5-second intervals)
- 3 slides showcasing different aspects of the business
- Manual navigation with arrow buttons
- Slide indicators with click-to-jump functionality
- Smooth fade transitions between slides

#### 3. **Services Section**
- 8 comprehensive service offerings:
  - Merchandising and Marketing
  - Quality Control
  - Factory Sourcing
  - Product Development
  - Textile and Accessories
  - Pricing and Costing
  - Logistics and Shipping
  - Communication and Coordination
- Interactive service cards with hover effects
- "Learn More" links for each service

#### 4. **Vision Section**
- Company vision statement
- Brand positioning

#### 5. **About Section**
- Company introduction and history
- Professional imagery
- "Learn More" call-to-action

#### 6. **Call-to-Action Banner**
- Full-width banner with background image
- Direct invitation to contact

#### 7. **Advantages Section**
- Key company differentiators:
  - Export Team
  - Dedicated Live Support
  - Customer Satisfaction
  - Reasonable Pricing
- Supporting imagery

#### 8. **Product Gallery**
- 6 product categories:
  - Gents Collection
  - Ladies Collection
  - Boys Collection
  - Girls Collection
  - Children Collection
  - Home Textiles Collection
- Image hover zoom effects
- Gradient overlays on product cards

#### 9. **Contact Section**
- **Contact Information:**
  - Phone numbers
  - Email addresses
  - Physical address
  - Business hours
- **Contact Form:**
  - Name, Email, Phone fields
  - Subject and Message fields
  - Form validation
  - Success alert on submission

#### 10. **Footer**
- Copyright information
- Developer credit (Minoar)

## 🛠️ Technical Stack

- **React** - Component-based UI framework
- **Lucide React** - Modern icon library
- **Tailwind CSS** - Utility-first CSS framework
- **Unsplash Images** - High-quality stock photography

## 📱 Responsive Design

- **Desktop (1024px+)**: Full navigation, side-by-side layouts
- **Tablet (768px-1023px)**: Adjusted grid layouts
- **Mobile (<768px)**: Stacked layouts, hamburger menu

## 🎨 Color Scheme

- **Primary Brand**: Orange (#f97316)
- **Background**: Dark Gray (#111827, #1f2937)
- **Text**: White, Light Gray
- **Accents**: Orange hover states

## 📂 Component Structure

```
WR Sourcing Website
├── Navigation
├── HeroSlider
├── ServicesSection
│   └── ServiceCard (x8)
├── VisionSection
├── AboutSection
├── CTASection
├── AdvantagesSection
├── GallerySection
│   └── ProductCard (x6)
├── ContactSection
│   ├── ContactInfo
│   └── ContactForm
└── Footer
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wr-sourcing.git
cd wr-sourcing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "lucide-react": "latest"
  }
}
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

### Deploy Options
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build` folder to S3 bucket

## 🎯 Features in Detail

### Auto-Rotating Slider
- Automatically changes slides every 5 seconds
- Smooth fade transitions
- Pause on hover (optional enhancement)
- Manual navigation available

### Contact Form
- Client-side form validation
- Alert on successful submission
- Form reset after submission
- Accessible form fields with labels

### Mobile Navigation
- Hamburger menu icon
- Smooth slide-down animation
- Full-width mobile menu
- Touch-friendly tap targets

## 🔄 Future Enhancements

- [ ] Add form backend integration
- [ ] Implement email service (EmailJS, SendGrid)
- [ ] Add loading animations
- [ ] Include testimonials section
- [ ] Add blog/news section
- [ ] Implement multi-language support
- [ ] Add live chat integration
- [ ] Include portfolio/case studies
- [ ] Add image lazy loading
- [ ] Implement SEO optimization

## 🐛 Known Issues

None at this time.

## 📧 Contact

For questions or support, please contact:
- **Email**: info@wrsourcing.com
- **Phone**: +88 01715 254277

## 👨‍💻 Developer

**Developed by Minoar**

## 📄 License

This project is proprietary and confidential.

Copyright © 2024 WR Sourcing. All rights reserved.

---

**Note**: Replace placeholder contact information, repository URLs, and company details with actual information before deployment.