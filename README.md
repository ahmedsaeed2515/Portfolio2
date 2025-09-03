# Ahmed Saeed - Portfolio Website

A modern, responsive, and interactive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features stunning animations, multi-language support, and a fully functional contact system.

![Portfolio Preview](./public/images/preview.jpg)

## ✨ Features

### 🎨 Design & UI/UX

- **Modern glassmorphism design** with neon glow accents
- **Responsive layout** that works perfectly on all devices
- **Dark/Light mode toggle** with system preference detection
- **Smooth scroll animations** and interactive hover effects
- **Professional color scheme** with customizable CSS variables

### 🌍 Multi-Language Support

- **English and Arabic** language support
- **RTL/LTR layout** automatic switching
- **Smooth language transitions** with react-i18next

### ⚡ Performance & SEO

- **Next.js 15** with App Router for optimal performance
- **SEO optimized** with dynamic meta tags and JSON-LD structured data
- **Sitemap generation** with next-sitemap
- **Image optimization** with Next.js Image component
- **Bundle analysis** and optimization tools

### 🎭 Animations & Interactions

- **Framer Motion** for smooth page transitions
- **Scroll-triggered animations** with intersection observer
- **Animated counters** and progress bars
- **Interactive background effects** that respond to user actions
- **Hover animations** on all interactive elements

### 📬 Contact System

- **Functional contact form** with validation using React Hook Form & Yup
- **Email integration** with Resend API
- **Toast notifications** for user feedback
- **Social media links** with animated icons

### 🛠️ Technical Features

- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **ESLint & Prettier** for code quality
- **Component-based architecture** for maintainability
- **Custom hooks** and utilities
- **Error boundaries** and proper error handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ahmed-saeed/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   TO_EMAIL=your-email@example.com
   SITE_URL=https://yourdomain.com
   ```

4. **Add your assets**

   - Replace placeholder images in `/public/images/`
   - Add your resume in `/public/files/`
   - Update personal information in `/src/data/portfolio.ts`

5. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── sections/         # Page sections
│   └── ui/              # UI components
├── data/                 # Static data and configuration
├── lib/                 # Utility functions and configurations
└── types/               # TypeScript type definitions

public/
├── images/              # Images and media files
├── files/              # Downloadable files (resume, etc.)
└── locales/            # Translation files
    ├── en/            # English translations
    └── ar/            # Arabic translations
```

## 🎨 Customization

### Personal Information

Update your details in `/src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more configuration
};
```

### Styling

- Modify colors and themes in `/src/app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Custom animations and effects in the CSS variables section

### Content

- Update translations in `/public/locales/en/common.json` and `/public/locales/ar/common.json`
- Modify sections in `/src/components/sections/`
- Add or remove projects in the portfolio data file

## 📧 Email Configuration

This project uses [Resend](https://resend.com/) for email functionality:

1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Add it to your `.env.local` file
4. Configure your domain (optional but recommended)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

- **Netlify**: Add build command `npm run build`
- **Railway**: Configure environment variables
- **AWS Amplify**: Use the build settings in `amplify.yml`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Vercel** for hosting and deployment

## 📞 Support

If you have questions or need help:

- Open an [issue](https://github.com/ahmed-saeed/portfolio/issues)
- Email: ahmed.saeed@example.com
- LinkedIn: [Ahmed Saeed](https://linkedin.com/in/ahmed-saeed)

---

⭐ **Star this repository if you found it helpful!**
"# Portfolio2" 
