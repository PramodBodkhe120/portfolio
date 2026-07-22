# Portfolio

A deployment-ready personal portfolio with a React + Tailwind frontend, a FastAPI backend, PostgreSQL support, Docker orchestration, and an admin dashboard shell for contact messages.

## Stack

- Frontend: React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router
- Backend: FastAPI, SQLAlchemy, PostgreSQL
- Runtime: Docker Compose

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

In another terminal:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The frontend defaults to `http://localhost:5173` and the API defaults to `http://localhost:8000`.

## Docker

```bash
docker compose up --build
```

This starts:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`
- PostgreSQL: `localhost:5432`

## Environment

Copy `.env.example` to `.env` before running Docker in production-like mode.

Admin endpoints require the `X-Admin-Token` header. The default development token is `change-me`.

