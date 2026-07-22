import { GoogleGenAI } from '@google/genai'

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export const reviewCode = async (codeInput, language) => {
    const prompt = `You are an expert code reviewer. Review the following ${language} code.
Respond with ONLY valid JSON, no markdown fences, no extra commentary, in exactly this shape:
{
"summary": "2-3 sentence overview of what the code does and its overall quality",
"issues": "bullet-style list of bugs, security issues, or bad practices found (use \\n between points)",
"suggestions": "bullet-style list of concrete improvements (use \\n between points)"
}
Language: ${language}
Code:
${codeInput}`

    const response = await genAI.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: prompt,
    })
    const rawText = response.text

    let parsed

    try{
        const cleaned = rawText.replace(/```json|```/g, '').trim()
        parsed = JSON.parse(cleaned)
    } catch (err) {
        throw new Error(`AI response was not valid JSON: ${rawText}`)
    }

    return {
        aiSummary: parsed.summary ?? '',
        aiIssues: parsed.issues ?? '',
        aiSuggestions: parsed.suggestions ?? ''
    }
}