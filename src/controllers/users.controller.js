// src/controllers/users.controller.js

// Arreglo en memoria (Simulación de BD)
let users = [
  { id: 1, name: "Juan Andrés Betancur", email: "andres@example.com", role: "user" },
  { id: 2, name: "Carlos Navia", email: "carlos@example.com", role: "admin" }
];

// GET /api/v1/users
export const getUsers = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: users
  });
};

// GET /api/v1/users/:id
export const getUserById = (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: `Usuario con ID ${req.params.id} no encontrado`
    });
  }

  return res.status(200).json({
    status: 'success',
    data: user
  });
};

// POST /api/v1/users
export const createUser = (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      status: 'fail',
      message: 'Los campos name y email son obligatorios'
    });
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    role: role || 'user'
  };

  users.push(newUser);

  return res.status(201).json({
    status: 'success',
    message: 'Usuario creado exitosamente',
    data: newUser
  });
};

// PUT /api/v1/users/:id (Actualización completa)
export const updateUser = (req, res) => {
  const userId = Number(req.params.id);
  const { name, email, role } = req.body;

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: `Usuario con ID ${req.params.id} no encontrado`
    });
  }

  if (!name || !email || !role) {
    return res.status(400).json({
      status: 'fail',
      message: 'Todos los campos (name, email, role) son requeridos para actualización completa'
    });
  }

  // Reemplazo completo en el arreglo
  users[index] = { id: userId, name, email, role };

  return res.status(200).json({
    status: 'success',
    message: `Usuario ${userId} actualizado completamente`,
    data: users[index]
  });
};

// PATCH /api/v1/users/:id (Actualización parcial)
export const patchUser = (req, res) => {
  const userId = Number(req.params.id);
  const updates = req.body;

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: `Usuario con ID ${req.params.id} no encontrado`
    });
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({
      status: 'fail',
      message: 'Debe proporcionar al menos un campo para actualizar'
    });
  }

  // Actualización parcial manteniendo datos previos
  users[index] = { ...users[index], ...updates };

  return res.status(200).json({
    status: 'success',
    message: `Campos del usuario ${userId} actualizados parcialmente`,
    data: users[index]
  });
};

// DELETE /api/v1/users/:id
export const deleteUser = (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({
      status: 'fail',
      message: `Usuario con ID ${req.params.id} no encontrado`
    });
  }

  // Eliminar elemento del arreglo
  users = users.filter((u) => u.id !== userId);

  return res.status(204).send();
};