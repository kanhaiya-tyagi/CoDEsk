import CodeBlock from "@/components/CodeBlock"
import OutputBlock from "@/components/OutputBlock"
import { useSessionDetails } from "@/hooks/useSessionDetails"
import { useParams } from "react-router"

const SessionDetailPage = () => {
    const { id } = useParams()
    const { data: session, isLoading, isError } = useSessionDetails(id)

    if (isLoading) return <p className="p-6">Loading session...</p>
    if (isError) return <p className="p-6">Could not load this session.</p>

    return (
        <div className="p-6 flex flex-col gap-6">
            <div>
                <h1 className="text-xl font-semibold">{session.sessionName}</h1>
                <p className="text-muted-foreground">{session.language}</p>
            </div>

            <div className="flex gap-6">
                
                <div className="w-1/2">
                    <h2 className="font-semibold mb-2">Code</h2>
                    <CodeBlock code={session.codeInput} language={session.language} />
                </div>

                <OutputBlock data={session} />
            </div>
        </div>
    )
}

export default SessionDetailPage