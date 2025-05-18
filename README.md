# Aleksander Piciga's Personal Website

A modern personal website built with Next.js, showcasing projects, interests, and professional experience.

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Docker with Traefik

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/data` - JSON data for projects and interests
- `/public` - Static assets

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Docker Deployment

The project includes Docker configuration for both development and production environments:

```bash
# Development
docker-compose up dev

# Production
docker-compose up prod
```

### Traefik Configuration

The project is configured to work with Traefik as a reverse proxy:
- Development: https://dev.alpi314.com
- Production: https://www.alpi314.com

Includes security headers and automatic SSL certificate management.

## Features

- Responsive design
- Project showcase with type filtering
- Modern UI with Tailwind CSS
- Docker containerization
- Traefik integration for production deployment

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
