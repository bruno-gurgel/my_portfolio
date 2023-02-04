"use client";

import { gql } from "@/__generated__/gql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

const allProjectsQuery = gql(`
  query Project {
    projects {
      id
      link
      description
      name
      createdAt
      updatedAt
      cover      
    }
  }
`);

export default function Projects() {
  const { data, loading, error } = useQuery(allProjectsQuery);

  if (loading || !data) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="p-10 flex flex-wrap gap-5">
      {data.projects.map((project) => (
        <div
          key={project.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Image
            src={project.cover}
            alt={project.name}
            width={0}
            height={350}
            sizes="100vw"
            style={{ width: "100%" }}
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <a
                href={project.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                target="_blank"
                rel="noreferrer"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {project.createdAt}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
