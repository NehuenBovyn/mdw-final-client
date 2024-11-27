import { Router } from 'express';
import userRoutes from './userRoutes/user.routes';
import indexRoutes from './indexRoutes/index.routes';

const router = Router();

// Rutas de la API
router.use('/users', userRoutes);
router.use('/', indexRoutes);

export default router;

