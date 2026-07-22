import { NavLink, Outlet } from "react-router";

export default function App(){
	return(
		<div className="min-h-screen flex flex-col">
			<nav className="flex items-center justify-between px-6 py-3 border-b border-border/80">
				<div className="flex items-center gap-2">
					<img src='./favicon.svg' className="w-8"/>
					<span className="font-bold text-2xl tracking-tight">
						Co<span className="text-muted-foreground">DEsk</span>
					</span>
				</div>
				<div className="flex items-center gap-3">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							isActive ? "font-semibold " : "text-muted-foreground"
						}
					>
						Review
					</NavLink>
					<span className="text-muted-foreground">|</span>
					<NavLink
						to="/history"
						className={({ isActive }) =>
							isActive ? "font-semibold " : "text-muted-foreground"
						}
					>
						History
					</NavLink>
				</div>
				<div></div>
			</nav>

			<div className="bg-muted/40 text-muted-foreground text-xs text-center py-1.5 border-b border-border/80">
				Your sessions are tied to this browser — clearing site data or localStorage will permanently lose your history.
			</div>

			<main className="flex-1">
				<Outlet />
			</main>

			<footer className="border-t border-border/80 px-6 py-3 text-xs text-muted-foreground flex justify-between">
				<span>CoDEsk — a student project, built with Node.js, React & Gemini AI</span>
				<span>
				Built by Kanhaiya Tyagi —{" "}
				
				<a
					href="https://linkedin.com/in/kanhaiya-tyagi"
					target="_blank"
					rel="noopener noreferrer"
					className="underline"				
				>
					LinkedIn
				</a>
				</span>
			</footer>
		</div>
	)
}