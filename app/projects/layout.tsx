'use client'

import { ReactNode } from 'react'

import ApolloProvider from '@/lib/apollo-client/apollo-provider'

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <ApolloProvider>{children}</ApolloProvider>
}
