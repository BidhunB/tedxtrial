"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-white"
            >
              <span className="text-[#eb0028]">TEDx</span>
              <span>Trial</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#"
                className="text-gray-300 hover:text-[#eb0028] transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Speakers
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#eb0028] transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#eb0028] transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#eb0028] transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="bg-[#eb0028] hover:bg-[#c40022] text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                Get Tickets
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="text-gray-300 hover:text-[#eb0028] block px-3 py-2 rounded-md text-base font-medium"
            >
              Speakers
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-[#eb0028] block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-[#eb0028] block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-[#eb0028] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-[#eb0028] block px-3 py-2 rounded-md text-base font-bold"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
