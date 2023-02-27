import Markdown from '@/components/markdown/Markdown'
import { fetchStripe } from '@/lib/fetcher'
import { formatDate } from '@/lib/utils'

export default async function Slug({ params }: { params: { slug: string } }) {
  const articleQuery = await fetchStripe('/articles', {
    filters: {
      slug: params.slug
    },
    populate: ['image', 'category', 'author.picture']
  })
  const article = articleQuery.data.at(0)

  // const categories = await fetchStripe('/categories')

  // const imageUrl = getStrapiMedia(article.attributes.image)

  // const seo = {
  // metaTitle: article.attributes.title,
  // metaDescription: article.attributes.description,
  // shareImage: article.attributes.image,
  // article: true
  // }

  return (
    <>
      <main className="flex flex-col p-12">
        <h1 className="self-center  mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
          {article.attributes.title}
        </h1>
        <p className="self-center mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
          {article.attributes.description}
        </p>
        <div className="flex content-between text-gray-400 self-center gap-4">
          <p> {article.attributes.author.data.attributes.name} </p>-
          <p> {formatDate(article.attributes.createdAt)} </p>
        </div>
        <div className="article-content">
          <Markdown>{article.attributes.content}</Markdown>
        </div>
      </main>
    </>
  )
}
