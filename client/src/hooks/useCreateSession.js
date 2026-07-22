import { createSession } from "@/api/sessions";
import { useMutation } from "@tanstack/react-query";

export function useCreateSession() {
    return useMutation({
        mutationFn: createSession
    })
}