const mongoose = require("mongoose");

// Definición del esquema del usuario
const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // No permite duplicados
    },
    passwordHash: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true, // createdAt y updatedAt automáticos
  }
);

module.exports = mongoose.model("User", userSchema);