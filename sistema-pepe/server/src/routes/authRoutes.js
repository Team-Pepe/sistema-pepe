import { Router } from 'express'
import { register } from '../controllers/authController.js'
import { authenticateToken } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/register', register)
// Ejemplo de ruta protegida
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ user: req.user })
})

export default router