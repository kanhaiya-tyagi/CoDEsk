import { getSessionById } from "@/api/sessions";
import { useQuery } from "@tanstack/react-query";

export function useSessionDetails(id) {
    return useQuery({
        queryKey:["session", id],
        queryFn: ()=>getSessionById(id),
        enabled: !!id,
    })
}