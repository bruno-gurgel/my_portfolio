'use client'

import ReactMarkdown from 'react-markdown'

export default function Markdown(props: { children: string }) {
  return <ReactMarkdown>{props.children}</ReactMarkdown>
}
