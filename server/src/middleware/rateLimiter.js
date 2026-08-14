import rateLimit from 'express-rate-limit'

export const createSessionLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {error: 'Too many requests, please try in a while.'}
})