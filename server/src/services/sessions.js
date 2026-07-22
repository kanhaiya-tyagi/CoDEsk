import prisma from "./prisma.js"
import { reviewCode } from "./ai.js"

// Create a new session
export const createSession = async (data)=>{
    const { aiSummary, aiIssues, aiSuggestions } = await reviewCode(
        data.codeInput, 
        data.language
    )

    const session = await prisma.session.create({
        data: {
            clientId: data.clientId,
            sessionName: data.sessionName || 'Untitled Session',
            language: data.language,
            codeInput: data.codeInput,
            aiSummary,
            aiIssues,
            aiSuggestions,
        }
    })

    return session
}

// Get all sessions for a clientId
export const getSessionsByClient = async (clientId) => {
    const sessions = await prisma.session.findMany({
        where: { clientId },
        select: {
        sessionId: true,
        sessionName: true,
        language: true,
        createdAt: true,
        },
        orderBy: { createdAt: 'desc' }
    })
    return sessions
}

// Get one session by ID
export const getSessionById = async (sessionId) => {
    const session = await prisma.session.findUnique({
        where: { sessionId }
    })
    return session
}