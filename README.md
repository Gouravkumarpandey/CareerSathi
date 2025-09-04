# 🎓 Career Guidance Platform

A comprehensive web platform that helps students make informed career decisions through personalized assessments, AI-powered recommendations, and comprehensive educational resources.

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Database Setup](#-database-setup)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔐 Authentication & Profiles
- Secure student registration and login
- Comprehensive profile management
- Progress tracking and achievements

### 📊 Smart Assessments
- Career interest assessments
- Aptitude tests (logical, numerical, verbal)
- Personality evaluations
- AI-powered result analysis

### 🎯 Course Explorer
- Extensive course database
- Smart filtering and search
- Personalized course recommendations
- Detailed course information with prerequisites

### 🏫 College Directory
- Comprehensive college database
- Advanced search and filtering
- College comparison tools
- Application deadline tracking

### ⏰ Timeline Tracker
- Academic milestone tracking
- Custom goal setting
- Progress monitoring
- Automated reminders

### 🤖 AI-Powered Recommendations
- Gemini AI integration
- Personalized career guidance
- Dynamic learning path suggestions
- Industry trend analysis

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **React Router** for navigation

### Backend
- **Node.js** with Express
- **MySQL** database
- **JWT** authentication
- **Gemini AI** integration

### DevOps & Tools
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Git** for version control

## 📁 Project Structure

```
Career-Guidance-Platform/
│
├── 📁 client/                 → Frontend (React + TypeScript)
│   ├── 📁 pages/               → Application screens
│   │   ├── Home.tsx            → Landing page
│   │   ├── Auth.tsx            → Login & Registration
│   │   ├── Dashboard.tsx       → Student dashboard
│   │   ├── AptitudeTest.tsx    → Assessment interface
│   │   ├── CourseExplorer.tsx  → Course browsing
│   │   ├── CollegeDirectory.tsx → College search
│   │   ├── TimelineTracker.tsx → Goal tracking
│   │   └── Profile.tsx         → Profile management
│   │
│   ├── 📁 components/          → Reusable UI components
│   │   └── Navigation.tsx      → Navigation bar
│   │
│   ├── 📁 services/            → API communication layer
│   ├── 📁 types/               → TypeScript type definitions
│   └── Configuration files     → Vite, Tailwind, etc.
│
├── 📁 server/                 → Backend (Node.js + Express)
│   ├── 📁 routes/              → API route definitions
│   ├── 📁 controllers/         → Request handling logic
│   ├── 📁 models/              → Database models
│   ├── 📁 middleware/          → Authentication, validation
│   ├── 📁 utils/               → Helper functions
│   ├── db.js                   → Database connection
│   ├── gemini.js               → AI integration
│   └── index.js                → Server entry point
│
├── 📁 database/               → SQL database files
│   ├── schema.sql              → Database structure
│   ├── seed.sql                → Sample data
│   └── 📁 migrations/          → Database updates
│
├── 📁 docs/                   → Documentation
│   ├── requirements.md         → Project requirements
│   ├── api-spec.md             → API documentation
│   └── architecture.png        → System architecture
│
├── .env.example                → Environment variables template
├── README.md                   → This file
└── package.json                → Project dependencies
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- Gemini AI API key

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/career-guidance-platform.git
cd career-guidance-platform
```

### 2. Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Database Setup
```bash
# Create database and run schema
mysql -u root -p < database/schema.sql

# Insert sample data (optional)
mysql -u root -p < database/seed.sql
```

### 4. Install Dependencies
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 5. Start Development Servers
```bash
# Start backend server (runs on http://localhost:5000)
npm run dev:server

# In another terminal, start frontend (runs on http://localhost:3000)
npm run dev:client
```

### 6. Access Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- API Health Check: http://localhost:5000/api/health

## 📚 API Documentation

Detailed API documentation is available at [`docs/api-spec.md`](./docs/api-spec.md).

### Key Endpoints:
- `POST /api/auth/register` - Student registration
- `POST /api/auth/login` - Student login  
- `GET /api/colleges` - Browse colleges
- `GET /api/courses` - Explore courses
- `POST /api/assessments/:id/submit` - Submit assessment
- `GET /api/timeline` - Get student timeline

## 🗄 Database Setup

1. **Install MySQL** (v8.0 or higher)
2. **Create Database:**
   ```sql
   CREATE DATABASE career_guidance;
   ```
3. **Run Schema:**
   ```bash
   mysql -u root -p career_guidance < database/schema.sql
   ```
4. **Add Sample Data (Optional):**
   ```bash
   mysql -u root -p career_guidance < database/seed.sql
   ```

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=career_guidance

# JWT Secret
JWT_SECRET=your_jwt_secret

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Server
PORT=5000
```

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run frontend tests
cd client && npm test
```

## 🚢 Deployment

### Production Build
```bash
# Build frontend
cd client && npm run build

# Start production server
npm start
```



## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code style with ESLint
- Write comprehensive tests
- Update documentation for API changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check existing documentation in `/docs`
- Review API specification for integration help


