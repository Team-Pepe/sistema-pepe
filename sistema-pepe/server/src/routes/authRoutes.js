import { Router } from 'express';
import { register } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.get('/test', (req, res) => {
  res.json({ message: 'API funcionando correctamente' })
})

export default router;