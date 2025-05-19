# Build stage
FROM node:22.15.1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22.15.1-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Create a non-root user with UID 1000 to match host
RUN addgroup --system --gid 1000 nodejs && \
    adduser --system --uid 1000 nextjs && \
    mkdir -p /app/public && \
    chown -R nextjs:nodejs /app

# Copy necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"] 