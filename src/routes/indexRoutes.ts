import { Router } from 'express';
import userRoutes from './userRoutes/user.routes';

const router = Router();

// Rutas de la API
router.use('/users', userRoutes);

export default router;
