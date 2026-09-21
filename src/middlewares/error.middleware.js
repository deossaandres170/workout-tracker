// src/middlewares/error.middleware.js

// Middleware para manejar rutas 404 (No Encontradas)
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    error: `No se encontró la ruta ${req.originalUrl} en este servidor.`
  });
};

// Middleware global para manejo de errores 500 (Errores del servidor)
export const globalErrorHandler = (err, req, res, next) => {
  console.error('🔥 Error Detectado:', err.stack);

  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};