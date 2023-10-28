import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className='min-h-[504px] relative'>
            <div className=' inset-0  bg-center, bg-transparent grid'>
                <Image src="/Images/BG.png" fill alt='' />
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid '>
                    <div className='grid grid-cols-12  py-28' >
                        <div className='lg:col-span-3 col-span-12 justify-center '>

                            <Link href="/" className='flex lg:justify-start  justify-center'>
                                <Image src='/Images/Group.png' alt='' width={195} height={58} />
                            </Link>

                            <div className='py-6 flex lg:justify-start  justify-center'>
                                <Link href="/" className='mr-3'>
                                    <Image src='/Images/Group 1000003173.png' alt='' width={35} height={35} />
                                </Link>
                                <Link href="/" className='mr-3'>
                                    <Image src='/Images/Group 1000003172.png' alt='' width={35} height={35} />
                                </Link>
                                <Link href="/" className='mr-3'>
                                    <Image src='/Images/Group 1000003169.png' alt='' width={35} height={35} />
                                </Link>
                            </div>

                        </div>
                        <div className='lg:col-span-3 col-span-12 lg:text-start text-center'>
                            <h1 className=' font-semibold  text-sm text-[#050202] tracking-[1px]'>SOLUTIONS</h1>
                            <ul className='static'>
                                <li className=' text-base font-medium text-[#050202] opacity-[70%] py-2'>Offensive Security  </li>
                                <li className=' text-base font-medium text-[#050202] opacity-[70%] py-2'>IT Solutions  </li>
                                <li className=' text-base font-medium text-[#050202] opacity-[70%] pt-2'>Managed Defensive Security </li>
                                <li className=' text-base font-medium text-[#050202] opacity-[70%] '>Governance, Risk & Compliance</li>
                            </ul>
                        </div>
                        <div className='lg:col-span-3 col-span-12 lg:text-start text-center'>
                            <h1 className=' font-semibold  text-sm text-[#050202]  uppercase tracking-[1px]'>compare</h1>
                            <ul className=''>
                                <li className=' text-base font-normal text-[#050202] opacity-[70%] py-2'>About</li>
                                <li className=' text-base font-medium text-[#050202] opacity-[70%] py-2'>Blog</li>

                            </ul>
                        </div>
                        <div className='lg:col-span-3 col-span-12 lg:text-start text-center'>
                            <h1 className=' font-semibold  text-sm text-[#050202]  uppercase tracking-[1px]'>Newsletter</h1>
                            <div className='py-2'><input type="text" placeholder='Enter your email address' className=' bg-[#D0D0D0] opacity-[70%] rounded-[10px] pl-2 text-[#050202] border-solid border-[1px] h-[55px] w-[270px] border-[#FCFDFF12] ' /></div>
                            <div className='py-2'><button className='h-[55px] w-[270px] bg-[#E63232] rounded-[10px] border-solid border-[1px] text-[#FFFCFC]'>Subscribe Now</button></div>
                        </div>
                    </div>
                    <div className=' border-t-[1px] border-solid border-[#050202] opacity-[10%]'></div>
                    <div className='text-center py-10'>
                        <span className=' font-normal text-sm text-center font-sans text-[#050202] opacity-[70%]'>© Copyright 2023, All Rights Reserved by GapSec</span>
                    </div>

                </div>
                </div>

        </footer>
    )
}

export default Footer
