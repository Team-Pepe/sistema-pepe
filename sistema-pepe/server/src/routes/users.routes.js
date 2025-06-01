import { Router } from 'express'
import { UsersController } from '../controllers/users.controller.js'

const router = Router()
const usersController = new UsersController()

router.get('/', usersController.getAll)
router.post('/', usersController.create)
router.put('/:documentId', usersController.update)
router.delete('/:documentId', usersController.delete)
router.get('/document-types', usersController.getDocumentTypes)

export default router