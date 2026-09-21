// src/routes/v1/users.routes.js
const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateUser,
  patchUser,
  deleteUser
} = require('../../controllers/users.controller');

// GET
router.get('/', getUsers);
router.get('/:id', getUserById);

// PUT y PATCH
router.put('/:id', updateUser);
router.patch('/:id', patchUser);

// DELETE
router.delete('/:id', deleteUser);

module.exports = router;