const jwt = require("jsonwebtoken");

// Función para generar token JWT firmado
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      rol: user.rol,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES,
    }
  );
};

module.exports = generateToken;