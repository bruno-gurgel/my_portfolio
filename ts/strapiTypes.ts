export type Locales = 'en' | 'es' | 'pt-BR'

type StrapiImage = {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: string
      caption: string
      width: number
      height: number
      formats: {
        small: {
          hash: string
          ext: string
          mime: string
          width: number
          height: number
          size: number
          path: string
          url: string
        }
        medium: {
          hash: string
          ext: string
          mime: string
          width: number
          height: number
          size: number
          path: string
          url: string
        }
        large: {
          hash: string
          ext: string
          mime: string
          width: number
          height: number
          size: number
          path: string
          url: string
        }

        thumbnail: {
          name: string
          hash: string
          ext: string
          mime: string
          width: number
          height: number
          size: number
          path: string
          url: string
        }
      }
    }
  }
}

type StrapiAuthor = {
  data: {
    id: number
    attributes: {
      name: string
      email: string
      created_at: string
      updated_at: string
      picture: StrapiImage
    }
  }
}

export type CategoryQuery = {
  data: {
    id: number
    attributes: {
      name: string
      slug: string
      createdAt: string
      updatedAt: string
      locale: Locales
    }
  }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type PostsByCategoryQuery = {
  data: {
    id: number
    attributes: {
      title: string
      description: string
      content: string
      slug: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: Locales
    }
  }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type PostsQuery = {
  data: {
    id: number
    attributes: {
      title: string
      description: string
      content: string
      slug: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: Locales
    }
  }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type SinglePostQuery = {
  data: {
    id: number
    attributes: {
      title: string
      description: string
      content: string
      slug: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      locale: Locales
      image: StrapiImage
      author: StrapiAuthor
    }
  }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
