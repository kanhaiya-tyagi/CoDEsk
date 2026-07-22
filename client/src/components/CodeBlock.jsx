import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript"
import python from "react-syntax-highlighter/dist/esm/languages/prism/python"
import c from "react-syntax-highlighter/dist/esm/languages/prism/c"
import java from "react-syntax-highlighter/dist/esm/languages/prism/java"
import markup from "react-syntax-highlighter/dist/esm/languages/prism/markup"

SyntaxHighlighter.registerLanguage("javascript", javascript)
SyntaxHighlighter.registerLanguage("python", python)
SyntaxHighlighter.registerLanguage("c", c)
SyntaxHighlighter.registerLanguage("java", java)
SyntaxHighlighter.registerLanguage("html_css", markup)

export default function CodeBlock({ code, language }) {
    return (
        <SyntaxHighlighter
            language={language}
            style={oneLight}
            customStyle={{ borderRadius: "0.5rem", fontSize: "0.875rem" }}
            wrapLongLines
        >
            {code}
        </SyntaxHighlighter>
    )
}