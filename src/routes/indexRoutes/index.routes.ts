import { Router } from 'express';
import { connectionDB } from '../../controllers/indexControllers';

const router = Router();
router.get('/', connectionDB);

export default router;