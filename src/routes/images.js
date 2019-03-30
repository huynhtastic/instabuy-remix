import express from 'express';
import { getAll } from '../controllers/images';

const router = express.Router();

console.log('Images router configured');
router.get('/all', getAll);

export default router;
