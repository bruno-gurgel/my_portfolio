"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const AllPostsQuery = gql(`
  query Post {
    posts {
      id
      slug
      createdAt
      updatedAt
      title
      content
      description
      author {
        name
      }
      comments {
        id
      }
    }
  }
`);

const Skeleton = ({ qnt = 1 }: { qnt: number }) => (
  <>
    {Array(qnt)
      .fill(0)
      .map((_, i) => (
        <div role="status" className="max-w-sm animate-pulse mb-5" key={i}>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-3"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2.5"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
  </>
);

export default function Posts() {
  const { data, loading, error } = useQuery(AllPostsQuery);

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <main className="p-5 flex content-center md:pl-60">
      <ol className="relative border-l border-gray-700 bg-grayddfd-700">
        {loading || !data ? (
          <Skeleton qnt={3} />
        ) : (
          data.posts.map((post) => (
            <li className="mb-10 ml-4" key={post.id}>
              <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border border-gray-900 bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                {post.updatedAt}
              </time>
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="mb-4 text-base font-normal text-gray-400">
                {post.description}
              </p>
              <Link href={`/posts/${post.slug}`} className="mb-4">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    See post
                  </span>
                </button>{" "}
              </Link>
            </li>
          ))
        )}
      </ol>
      <div className="opacity-10 -z-50">
        <Image alt="" src="/images/book.jpg" fill priority />
      </div>
    </main>
  );
}
