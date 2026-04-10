import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import { getMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

import upload from '../middleware/uploadMiddleware.js';

const router =  express.Router();

router.get('/:id',protectRoute,getMessage);

router.post('/send/:id', protectRoute, upload.single("media"), sendMessage);

export default router;