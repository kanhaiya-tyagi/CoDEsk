import { createSession, getSessionById, getSessionsByClient } from "../services/sessions.js"

export const handleCreateSession = async (req, res) => {
    try {
        const {clientId, sessionName, language, codeInput} = req.body


        const session = await createSession({
            clientId,
            sessionName,
            language,
            codeInput
        })

        res.status(201).json(session)
    } catch(error){
        console.error('Error creating session: ', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

export const handleGetSessions = async (req, res) => {
    try {
        const clientId = req.query['clientId']

        if (!clientId) {
            return res.status(400).json({ error: 'clientId is required' })
        }

        const sessions = await getSessionsByClient(clientId)
        res.status(200).json(sessions)
    } catch(error){
        console.error('Error fetching sessions: ', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}

export const handleGetSessionById = async (req, res) => {
    try {
        const { id } = req.params

        const session = await getSessionById(id)

        if (!session) {
            return res.status(404).json({ error: 'Session not found' })
        }

        res.status(200).json(session)
    } catch(error){
        console.error('Error fetching session by ID: ', error);
        res.status(500).json({error: 'Internal Server Error'})
    }
}