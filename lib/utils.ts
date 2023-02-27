export function isLinkActive(
  link: string | null | undefined,
  path: string,
  matchSub = false
): boolean {
  if (!link) return false

  if (link === '/' || path === '/') {
    return link === path
  }
  if (matchSub) {
    const basePath = path.split('/').at(1)
    const baseLink = link.split('/').at(1)
    return basePath === baseLink
  }
  return path.includes(link)
}

export function formatDate(date: string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
