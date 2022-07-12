import express from 'express';
const router = express.Router();
import homeController from '../controller/homeController.js';
import aboutController from '../controller/aboutController.js';
import skillsController from '../controller/skillsController.js';
import contactController from '../controller/contactController.js';

router.get('/',homeController);
router.get('/about',aboutController);
router.get('/skills',skillsController);
router.get('/contact',contactController);


export default router;