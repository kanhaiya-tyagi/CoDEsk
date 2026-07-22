// import Editor from "react-simple-code-editor"
import * as EditorModule from "react-simple-code-editor"
const Editor = EditorModule.default?.default || EditorModule.default || EditorModule
import Prism from "prismjs"
import "prismjs/components/prism-python"
import "prismjs/components/prism-c"
import "prismjs/components/prism-java"
import "prismjs/components/prism-markup"
import "prismjs/themes/prism.css"

export default function CodeEditor({ code, onChange, language, maxLength }) {
    return (
        <Editor
            value={code}
            onValueChange={(newCode) => {
                if (newCode.length <= maxLength) onChange(newCode)
            }}
            highlight={(code) => Prism.highlight(
                code, 
                Prism.languages[language] || Prism.languages.javascript, 
                language
            )}
            padding={12}
            className="border rounded font-mono text-sm min-h-75 bg-background"
            style={{ fontFamily: '"Fira Code", monospace' }}
        />
    )
}