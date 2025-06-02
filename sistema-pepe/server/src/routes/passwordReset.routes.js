import { Router } from 'express'
import { PasswordResetController } from '../controllers/passwordReset.controller.js'

const router = Router()
const controller = new PasswordResetController()

router.post('/request-reset', controller.requestReset)
router.post('/reset', controller.resetPassword)

export default router