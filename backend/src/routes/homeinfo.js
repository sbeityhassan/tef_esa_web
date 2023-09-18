import express from 'express';
import {
  getHomeinfoData,
  updateHomeinfoData,
  deleteHomeinfoData,
} from '../controllers/homeinfo.js';

const router = express.Router();


router.get('/homeinfo', getHomeinfoData);


router.put('/homeinfo/:id', updateHomeinfoData);

router.delete('/homeinfo/:id', deleteHomeinfoData);

export default router;
