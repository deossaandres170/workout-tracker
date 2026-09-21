// src/controllers/users.controller.js

// GET /api/v1/users
const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Juan Andrés Betancur", email: "andres@example.com", role: "user" },
    { id: 2, name: "Carlos Navia", email: "carlos@example.com", role: "admin" }
  ];

  return res.status(200).json({
    status: 'success',
    data: users
  });
};

// GET /api/v1/users/:id
const getUserById = (req, res) => {
  const { id } = req.params;

  if (id !== "1") {
    return res.status(404).json({
      status: 'fail',
      message: `Usuario con ID ${id} no encontrado`
    });
  }

  return res.status(200).json({
    status: 'success',
    data: { id: 1, name: "Juan Andrés Betancur", email: "andres@example.com", role: "user" }
  });
};

// PUT /api/v1/users/:id (Actualización completa)
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({
      status: 'fail',
      message: 'Todos los campos (name, email, role) son requeridos para actualización completa'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: `Usuario ${id} actualizado completamente`,
    data: { id: Number(id), name, email, role }
  });
};

// PATCH /api/v1/users/:id (Actualización parcial)
const patchUser = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'Debe proporcionar al menos un campo para actualizar'
    });
  }

  return res.status(200).json({
    status: 'success',
    message: `Campos del usuario ${id} actualizados parcialmente`,
    data: { id: Number(id), ...updates }
  });
};

// DELETE /api/v1/users/:id
const deleteUser = (req, res) => {
  const { id } = req.params;

  // Estado HTTP 204 No Content
  return res.status(204).send();
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  patchUser,
  deleteUser
};