const ALLOWED_LANGUAGES = ['javascript', 'python', 'c', 'cpp', 'java', 'html_css']
const MAX_CODE_LENGTH = 6000
const MAX_SESSION_NAME_LENGTH = 200

export const validateSession = (req, res, next) => {
    const { clientId, sessionName, language, codeInput } = req.body

    if (!clientId || typeof clientId !== 'string') {
        return res.status(400).json({ error: 'clientId is required and must be a string' })
    }

    if (!language || !ALLOWED_LANGUAGES.includes(language)) {
        return res.status(400).json({ error: `language must be one of: ${ALLOWED_LANGUAGES.join(', ')}` })
    }

    if (!codeInput || typeof codeInput !== 'string' || !codeInput.trim()) {
        return res.status(400).json({ error: 'codeInput is required and cannot be empty' })
    }

    if (codeInput.length > MAX_CODE_LENGTH) {
        return res.status(400).json({ error: `codeInput exceeds max length of ${MAX_CODE_LENGTH} characters` })
    }

    if (sessionName && (typeof sessionName !== 'string' || sessionName.length > MAX_SESSION_NAME_LENGTH)) {
        return res.status(400).json({ error: `sessionName must be a string under ${MAX_SESSION_NAME_LENGTH} characters` })
    }

    next()
}