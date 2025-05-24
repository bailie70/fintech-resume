#!/bin/bash

# Exit on error
set -e

echo "🔧 Setting up production server..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "📦 Installing required packages..."
sudo apt install -y \
    docker.io \
    docker-compose \
    nginx \
    certbot \
    python3-certbot-nginx

# Start and enable services
echo "🚀 Starting services..."
sudo systemctl enable docker
sudo systemctl start docker
sudo systemctl enable nginx
sudo systemctl start nginx

# Create deployment directory
echo "📁 Creating deployment directory..."
sudo mkdir -p /var/www/fintech-resume
sudo chown $USER:$USER /var/www/fintech-resume

# Setup Nginx configuration
echo "🔧 Setting up Nginx configuration..."
sudo cp nginx.conf /etc/nginx/sites-available/fintech-resume
sudo ln -sf /etc/nginx/sites-available/fintech-resume /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Setup deployment user and permissions
echo "👤 Setting up deployment user..."
sudo useradd -m -s /bin/bash deploy || echo "User already exists"
sudo usermod -aG docker deploy

# Setup SSH for GitHub Actions
echo "🔑 Setting up SSH directory for deployment..."
sudo mkdir -p /home/deploy/.ssh
sudo touch /home/deploy/.ssh/authorized_keys
sudo chown -R deploy:deploy /home/deploy/.ssh
sudo chmod 700 /home/deploy/.ssh
sudo chmod 600 /home/deploy/.ssh/authorized_keys

echo "✅ Server setup completed!"
echo "⚠️  Don't forget to:"
echo "  1. Add your SSH public key to /home/deploy/.ssh/authorized_keys"
echo "  2. Set up SSL with: sudo certbot --nginx -d your-domain.com"
echo "  3. Configure GitHub repository secrets for deployment" 