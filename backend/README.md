# StockBox Backend API

Backend REST API for StockBox - Inventory Management System

## Overview

This is the backend service for StockBox, built with Node.js, Express, TypeScript, and SQL Server. It provides a RESTful API for managing inventory movements, stock levels, and product tracking.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: Microsoft SQL Server
- **Validation**: Zod
- **Testing**: Jest

## Project Structure

```
backend/
├── src/
│   ├── api/              # API controllers
│   ├── routes/           # Route definitions
│   ├── middleware/       # Express middleware
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── config/           # Configuration
│   ├── migrations/       # Database migration system
│   └── server.ts         # Application entry point
├── migrations/           # SQL migration files
├── tests/                # Global test utilities
└── dist/                 # Compiled output
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- SQL Server instance available
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Update `.env` with your database credentials:
```env
DB_SERVER=your-server
DB_NAME=stockbox
DB_USER=your-user
DB_PASSWORD=your-password
```

### Development

Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000/api/v1`

### Building for Production

```bash
npm run build
npm start
```

## Database Migrations

The application automatically runs database migrations on startup. Migrations are located in the `migrations/` directory.

To run migrations manually:
```bash
ts-node src/migrations/run-migrations.ts
```

To skip migrations on startup:
```bash
SKIP_MIGRATIONS=true npm start
```

## API Documentation

### Health Check

```
GET /health
```

Returns server health status.

### API Versioning

All API endpoints are versioned:
- Current version: `/api/v1`
- External (public) routes: `/api/v1/external`
- Internal (authenticated) routes: `/api/v1/internal`

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Code Quality

Lint code:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| DB_SERVER | Database server | localhost |
| DB_PORT | Database port | 1433 |
| DB_NAME | Database name | stockbox |
| DB_USER | Database user | sa |
| DB_PASSWORD | Database password | - |
| DB_ENCRYPT | Enable encryption | false |
| CORS_ORIGINS | Allowed CORS origins | localhost:3000,localhost:5173 |
| SKIP_MIGRATIONS | Skip migrations on startup | false |

## License

ISC