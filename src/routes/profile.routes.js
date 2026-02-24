const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const User = require("../models/user.model");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-passwordHash");

  res.json({
    ok: true,
    user,
  });
});

module.exports = router;