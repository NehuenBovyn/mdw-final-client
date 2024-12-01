import { Router } from 'express';
import aparmentRoutes from './aparmentRoutes/aparment.routes';
import userRoutes from './userRoutes/user.routes';

const router = Router();

// Rutas de la API
router.use('/users', userRoutes);
router.use('/aparments', aparmentRoutes);

export default router;
