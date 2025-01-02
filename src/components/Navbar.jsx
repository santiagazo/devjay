import React, { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";
import JayLaraIconDark from "./logos/JayLaraIconDark";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import NavLinkButton from "./NavLinkButton.jsx";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(true);
  const [isEnabledMobileMenu, setIsEnabledMobileMenu] = useState(false);

  const navButtons = [
    {
      route: "/",
      name: "Home",
    },
    {
      route: "/contact",
      name: "Contact",
    },
    // {
    //     route: '/blog',
    //     name: "Blog"
    // },
  ];

  return (
    <nav className="relative bg-neutral-700 dark:bg-neutral-900 shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-6 h-16">
          <div className="col-span-1 flex items-center">
            <JayLaraIconDark className="w-10 m-auto rounded-full shadow-emerald-300 shadow-md" />
          </div>
          <div className="col-span-4 hidden md:block">
            <div className="h-16 ml-10 flex items-center space-x-4">
              {navButtons.map((b) => {
                return (
                  <NavLinkButton key={b.name} route={b.route}>
                    {b.name}
                  </NavLinkButton>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 hidden md:block">
            <div className="flex items-center justify-end h-16">
              <Button onClick={toggleDarkMode}>
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>

          <div className="col-span-5 md:hidden">
            <div className="relative flex items-center justify-end h-16">
              <button
                onClick={() => setIsEnabledMobileMenu((prev) => !prev)}
                className="text-2xl px-4 py-2 text-gray-100 dark:text-gray-300 hover:text-gray-300 hover:border-gray-600 dark:hover:text-white bg-neutral-700 dark:bg-neutral-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </button>
              {isEnabledMobileMenu && <MobileMenu />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
