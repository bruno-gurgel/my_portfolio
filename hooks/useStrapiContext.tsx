'use client'

import { createContext } from 'react'

export default function useStrapiContext() {
  const StrapiContext = createContext({})

  return StrapiContext
}
