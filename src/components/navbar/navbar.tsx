"use client";

import { isLinkActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import NavbarSearch from "./searchNavbar";

export default function Navbar() {
  const currPath = usePathname();

  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Blog",
      link: "/posts",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const activeLinkClasses =
    "text-white bg-blue md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white";
  const nonActiveClasses =
    "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <NavbarSearch />

        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 z-10">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className={`block py-2 pl-3 pr-4 rounded ${
                  isLinkActive(item.link, currPath || "")
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
  );
}
