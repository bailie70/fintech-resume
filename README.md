# Fintech Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Designed specifically for fintech professionals to showcase their experience, skills, and projects.

## Features

- 🎨 Modern UI with smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎯 Interactive sections for Experience, Skills, Portfolio, and Contact
- 📊 Animated skill bars and project statistics
- 🔗 Social media integration
- 📝 Contact form with validation
- ⚡ Built with Next.js 15 and Turbopack for fast development
- 🎭 Dark/Light mode support
- 🎨 Gradient text and modern design elements

## Tech Stack

- **Framework:** Next.js 15.1.8
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Charts:** Recharts
- **Development:** Turbopack

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fintech-resume.git
   cd fintech-resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fintech-resume/
├── app/
│   ├── components/     # React components
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/            # Static assets
└── ...config files
```

## Customization

1. Update personal information in `app/page.tsx`
2. Modify experience details in `app/components/ExperienceTimeline.tsx`
3. Update skills in `app/components/SkillsSection.tsx`
4. Edit projects in `app/components/PortfolioSection.tsx`
5. Customize contact information in `app/components/ContactSection.tsx`

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## Deployment

The site can be deployed to various platforms:

- Vercel (Recommended)
- Netlify
- AWS Amplify
- Custom server

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project as a template for your own portfolio!
