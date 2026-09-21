// src/app.js
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { notFoundHandler, globalErrorHandler } from './middlewares/error.middleware.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares iniciales
app.use(cors());
app.use(express.json());

// Montar todas las rutas principales de la API (/api/v1/...)
app.use('/api', routes);

// Ruta de chequeo de estado (Healthcheck)
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Workout Tracker API running smoothly',
    version: '1.0.0'
  });
});

// Middlewares para manejo de errores
app.use(notFoundHandler);
app.use(globalErrorHandler);

// Levantar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default app;