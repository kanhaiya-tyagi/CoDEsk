import { Input } from "@/components/ui/input.jsx"
import { Button } from "@/components/ui/button"
import { useState } from "react"
// import { Textarea } from "@/components/ui/textarea.jsx"
import { useCreateSession } from "@/hooks/useCreateSession"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card.jsx"
import CodeEditor from "@/components/CodeEditor"
import OutputBlock from "@/components/OutputBlock"

const ReviewPage = () => {
	const [sessionName, setSessionName] = useState("")
	const [language, setLanguage] = useState("javascript")
	const [codeInput, setCodeInput] = useState("")

	const { mutate, data, isPending, isError, error } = useCreateSession()

	const isFormValid = sessionName.trim() && codeInput.trim()
	const MAX_CODE_LENGTH = 5000

	function handleReview() {
		mutate({sessionName, language, codeInput})
	}

    return (
        <div className="flex gap-6 p-6 justify-center">
			
			{/* Left Panel */}
			<div className="flex flex-col gap-4 w-1/2">

				{/* div to put lang and session name in one line*/}
				<div className="flex gap-3">
					<Select value={language} onValueChange={setLanguage}>
						<SelectTrigger>
							<SelectValue placeholder="Select language" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="javascript">JavaScript</SelectItem>
							<SelectItem value="python">Python</SelectItem>
							<SelectItem value="c">C</SelectItem>
							<SelectItem value="java">Java</SelectItem>
							<SelectItem value="html_css">HTML/CSS</SelectItem>
						</SelectContent>
					</Select>

					<Input 
						placeholder="e.g. Bubble Sort Review"
						value={sessionName}
						onChange={(e) => setSessionName(e.target.value)}
					/>
				</div>

				<CodeEditor
					code={codeInput}
					onChange={setCodeInput}
					language={language}
					maxLength={MAX_CODE_LENGTH}
				/>
				<p className="text-xs text-muted-foreground text-right">
					{codeInput.length} / {MAX_CODE_LENGTH}
				</p>

				<Button onClick={handleReview} disabled={isPending || !isFormValid}>
					{isPending ? "Reviewing..." : "Review"}
				</Button>

				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

				{isPending && (
					<p className="text-muted-foreground">Analyzing your code...</p>
				)}

				{isError && (
					<p className="text-red-400">
					Looks like CoDEsk is out of credits for now. It's a student project
					running on a tight budget 🙂 Check back later or reach out to me on
					LinkedIn.
					</p>
				)}
			</div>

			{/* Right Output Panel */}

			{data && (
				<OutputBlock data={data} />
			)}
		</div>
	)
}

export default ReviewPage