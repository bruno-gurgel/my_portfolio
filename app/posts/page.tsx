import Image from 'next/image'
import Link from 'next/link'

import { fetchStripe } from '@/lib/fetcher'
import { capitalize } from '@/lib/utils'
import { CategoryQuery, PostsQuery } from '@/ts/strapiTypes'

export default async function Posts() {
  const query = await fetchStripe<PostsQuery>(`/articles?_locale=pt-BR`)
  const categoriesquery = await fetchStripe<CategoryQuery>('/categories')

  const posts = query.data
  const categories = categoriesquery.data

  return (
    <main className="p-5 flex flex-row content-center md:pl-60 md:pr-60 gap-32">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Categories</h2>
        <div className="w-48 text-sm font-medium  border  rounded-lg bg-gray-700 border-gray-600 text-white">
          <Link
            href="/posts"
            className="block w-full px-4 py-2 text-white  border-b  rounded-t-lg cursor-pointer bg-gray-800 border-gray-600"
          >
            All
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/posts/categories/${category.attributes.slug}`}
              className="block w-full px-4 py-2 border-b cursor-pointer   focus:outline-none focus:ring-2  border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              {capitalize(category.attributes.name)}
            </Link>
          ))}
        </div>
      </div>
      <ol
        className="relative border-l border-gray-700 bg-grayddfd-700"
        id="posts"
      >
        {posts.map((post) => (
          <li className="mb-10 ml-4" key={post.id}>
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500">
              {post.attributes.updatedAt}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {post.attributes.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-400">
              {post.attributes.description}
            </p>
            <Link href={`/posts/${post.attributes.slug}`} className="mb-4">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  See post
                </span>
              </button>{' '}
            </Link>
          </li>
        ))}
      </ol>
      <div className="opacity-10 -z-50">
        <Image alt="" src="/images/book.jpg" fill priority />
      </div>
    </main>
  )
}
