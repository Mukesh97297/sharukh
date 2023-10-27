'use client'
import Image from 'next/image';
import Link from "next/link"
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    // Close the mobile menu on larger screens by default
    const closeMenuOnLargerScreens = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close the mobile menu when the window is resized
    window.addEventListener('resize', closeMenuOnLargerScreens);

    return () => {
      window.removeEventListener('resize', closeMenuOnLargerScreens);
    };
  }, []);
  return (
    // <nav className="bg-transparent fixed w-full z-20 top-0 left-0 ">
    //   <div className=" flex items-center justify-around  py-2">
    //     <Link href="/" className="items-center">
    //       <Image src="/Images/Group.png"  alt="Logo" width={151} height={45} />
    //     </Link>
    //     <div className="flex md:order-2">
    //       <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
    //       <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    //         <span className="sr-only">Open main menu</span>
    //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent dark:border-gray-700">
    //         <li>
    //           <Link href="/" className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900" aria-current="page">Home</Link>
    //         </li>

    //         <li aria-labelledby="dropdownNavbarLink">
    //           <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Service
    //            <svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    //           </svg></button>

    //         </li>
    //         <li>
    //           <Link href="/" className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">About</Link>
    //         </li>
    //         <li>
    //           <Link href="/" className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Blog</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
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
                  <a
                    href="#"
                    className="text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li aria-labelledby="dropdownNavbarLink">
                  <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Servic           <svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg></button>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                  >
                    Blog
                  </a>
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
              <a
                href="#"
                className="text-base font-normal leading-6 tracking-normal text-left text-gray-900"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li aria-labelledby="dropdownNavbarLink">
              <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Servic           <svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg></button>
            </li>
            <li>
              <a
                href="#"
                className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900"
              >
                Blog
              </a>
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