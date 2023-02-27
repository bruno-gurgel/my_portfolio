'use client'

import { useState } from 'react'

export default function usePosts() {
  const [posts, setPosts] = useState([])

  return [posts, setPosts]
}
