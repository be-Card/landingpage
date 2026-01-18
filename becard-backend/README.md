# beCard Backend (MVP)

Servidor mínimo para montar Promos y Locales desde cero.

## Requisitos

- Node.js 20+

## Instalación

```bash
cd becard-backend
npm install
npm run dev
```

Por defecto levanta en `http://localhost:8001`.

## Admin (Dashboard)

- URL: `http://localhost:8001/admin/`
- Auth Basic:
  - user: `admin`
  - pass: `admin123`

## Endpoints

- `GET /health`
- `GET /venues?lat=-34.60&lng=-58.38`
- `GET /venues/:id`
- `GET /promotions`
- `GET /promotions?venue_id=humulus`
- `GET /promotions/:id`
