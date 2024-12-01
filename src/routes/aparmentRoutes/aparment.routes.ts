import { Router } from 'express';
import {
  createAparment,
  deleteAparment,
  getAllAparments,
  getAparmentById,
  updateAparment,
} from '../../controllers/aparmentController';

const router = Router();

// Rutas para aparmentos
router.post('/create', createAparment);
router.get('/', getAllAparments);
router.get('/:id', getAparmentById);
router.put('/:id', updateAparment);
router.delete('/:id', deleteAparment);

export default router;
