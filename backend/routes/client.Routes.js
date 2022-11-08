import express from 'express'
import { home, register, createContainer, clientDelete} from '../controllers/ClientController.js'

const router = express.Router()

router.get('/', home)
router.get('/register', createContainer)

router.post('/register', register)
router.post('/client/delete/:id', clientDelete)

export default router