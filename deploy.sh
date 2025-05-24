#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build the Docker image
echo "📦 Building Docker image..."
docker-compose build

# Stop the existing container (if running)
echo "🛑 Stopping existing containers..."
docker-compose down

# Start the new container
echo "🌟 Starting new containers..."
docker-compose up -d

# Check the health status
echo "🏥 Checking container health..."
sleep 10
docker-compose ps

echo "✅ Deployment completed successfully!" 