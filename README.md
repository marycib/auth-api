# API REST - Sistema de Autenticación

## Descripción
API REST desarrollada en Node.js que permite registro y autenticación de usuarios mediante JWT.

## Tecnologías usadas
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv

## Variables de entorno
PORT=3000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=supersecretkey
JWT_EXPIRES=1h

## Ejecutar proyecto
npm install
npm run dev

## Endpoints

POST /api/auth/register
POST /api/auth/login
GET /api/profile

## Uso del token
Authorization: Bearer <token>