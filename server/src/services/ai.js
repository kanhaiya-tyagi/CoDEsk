import { GoogleGenAI } from '@google/genai'

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export const reviewCode = async (codeInput, language) => {
    const prompt = `You are an expert code reviewer. Review the following ${language} code.
Respond with ONLY valid JSON, no markdown fences, no extra commentary, in exactly this shape:
{
"summary": "2-3 sentence overview of what the code does and its overall quality",
"issues": "list of bugs, security issues, or bad practices found, one per line separated by \\n. Do not prefix lines with -, *, or any bullet symbol — plain text only",
"suggestions": "list of concrete improvements, one per line separated by \\n. Do not prefix lines with -, *, or any bullet symbol — plain text only"
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

    const toSafeString = (val, maxLen = 3000) => {
        if (typeof val !== 'string') return ''
        return val.slice(0, maxLen)
    }

    try{
        const cleaned = rawText.replace(/```json|```/g, '').trim()
        parsed = JSON.parse(cleaned)
    } catch (err) {
        throw new Error(`AI response was not valid JSON: ${rawText}`)
    }

    return {
        aiSummary: toSafeString(parsed.summary),
        aiIssues: toSafeString(parsed.issues),
        aiSuggestions: toSafeString(parsed.suggestions)
    }
}