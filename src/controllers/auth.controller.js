const { registerUser, loginUser } = require("../services/auth.service");
const generateToken = require("../utils/generateToken");

// Registro
const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      ok: true,
      message: "Usuario registrado correctamente",
    });
  }  catch (error) {
    if (error.message === "El usuario ya existe") {
      return res.status(400).json({
        ok: false,
        message: error.message,
      });
    }

    res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser(email, password);

    const token = generateToken(user);

    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    res.status(401).json({
      ok: false,
      message: "Credenciales inválidas",
    });
  }
};

module.exports = { register, login };