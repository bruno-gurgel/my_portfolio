"use client";

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const AddPostMutation = gql`
  mutation CreatePost(
    $title: String!
    $content: String!
    $slug: String!
    $authorId: ID!
    $description: String!
  ) {
    createPost(
      title: $title
      content: $content
      slug: $slug
      authorId: $authorId
      description: $description
    ) {
      title
      content
      slug
      description
      author {
        id
      }
    }
  }
`;

export default function AddPost() {
  const [formState, setFormState] = useState({
    title: "",
    content: "",
    description: "",
  });
  const [addPost, { data, loading, error }] = useMutation(AddPostMutation);

  const inputs = [
    {
      name: "title",
      label: "Title",
      type: "text",
      placeholder: "Title",
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setFormState({ ...formState, title: e.target.value }),
    },
    {
      name: "content",
      label: "Content",
      type: "textarea",
      placeholder: "Content",
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setFormState({ ...formState, content: e.target.value }),
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Description",
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setFormState({ ...formState, description: e.target.value }),
    },
  ];

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <input
              id={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              onChange={input.onChange}
              value={formState[input.name as keyof typeof formState]}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { title, content, description } = formState;
    const variables = {
      title,
      content,
      slug: title.toLowerCase().replace(/ /g, "-"),
      authorId: "63d1b69d2d43d20298db4a7d",
      description,
    };
    addPost({ variables });
  }
}
