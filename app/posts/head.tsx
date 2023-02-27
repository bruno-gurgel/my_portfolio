import React from 'react'

import { fetchStripe } from '@/lib/fetcher'

export default async function Head() {
  const globalSeo = await fetchStripe('/global', {
    populate: {
      favicon: '*',
      defaultSeo: {
        populate: '*'
      }
    }
  })

  return (
    <>
      {globalSeo.data.attributes.defaultSeo.metaTitle && (
        <>
          <title>{globalSeo.data.attributes.metaTitle}</title>
          <meta
            property="og:title"
            content={globalSeo.data.attributes.metaTitle}
          />
          <meta
            name="twitter:title"
            content={globalSeo.data.attributes.metaTitle}
          />
        </>
      )}
      {globalSeo.data.attributes.defaultSeo.metaDescription && (
        <>
          <meta
            name="description"
            content={globalSeo.data.attributes.metaDescription}
          />
          <meta
            property="og:description"
            content={globalSeo.data.attributes.metaDescription}
          />
          <meta
            name="twitter:description"
            content={globalSeo.data.attributes.metaDescription}
          />
        </>
      )}
      {globalSeo.data.attributes.defaultSeo.shareImage && (
        <>
          <meta
            property="og:image"
            content={globalSeo.data.attributes.shareImage}
          />
          <meta
            name="twitter:image"
            content={globalSeo.data.attributes.shareImage}
          />
          <meta name="image" content={globalSeo.data.attributes.shareImage} />
        </>
      )}
      {globalSeo.data.attributes.defaultSeo.article && (
        <meta property="og:type" content="article" />
      )}
    </>
  )
}
