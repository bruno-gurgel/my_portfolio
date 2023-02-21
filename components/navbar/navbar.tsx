'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import useGetPath from '@/hooks/useGetPath'
import { isLinkActive } from '@/lib/utils'

import LanguageDropdown from './LanguageDropdown'
import NavbarSearch from './searchNavbar'

export default function Navbar() {
  const currPath = useGetPath()

  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  console.log({ isMobile, isMenuOpen, isSearchOpen })

  // create an effect that check if user is on mobile and set the state
  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    setIsMobile(isMobile)
  }, [])

  console.log({ isMobile })

  const menuItems = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Projects',
      link: '/projects'
    },
    {
      label: 'Blog',
      link: '/posts'
    },
    {
      label: 'About',
      link: '/about'
    }
  ]

  const activeLinkClasses =
    'bg-blue md:bg-transparent md:text-blue-700 md:p-0 text-white md:hover:text-white'
  const nonActiveClasses =
    ' md:hover:text-blue-700 md:p-0 md:hover:text-white text-gray-400 hover:text-white md:hover:bg-transparent border-gray-700'

  const isToShowMenu = isMobile ? isMenuOpen : true
  const isToShowSearch = isMobile ? isSearchOpen : true

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gray-900">
      <div className="container flex flex-wrap items-center md:justify-between mx-auto">
        <NavbarSearch
          open={isToShowSearch}
          toggle={() => setIsSearchOpen(!isSearchOpen)}
        />

        <button
          data-dropdown-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600 order-1"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <ul className="md:flex hidden  flex-col mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700 z-10 md:order-2 p-0">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className={`block py-2 pl-3 pr-4 rounded ${
                  isLinkActive(item.link, currPath || '')
                    ? activeLinkClasses
                    : nonActiveClasses
                }`}
                aria-current="page"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageDropdown />
      </div>
    </nav>
  )
}
