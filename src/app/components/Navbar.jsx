import Image from 'next/image';
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="bg-transparent fixed w-full z-20 top-0 left-0 ">
      <div className=" flex items-center justify-around  py-2">
        <Link href="/" className="items-center">
          <Image src="/Images/Group.png"  alt="Flowbite Logo" width={151} height={45} />
        </Link>
        <div className="flex md:order-2">
          <button type="button" className="text-[#E63232] rounded-sm border gap-2 border-[#E63232] border-solid w-32  h-11">Contact Us</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent dark:border-gray-700">
            <li>
              <Link href="/" className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900" aria-current="page">Home</Link>
            </li>
          
            <li aria-labelledby="dropdownNavbarLink">
              <button data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Service
               <svg className="w-2.5  ml-2.5 pt-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg></button>
              
            </li>
            <li>
              <Link href="/" className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">About</Link>
            </li>
            <li>
              <Link href="/" className="font-family text-base font-normal leading-6 tracking-normal text-left text-gray-900">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;