/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  '\n  mutation CreatePost(\n    $title: String!\n    $content: String!\n    $slug: String!\n    $authorId: ID!\n    $description: String!\n  ) {\n    createPost(\n      title: $title\n      content: $content\n      slug: $slug\n      authorId: $authorId\n      description: $description\n    ) {\n      title\n      content\n      slug\n      description\n      author {\n        id\n      }\n    }\n  }\n':
    types.CreatePostDocument,
  '\n  query Post {\n    posts {\n      id\n      slug\n      createdAt\n      updatedAt\n      title\n      content\n      description\n      author {\n        name\n      }\n      comments {\n        id\n      }\n    }\n  }\n':
    types.PostDocument,
  '\n  query Project {\n    projects {\n      id\n      link\n      description\n      name\n      createdAt\n      updatedAt\n      cover      \n    }\n  }\n':
    types.ProjectDocument
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation CreatePost(\n    $title: String!\n    $content: String!\n    $slug: String!\n    $authorId: ID!\n    $description: String!\n  ) {\n    createPost(\n      title: $title\n      content: $content\n      slug: $slug\n      authorId: $authorId\n      description: $description\n    ) {\n      title\n      content\n      slug\n      description\n      author {\n        id\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation CreatePost(\n    $title: String!\n    $content: String!\n    $slug: String!\n    $authorId: ID!\n    $description: String!\n  ) {\n    createPost(\n      title: $title\n      content: $content\n      slug: $slug\n      authorId: $authorId\n      description: $description\n    ) {\n      title\n      content\n      slug\n      description\n      author {\n        id\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query Post {\n    posts {\n      id\n      slug\n      createdAt\n      updatedAt\n      title\n      content\n      description\n      author {\n        name\n      }\n      comments {\n        id\n      }\n    }\n  }\n'
): (typeof documents)['\n  query Post {\n    posts {\n      id\n      slug\n      createdAt\n      updatedAt\n      title\n      content\n      description\n      author {\n        name\n      }\n      comments {\n        id\n      }\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query Project {\n    projects {\n      id\n      link\n      description\n      name\n      createdAt\n      updatedAt\n      cover      \n    }\n  }\n'
): (typeof documents)['\n  query Project {\n    projects {\n      id\n      link\n      description\n      name\n      createdAt\n      updatedAt\n      cover      \n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
