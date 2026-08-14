import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card.jsx"

const PointList = ({ text }) => (
    <ul className="list-disc pl-5 space-y-1">
        {text.split('\n')
            .map(line => line.trim().replace(/^[-*]\s*/, ''))
            .filter(line => line)
            .map((line, i) => (
                <li key={i} className="text-md text-gray-700">{line}</li>
        ))}
    </ul>
)

const OutputBlock = ({data}) => {
    return (
        <div className="w-1/2 flex flex-col gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-md text-gray-700">{data.aiSummary}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Issues</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p className="text-md text-gray-700">{data.aiIssues}</p> */}
                    <PointList text={data.aiIssues} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <p className="text-md text-gray-700">{data.aiSuggestions}</p> */}
                    <PointList text={data.aiSuggestions} />
                </CardContent>
            </Card>
        </div>
    )
}

export default OutputBlock