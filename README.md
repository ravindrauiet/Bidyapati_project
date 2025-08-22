# Glomin Overseas Website

A modern, professional website for Glomin Overseas - a premier distribution and logistics company with strategic presence across North India.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with gradient backgrounds and smooth animations
- **Professional Layout**: Clean, organized sections showcasing company services and expertise
- **Interactive Elements**: Smooth scroll animations, hover effects, and engaging user experience
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🏗️ Sections

1. **Hero Section**: Eye-catching introduction with company overview and key statistics
2. **About Section**: Company profile and key highlights
3. **Services Section**: Comprehensive overview of distribution and logistics services
4. **Business Model**: Detailed explanation of the two-pillar approach (Delhi-NCR & Bihar operations)
5. **Contact Section**: Contact form and office information
6. **Footer**: Company details and navigation links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for beautiful, consistent icons
- **Animations**: CSS animations and Intersection Observer API
- **TypeScript**: Full type safety and better development experience

## 📱 Design Features

- **Color Scheme**: Professional blue and gold color palette
- **Typography**: Modern font combinations (Inter + Merriweather)
- **Gradients**: Subtle gradient backgrounds and text effects
- **Cards**: Clean card-based layout for content organization
- **Hover Effects**: Interactive elements with smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd glomin-overseas-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx            # Hero section component
│   ├── About.tsx           # About section component
│   ├── Services.tsx        # Services section component
│   ├── BusinessModel.tsx   # Business model section component
│   ├── Contact.tsx         # Contact section component
│   └── Footer.tsx          # Footer component
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue shades for main elements
- **Secondary**: Gray shades for text and backgrounds
- **Accent**: Gold/yellow shades for highlights

### Typography
- **Sans-serif**: Inter for body text and headings
- **Serif**: Merriweather for special text elements

### Animations
- **Fade-in effects**: Elements appear with smooth opacity transitions
- **Slide-up animations**: Content slides up from below
- **Hover effects**: Interactive elements with scale and shadow changes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Follow the existing component structure and styling patterns

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established color scheme
- Maintain consistent spacing using the `section-padding` class
- Use the `card` class for content containers

## 📄 License

This project is created for Glomin Overseas. All rights reserved.

## 🤝 Support

For any questions or support, please contact:
- **Delhi Office**: glominoverseas@gmail.com
- **Bihar Office**: glominoverseas.bihar@gmail.com

---

**Built with ❤️ for Glomin Overseas**
