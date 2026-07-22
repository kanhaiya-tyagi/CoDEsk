import { getSessions } from "@/api/sessions";
import { useQuery } from "@tanstack/react-query";

export function useSessions(){
    return useQuery({
        queryKey: ["sessions"],
        queryFn: getSessions
    })
}