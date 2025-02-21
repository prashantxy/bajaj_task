import { Router } from 'express';
import { DataController } from '../controllers/dataControllers.js';

const router = Router();
const controller = new DataController();

router.post('/bfhl', controller.processData.bind(controller));
router.get('/bfhl', controller.getOperationCode.bind(controller));

export default router;
