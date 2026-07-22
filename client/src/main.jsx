import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ReviewPage from './pages/ReviewPage'
import HistoryPage from './pages/HistoryPage'
import SessionDetailPage from './pages/SessionDetailPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <ReviewPage /> },
			{ path: "history", element: <HistoryPage /> },
			{ path: "history/:id", element: <SessionDetailPage /> },
		],
	},
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<QueryClientProvider client={queryClient} >
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
)
