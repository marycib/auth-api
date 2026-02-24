require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");

const app = express();

// Conectar base de datos
connectDB();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: "Ruta no encontrada",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});