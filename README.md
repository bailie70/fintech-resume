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
- 🐳 Docker support for easy deployment

## Tech Stack

- **Framework:** Next.js 15.1.8
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Charts:** Recharts
- **Development:** Turbopack
- **Containerization:** Docker

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

## Deployment Options

### 1. Docker Deployment (Recommended)

The project includes Docker configuration for easy deployment:

```bash
# Build the Docker image
docker build -t fintech-resume .

# Run the container
docker run -p 3000:3000 fintech-resume

# Or using Docker Compose
docker-compose up -d
```

#### Docker Compose Features:
- Automatic restart policy
- Health checks
- Environment configuration
- Port mapping

### 2. Cloud Platform Deployment with Docker

#### AWS ECS (Elastic Container Service)
1. Push to Amazon ECR:
   ```bash
   aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com
   docker tag fintech-resume:latest aws_account_id.dkr.ecr.region.amazonaws.com/fintech-resume:latest
   docker push aws_account_id.dkr.ecr.region.amazonaws.com/fintech-resume:latest
   ```
2. Deploy using ECS or ECS Fargate
3. Set up Application Load Balancer (optional)

#### Google Cloud Run
1. Push to Google Container Registry:
   ```bash
   docker tag fintech-resume:latest gcr.io/project-id/fintech-resume
   docker push gcr.io/project-id/fintech-resume
   ```
2. Deploy to Cloud Run:
   ```bash
   gcloud run deploy fintech-resume --image gcr.io/project-id/fintech-resume
   ```

#### Azure Container Apps
1. Push to Azure Container Registry
2. Deploy using Azure Container Apps with auto-scaling

### 3. Traditional Deployment

#### Vercel (Optimized for Next.js)
```bash
npm install -g vercel
vercel
```

#### Netlify
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Deploy:
   ```bash
   netlify deploy
   ```

### 4. Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

This will create an optimized production build in the `.next` directory.

## Environment Variables

For production deployment, you may need to set these environment variables:
- `NODE_ENV`: Set to 'production'
- `PORT`: Default is 3000
- Add any API keys or secrets needed for your implementation

## Monitoring and Maintenance

- Docker containers include health checks
- Use container orchestration for high availability
- Monitor application logs and metrics
- Set up automated backups if needed

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project as a template for your own portfolio!
