# Daivik Girish - Portfolio Website

A modern, responsive, and professional personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Built with Next.js SEO best practices
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

## 📋 Sections

1. **Hero Section**: Introduction with CTA buttons
2. **About**: Personal information and education timeline
3. **Skills**: Categorized technical skills and expertise
4. **Projects**: Showcase of key projects with GitHub links
5. **Experience**: Work history and certifications
6. **Contact**: Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/daivik-portfolio.git
cd daivik-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio_Daivik/
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── sections/        # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   ├── navbar.tsx       # Navigation component
│   ├── footer.tsx       # Footer component
│   └── theme-provider.tsx
├── lib/                 # Utility functions and constants
│   └── constants.ts     # Centralized configuration
├── public/              # Static assets
│   └── assets/          # Images and documents
│       ├── profile-image.jpg
│       └── resume.pdf
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Assets
- **Profile Image**: Replace `public/assets/profile-image.jpg` with your photo
- **Resume**: Replace `public/assets/resume.pdf` with your resume

### Content
Update the content in each section component:
- Personal information in `components/sections/hero.tsx`
- About section in `components/sections/about.tsx`
- Skills in `components/sections/skills.tsx`
- Projects in `components/sections/projects.tsx`
- Experience in `components/sections/experience.tsx`
- Contact information in `components/sections/contact.tsx`

### Configuration
Update `lib/constants.ts` for centralized configuration:
- Personal information
- Social links
- Contact details
- Asset paths

### SEO
Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- JSON-LD schema

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Bundle Size**: Optimized with Next.js built-in optimizations
- **Images**: Optimized with Next.js Image component

## 📬 Contact Form (EmailJS Integration)

This portfolio uses [EmailJS](https://www.emailjs.com/) to power the contact form. To enable direct email sending from the contact form, you must set up EmailJS and configure the following environment variables in a `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

- **Service ID**: Found in EmailJS dashboard under Email Services
- **Template ID**: Found in EmailJS dashboard under Email Templates
- **Public Key**: Found in EmailJS dashboard under Account > API keys

**Template Variables:**
Your EmailJS template should use these variables:
- `from_name`
- `from_email`
- `message`

**Troubleshooting:**
- Make sure the variable names in your template match the form field names exactly.
- If you see errors, check the browser console for details.
- If the form opens your email client instead of sending directly, your environment variables may be missing or incorrect.
- You can test your template in the EmailJS dashboard using the "Test It" button.

**Security Note:** Never commit your private EmailJS keys to version control.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: daivikgirish98@gmail.com (or use the contact form powered by EmailJS)
- **LinkedIn**: [Daivik Girish](https://linkedin.com/in/daivik-girish-709ab7185/)
- **GitHub**: [DaivikGirish](https://github.com/DaivikGirish)

---

