'use client'

import ReactMarkdown from 'react-markdown'

export default function Markdown(props) {
  return <ReactMarkdown>{props.children}</ReactMarkdown>
}
