'use client'

import { createContext } from 'react'

export const StrapiContext = createContext({})

export default function BlogLayout(props) {
  const { children } = props

  return (
    <>
      <StrapiContext.Provider value={props.global?.attributes}>
        {children}
      </StrapiContext.Provider>
    </>
  )
}
