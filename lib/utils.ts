export function isLinkActive(
  link: string | null | undefined,
  path: string,
  matchSub = false
): boolean {
  if (!link) return false;

  if (link === "/" || path === "/") {
    return link === path;
  }
  if (matchSub) {
    const basePath = path.split("/").at(1);
    const baseLink = link.split("/").at(1);
    return basePath === baseLink;
  }
  return path.includes(link);
}
