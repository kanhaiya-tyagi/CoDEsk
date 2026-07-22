import { useSessions } from '@/hooks/useSessions'
import { useNavigate } from 'react-router'

const HistoryPage = () => {
	const { data: sessions, isLoading, isError } = useSessions()
	const navigate = useNavigate()

	if (isLoading) return <p className="p-6">Loading sessions...</p>
	if (isError) return <p className="p-6">Failed to load session history.</p>

	return (
		<div className="p-6 flex flex-col gap-2">
			<h1 className="text-xl font-semibold mb-4">Session History</h1>

			{sessions.length === 0 && (
				<p className="text-muted-foreground">No sessions yet.</p>
			)}

			{sessions.map((session) => (
				<div
					key={session.sessionId}
					onClick={() => navigate(`/history/${session.sessionId}`)}
					className="flex justify-between p-3 border rounded cursor-pointer hover:bg-muted"
				>
					<span>{session.sessionName}</span>
					<span className="text-muted-foreground">{session.language}</span>
					<span className="text-muted-foreground">
						{new Date(session.createdAt).toLocaleDateString()}
					</span>
				</div>
			))}
		</div>
	)
}

export default HistoryPage