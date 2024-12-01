import { Router } from 'express';
import {
  createAparment,
  deleteAparment,
  getAllAparments,
  getAparmentById,
  getAparmentByUser,
  updateAparment,
} from '../../controllers/aparmentController';

const router = Router();

// Rutas para aparmentos
router.post('/create', createAparment);
router.get('/', getAllAparments);
router.get('/:id', getAparmentById);
router.put('/:id', updateAparment);
router.delete('/:id', deleteAparment);
router.get('/myaparments/:id', getAparmentByUser);

export default router;
