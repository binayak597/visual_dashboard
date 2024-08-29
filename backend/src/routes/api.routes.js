import { Router } from 'express';

import DataController from '../controller/data.controller.js';

const router = Router();

const dataController = new DataController();


router.get('/data', dataController.getData);
router.post('/data', dataController.addData);


export default router;
