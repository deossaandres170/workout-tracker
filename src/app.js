// src/app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { notFoundHandler, globalErrorHandler } = require('./middlewares/error.middleware');

const app = express();

// Middlewares iniciales
app.use(cors());
app.use(express.json());

// Montar todas las rutas principales de la API
app.use('/api', routes);

// Ruta de chequeo de estado (Healthcheck)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Workout Tracker API running smoothly',
    version: '1.0.0'
  });
});

// Middleware 404 - Debe ir inmediatamente después de las rutas
app.use(notFoundHandler);

// Middleware 500 - Debe ir al final de todos los middleware
app.use(globalErrorHandler);

module.exports = app;