const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// Registrar usuario
const registerUser = async (data) => {
  const { nombre, email, password } = data;

  // Verificar si el usuario ya existe
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  // Hashear contraseña
  const passwordHash = await bcrypt.hash(password, 10);

  // Crear usuario
  const newUser = await User.create({
    nombre,
    email,
    passwordHash,
  });

  return newUser;
};

// Validar login
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  // Comparar contraseña
  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    throw new Error("Credenciales inválidas");
  }

  return user;
};

module.exports = { registerUser, loginUser };