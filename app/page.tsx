import { Roboto_Mono } from "@next/font/google";
import Link from "next/link";

const robotoHeading = Roboto_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div className="flex flex-col mt-48 ml-48 h-full items-start">
        <h1
          className={`${robotoHeading.className} mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}
        >
          Hey, I'm Bruno
        </h1>
        <h3 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">
          I'm a software engineer at Smarthis, where we aim to transform the
          automation business.
        </h3>
        <Link
          href="/posts"
          className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700 mb-4"
        >
          See my posts
        </Link>
        <Link
          className="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md shadow-sm hover:text-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-200"
          href="/projects"
        >
          See my projects
        </Link>
      </div>
    </main>
  );
}
