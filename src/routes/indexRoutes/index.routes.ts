import { Router } from 'express';
import userRoutes from '../userRoutes/user.routes';

const router = Router();
router.get('/', userRoutes);

export default router;
