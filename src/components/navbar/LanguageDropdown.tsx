"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { usePopper } from "react-popper";

export default function LanguageDropdown({}: {}) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  const currPath = usePathname();

  const languagesDropdown = [
    {
      label: "English (US)",
      iconClass: "fi-us",
      locale: "en",
    },
    {
      label: "Portuguese (Brazil)",
      iconClass: "fi-br",
      locale: "pt-BR",
    },
  ];

  //const currLang = languagesDropdown.find((lang) => lang.locale === language);
  const currLang = languagesDropdown[0];
  //console.log({ currLang, language, rest });

  return (
    <div className="flex items-center md:order-3 z-10">
      <button
        type="button"
        onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
        className="inline-flex items-center justify-center px-4 py-2 text-sm text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        ref={setReferenceElement}
      >
        <span
          className={`fi ${currLang?.iconClass}  h-3.5 w-3.5 rounded-full mr-2`}
        ></span>
        {currLang?.label}
      </button>
      {dropdownIsOpen ? (
        <div
          className="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <ul className="py-2" role="none">
            {languagesDropdown.map((lang) => (
              <li key={lang.label}>
                <Link
                  href={currPath || "/"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  locale={lang.locale}
                  key={lang.locale}
                >
                  <div className="inline-flex items-center">
                    <span
                      className={`fi ${lang.iconClass}  h-3.5 w-3.5 rounded-full mr-2`}
                    ></span>
                    {lang.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
