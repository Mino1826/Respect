# Respect — Candle E-Commerce Store

A full-stack Persian/English bilingual e-commerce web app for handmade candles. Built with React, Node.js, MongoDB, and Cloudinary.

## Project Structure

```
respect/
├── frontend/   # Customer-facing store (React + Vite)
├── admin/      # Admin dashboard (React + Vite)
└── backend/    # REST API (Node.js + Express)
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend & Admin | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Image Storage | Cloudinary |
| Authentication | JWT |
| i18n | i18next (Persian & English) |
| Deployment | Vercel (frontend/admin), Render (backend) |

## Features

- Bilingual UI (Persian / English) with RTL support
- Product listing with category and sub-category filters (قلمی / سنگی)
- Best Seller section on homepage
- Shopping cart
- Admin dashboard to add, list, and remove products
- Image upload via Cloudinary
- JWT-based admin authentication

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the repo

```bash
git clone https://github.com/Mino1826/Respect.git
cd Respect
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

Start the backend:

```bash
npm run server
```

Runs on `http://localhost:4000`

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

Runs on `http://localhost:5173`

### 4. Admin setup

```bash
cd admin
npm install
```

Create a `.env` file in `admin/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin:

```bash
npm run dev
```

Runs on `http://localhost:5174`

