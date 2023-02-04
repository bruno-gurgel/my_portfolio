"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
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
      author {
        name
      }
      comments {
        id
      }
    }
  }
`);

export default function Posts() {
  const { data, loading, error } = useQuery(AllPostsQuery);

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
