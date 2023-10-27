'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const closeMenuOnLargerScreens = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', closeMenuOnLargerScreens);

    return () => {
      window.removeEventListener('resize', closeMenuOnLargerScreens);
    };
  }, []);
  return (
    <nav className=" bg-transparent fixed w-full z-20 top-0 left-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex py-2 items-center justify-between">

          <Image
            src="/Images/Group.png"
            alt="Your Company"
            width={151} height={45}
          />

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
                <li>
                  <Link
                    href="/"
                    className="text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li aria-labelledby="dropdownNavbarLink">
                  <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Service<svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg></button>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                  >
                    Blog
                  </Link>
                </li>
              </ul>

            </div>

          </div>
          <div className="hidden md:block">
            <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400  hover-text-white "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:flex-row md:space-x-8 md:mt-0  lg:bg-transparent sm:bg-red-200">
            <li>
              <Link
                href="/"
                className="text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li aria-labelledby="dropdownNavbarLink">
              <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Service <svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
            <li>
              <Link
                href="/"
                className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
              >
                Blog
              </Link>
            </li>
            <li>
            <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
            </li>
          </ul>
        </div>
      </div>

    </nav>

  );
};

export default Navbar;