'use client'

import { useState } from 'react'

export default function useCategories() {
  const [categories, setCategories] = useState([])
  return [categories, setCategories]
}
