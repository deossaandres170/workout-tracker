// src/controllers/reports.controller.js

// GET /api/v1/reports/progress
const getProgressReport = (req, res) => {
  // Datos simulados en memoria basados en tu diseño conceptual (Punto 6.2)
  const reportData = {
    user_id: 5,
    period: "last_30_days",
    total_workouts_completed: 16,
    total_weight_lifted_kg: 14200.0,
    favorite_muscle_group: "pecho",
    completion_rate_percentage: 88.8
  };

  return res.status(200).json({
    status: "success",
    data: reportData
  });
};

module.exports = {
  getProgressReport
};