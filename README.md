# API REST - Sistema de Autenticación

## Descripción

API REST desarrollada en Node.js que implementa un sistema de autenticación mediante JWT (JSON Web Token).  
Permite el registro de usuarios, autenticación mediante login y protección de rutas privadas utilizando middleware de validación de token.

Las contraseñas son encriptadas utilizando bcrypt y se aplican buenas prácticas de seguridad como uso de variables de entorno y manejo controlado de errores.

---

## Tecnologías usadas

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- bcrypt  
- jsonwebtoken (JWT)  
- dotenv  

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/authdb
JWT_SECRET=tu_clave_secreta
JWT_EXPIRES=1h
```

---

## Instalación y ejecución

1. Clonar el repositorio  
2. Instalar dependencias:

```
npm install
```

3. Ejecutar en modo desarrollo:

```
npm run dev
```

El servidor iniciará en:

```
http://localhost:3000
```

---

## Endpoints

### Registro de usuario

**POST** `/api/auth/register`

Body:

```json
{
  "name": "Maria",
  "email": "maria@email.com",
  "password": "123456"
}
```

---

### Login

**POST** `/api/auth/login`

Body:

```json
{
  "email": "maria@email.com",
  "password": "123456"
}
```

Respuesta exitosa:

```json
{
  "ok": true,
  "token": "JWT_GENERADO"
}
```

---

### Ruta protegida

**GET** `/api/profile`

Requiere header:

```
Authorization: Bearer <token>
```

Ejemplo:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Manejo de errores

La API maneja los siguientes códigos de estado:

- 400 → Error de validación  
- 401 → No autenticado  
- 403 → Token inválido  
- 404 → Ruta no encontrada  
- 500 → Error interno del servidor  

---

## Seguridad aplicada

- Contraseñas hasheadas con bcrypt  
- Generación de token JWT firmado  
- Uso de variables de entorno  
- Protección de rutas mediante middleware  
- No se almacenan contraseñas en texto plano  
- `.env` excluido mediante `.gitignore`

---

## Autor

Proyecto desarrollado como evidencia GA7-220501096-AA5-EV01  
Diseño y Desarrollo de Servicios Web