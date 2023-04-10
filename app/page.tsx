'use client'

import { Roboto_Mono } from '@next/font/google'
import Link from 'next/link'

const robotoHeading = Roboto_Mono({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main>
      <div className="flex flex-col mt-48 ml-48 h-full items-start">
        <h1
          className={`${robotoHeading.className} mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl :text-white `}
        >
          Hey, I'm Bruno
        </h1>
        <h3 className="mb-6 text-lg font-normal text-gray-400 lg:text-xl">
          I'm a software engineer at Smarthis, where we aim to transform the
          automation business.
        </h3>
        <Link href="/posts" className="mb-4">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
              See my posts
            </span>
          </button>{' '}
        </Link>
        {/* <Link href="/projects">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 text-white hover:text-gray-900 focus:ring-4 focus:outline-none  focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              See my projects
            </span>
          </button>{' '}
        </Link> */}
      </div>
    </main>
  )
}
