// src/controllers/auth.controller.js

// POST /api/v1/auth/register
const register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nombre, email y contraseña son requeridos' });
  }

  // Estructura simulada de registro
  const newUser = {
    id: Date.now(),
    name,
    email,
    role: 'user',
    created_at: new Date().toISOString()
  };

  return res.status(201).json({
    status: 'success',
    message: 'Usuario registrado exitosamente',
    data: newUser
  });
};

// POST /api/v1/auth/login
const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' });
  }

  // Token simulado (JWT)
  const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTc4OTMyNDgwMH0";

  return res.status(200).json({
    status: 'success',
    message: 'Autenticación exitosa',
    token: fakeToken,
    user: {
      id: 5,
      email,
      name: "Juan Andrés Betancur"
    }
  });
};

module.exports = {
  register,
  login
};