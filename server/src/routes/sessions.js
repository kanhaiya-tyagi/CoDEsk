import { Router } from 'express'
import { handleCreateSession, handleGetSessions, handleGetSessionById } from '../controllers/sessions.js'

const router = Router()

router.post('/', handleCreateSession)
router.get('/', handleGetSessions)
router.get('/:id', handleGetSessionById)

export default router