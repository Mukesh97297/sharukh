'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Contact() {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    }
    
  return (
    <div>
      <div className=' min-h-[1063px]   flex items-center justify-center relative py-20' >
                <div className='inset-0  bg-center, bg-transparent grid '>
                    <Image src="/Images/Rectangle 1.png" fill alt='' />
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid  items-center'>
                        <h1 className='text-center font-bold text-[42px] leading-[58px] tracking-[1px] capitalize mb-5'>contact us</h1>
                        <div className='grid grid-cols-12'>
                            <div className='lg:col-span-5 col-span-12 flex items-center px-8'>
                                <Image alt='' width={517} height={518} src="/Images/Group 1000003104.png" />
                            </div>
                            <div className="lg:col-span-7 col-span-12">
                                <form action="" className='mx-auto mt-16 max-w-xl sm:mt-20'>
                                    <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                                        <div>
                                            <label htmlFor="first-name" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>First name *</label>
                                            <div className='mt-2'>
                                                <input type="text" placeholder='First name' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%] shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Last name *</label>
                                            <div className='mt-2'>
                                                <input type="text" placeholder='Last name' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%] shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                                            </div>
                                        </div>
                                        <div className=' sm:col-span-2'>
                                            <label htmlFor="email" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Email *</label>
                                            <div className='mt-2'>
                                                <input type="text" placeholder='you@company.com' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%] shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                                            </div>
                                        </div>
                                        <div className=' sm:col-span-2'>
                                            <label htmlFor="country" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Country</label>
                                            <div className=' relative mt-2'>
                                                <div className=' absolute right-3 items-center '>
                                                    <select name="country" id="country" className='h-full bg-transparent py-5 text-[#050202]' />
                                                </div>
                                            </div>
                                            <input type="text" placeholder='Select Your Country' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                                        </div>
                                        <div>
                                            <label htmlFor="Industry" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Industry *</label>
                                            <div className=' relative mt-2'>
                                                <div className=' absolute right-3 items-center '>
                                                    <select name="Industry" id="Industry" className='h-full bg-transparent py-5 text-[#050202]' />
                                                </div>
                                            </div>
                                            <input type="text" placeholder='Industry' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                                        </div>
                                        <div>
                                            <label htmlFor="Inquiry" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Inquiry Type *</label>
                                            <div className=' relative mt-2'>
                                                <div className=' absolute right-3 items-center '>
                                                    <select name="Inquiry" id="Inquiry Type *" className='h-full bg-transparent py-5 text-[#050202]' />
                                                </div>
                                            </div>
                                            <input type="text" placeholder='Inquiry' className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white' />
                                        </div>
                                        <div className=' sm:col-span-2'>
                                            <label htmlFor="message" className=' text-sm font-medium leading-5 text-[#0D0D0D]'>Where did you hear about GapSec? *</label>
                                            <div className='mt-2'>
                                                <textarea name="message" placeholder='Enter your message...' id="message" rows="4" className='w-full rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                       shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white'/>
                                            </div>
                                        </div>
                                        <div className='sm:col-span-2'>
                                            <label className="inline-flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 rounded-lg gap-2 px-3 py-4 font-normal text-base leading-6 text-[#050202] opacity-[70%]
                          shadow-md border border-solid border-opacity-10 border-white bg-gradient-to-r from-white via-white to-white after:from-opacity-15 after:to-opacity-15 after:opacity-10 after:bg-gradient-to-r after:from-white after:via-white after:to-white"
                                                    checked={isChecked}
                                                    onChange={toggleCheckbox}
                                                />
                                                <span className=" font-normal text-base leading-6 text-[#0D0D0D]">You agree to our friendly <Link href="/" className=' underline'>privacy policy.</Link></span>
                                            </label>
                                        </div>
                                        <div className=' sm:col-span-2'>
                                            <button className=' w-full shadow-md bg-red-600 font-medium text-base leading-6 py-4 rounded gap-2 text-white'>Send message</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Contact
