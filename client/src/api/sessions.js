import axiosInstance from "./axiosInstance";
import { getClientId } from "@/lib/clientId";

export async function createSession({sessionName, language, codeInput}) {
    const clientId = getClientId()
    const response = await axiosInstance.post("/sessions", {
        clientId,
        sessionName,
        language,
        codeInput
    })

    return response.data
}

export async function getSessions() {
    const clientId = getClientId()
    const response = await axiosInstance.get('/sessions', {
        params: {clientId},
    })

    return response.data
}

export async function getSessionById(id) {
    const response = await axiosInstance.get(`/sessions/${id}`)
    return response.data
}