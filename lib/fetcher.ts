import qs from 'qs'

export async function fetcher(
  url: string,
  urlParamsObject: object = {},
  options: object = {},
  body?: any
) {
  const mergedOptions = {
    method: body ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined,
    ...options
  }

  const urlWithParams = `${url}?${qs.stringify(urlParamsObject)}`

  const res = await fetch(urlWithParams, mergedOptions)

  return res.json()
}

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }/api${path}`
}

export function getStrapiMedia(media: {
  data?: { attributes?: { url: string } }
}) {
  if (!media.data?.attributes) return null
  const { url } = media.data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url
  return imageUrl
}

export async function fetchStripe(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  const data = await fetcher(getStrapiURL(path), urlParamsObject, options)
  return data
}
