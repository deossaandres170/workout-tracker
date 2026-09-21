import { Router } from 'express';
import userRoutes from './v1/users.routes.js';
import workoutRoutes from './v1/workouts.routes.js';

const router = Router();

router.use('/v1/users', userRoutes);
router.use('/v1/workouts', workoutRoutes);

export default router;