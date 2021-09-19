import express from 'express';

import {
  getProducts,
  getProductById,
} from '../controller/productControllers.js';
const router = express.Router();

router.get('/', getProducts);
router.get('/:title', getProductById);

export default router;
