# Ribison Chemicals Company Website

A modern, professional React-based website for Ribison Chemicals Company featuring comprehensive responsive design, dark mode support, and integrated contact management system.

## 🏢 About

Ribison Chemicals Company is a leading chemical manufacturing company specializing in:
- Construction Chemicals
- Textile Chemicals
- Paint & Coatings
- Ceramic Chemicals
- Paper Mill Chemicals
- Agriculture Chemicals

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Wouter** for routing
- **Radix UI** components with shadcn/ui
- **React Hook Form** with Zod validation
- **TanStack Query** for state management

### Backend
- **Node.js** with Express.js
- **TypeScript** (ESM modules)
- **Drizzle ORM** with PostgreSQL
- **Neon Database** (serverless)
- **Session management** with PostgreSQL store

### Key Features
- 🌙 Dark/Light theme support
- 📱 Fully responsive design
- ♿ Accessibility compliant (WCAG 2.1)
- 🎨 Professional chemical industry design
- 📧 Contact form with email integration
- 🗺️ Google Maps integration
- 🔍 SEO optimized

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (Neon recommended)
- GoDaddy hosting account with Node.js support

## 🛠️ Local Development Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd ribison-chemicals
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
SESSION_SECRET=your_session_secret_key
PORT=5000
```

4. **Database Setup**
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5000` to view the application.

## 🏗️ Building for Production

```bash
npm run build
```

This creates:
- Frontend build in `dist/public`
- Backend build in `dist`

## 🌐 GoDaddy Deployment Guide

### Option 1: Shared Hosting (Static Files Only)

**Note:** This option only works for static sites. Since this is a full-stack application with Node.js backend, you'll need VPS or dedicated hosting.

### Option 2: VPS/Dedicated Server Deployment

#### Step 1: Prepare GoDaddy VPS

1. **Purchase GoDaddy VPS/Dedicated Server**
   - Log into your GoDaddy account
   - Purchase a VPS or Dedicated Server with:
     - Ubuntu 20.04+ or CentOS 7+
     - Minimum 2GB RAM
     - Node.js support

2. **Server Initial Setup**
```bash
# Connect via SSH
ssh root@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2

# Install Nginx for reverse proxy
sudo apt install nginx -y
```

#### Step 2: Upload Project Files

1. **Transfer files using SFTP or Git**
```bash
# Option A: Using Git (recommended)
git clone <your-repo-url> /var/www/ribison-chemicals
cd /var/www/ribison-chemicals

# Option B: Upload via SFTP
# Use FileZilla or similar to upload files to /var/www/ribison-chemicals
```

2. **Set correct permissions**
```bash
sudo chown -R www-data:www-data /var/www/ribison-chemicals
sudo chmod -R 755 /var/www/ribison-chemicals
```

#### Step 3: Environment Configuration

1. **Create production environment file**
```bash
cd /var/www/ribison-chemicals
sudo nano .env
```

Add the following:
```env
DATABASE_URL=your_production_postgresql_url
NODE_ENV=production
SESSION_SECRET=your_secure_session_secret
PORT=3000
```

2. **Install dependencies and build**
```bash
npm install --production
npm run build
```

#### Step 4: Database Setup

1. **Set up PostgreSQL (if not using Neon)**
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Create database and user
sudo -u postgres psql
CREATE DATABASE ribison_chemicals;
CREATE USER ribison_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE ribison_chemicals TO ribison_user;
\q
```

2. **Run database migrations**
```bash
npm run db:push
```

#### Step 5: Configure Nginx

1. **Create Nginx configuration**
```bash
sudo nano /etc/nginx/sites-available/ribison-chemicals
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Serve static files
    location /assets {
        alias /var/www/ribison-chemicals/dist/public/assets;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Proxy API requests to Node.js
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve React app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

2. **Enable the site**
```bash
sudo ln -s /etc/nginx/sites-available/ribison-chemicals /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 6: Configure PM2

1. **Create PM2 ecosystem file**
```bash
cd /var/www/ribison-chemicals
nano ecosystem.config.js
```

Add the following:
```javascript
module.exports = {
  apps: [{
    name: 'ribison-chemicals',
    script: 'dist/index.js',
    cwd: '/var/www/ribison-chemicals',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
```

2. **Start the application**
```bash
# Create logs directory
mkdir logs

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup
pm2 startup
# Follow the instructions provided by the command above
```

#### Step 7: SSL Certificate (Optional but Recommended)

1. **Install Certbot**
```bash
sudo apt install certbot python3-certbot-nginx -y
```

2. **Obtain SSL certificate**
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Option 3: Static Export for Shared Hosting

If you only need the frontend (static version):

1. **Modify the build process** to generate static files
2. **Upload to GoDaddy File Manager**
   - Build the project: `npm run build`
   - Upload contents of `dist/public` to your domain's public_html folder
   - Note: Contact form and dynamic features won't work

## 📁 Project Structure

```
ribison-chemicals/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
├── server/                # Backend Express application
│   ├── index.ts          # Main server file
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database operations
├── shared/               # Shared types and schemas
└── dist/                 # Production build output
```

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `drizzle.config.ts` - Database configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run check` - Type checking

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify DATABASE_URL is correct
   - Check if database is accessible
   - Run `npm run db:push` to ensure schema is up to date

2. **Build Fails**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npm run check`

3. **PM2 Process Crashes**
   - Check logs: `pm2 logs ribison-chemicals`
   - Restart: `pm2 restart ribison-chemicals`

4. **Nginx 502 Error**
   - Check if Node.js app is running: `pm2 status`
   - Verify port configuration in Nginx and PM2

### GoDaddy Specific Issues

1. **File Upload Limits**
   - Use SFTP instead of File Manager for large uploads
   - Compress files before uploading

2. **Node.js Version**
   - Ensure your GoDaddy plan supports Node.js 18+
   - Check hosting plan specifications

## 📞 Support

For technical support or questions about deployment:

**Ribison Chemicals Company**
- 📍 Address: 75, Star Plaza Complex, 27NH, Wankaner, Morbi, Gujarat 363621, India
- 📞 Phone: +91 7777942233, +91 9574008982
- 📧 Email: info@ribison.com

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

**Built with ❤️ for Ribison Chemicals Company**