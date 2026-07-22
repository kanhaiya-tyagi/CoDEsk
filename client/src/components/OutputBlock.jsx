import { Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card.jsx"

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
                    <p className="text-md text-gray-700">{data.aiIssues}</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base">Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-md text-gray-700">{data.aiSuggestions}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default OutputBlock