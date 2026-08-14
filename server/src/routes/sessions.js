import { Router } from 'express'
import { handleCreateSession, handleGetSessions, handleGetSessionById } from '../controllers/sessions.js'
import { validateSession } from '../middleware/validateSession.js'
import { createSessionLimiter } from '../middleware/rateLimiter.js'

const router = Router()

router.post('/', createSessionLimiter, validateSession, handleCreateSession)
router.get('/', handleGetSessions)
router.get('/:id', handleGetSessionById)

export default router