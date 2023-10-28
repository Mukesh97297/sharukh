'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import Carousel from './Carousel'
function Services() {
  

    return (
        <div>
           
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid  '> 
                    <h1 className='text-center text-[42px] font-bold leading-[58px] text-[#0D0D0D] tracking-[2px] mt-12'>Services</h1>
                    <div className=' grid grid-cols-12  lg:text-start text-center mb-10 md:min-h-[366px] '>
                        <div className='lg:col-span-5 col-span-12 flex lg:justify-start justify-center sm:text-center'>
                            <Image alt='' width={286} height={366}   src="/Images/Vector (1).png" />
                        </div>
                        <div className=' lg:col-span-7 col-span-12 flex justify-center  items-center md:min-h-[285px] md:min-w-[630px]'>
                            <div className=' lg:text-start text-center'>
                                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>our offensive security </h2>
                                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>Offensive Security</h1>
                                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>Protect your business with our offensive security services. We simulate real-world
                                    threats to identify and fix vulnerabilities before they can be exploited, ensuring the safety of your organisation.</p>
                                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12 lg:text-start text-center mb-10'>
                        <div className=' lg:col-span-7 col-span-12 flex justify-center items-center'>
                            <div className=' lg:text-start text-center'>
                                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>The Power of IT and Solutions Computing</h2>
                                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>IT Solutions</h1>
                                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>IT and cloud technology have transformed the way businesses operate, enabling them to become more efficient, agile, and responsive to customer needs.
                                    The cloud has revolutionized datFa storage and management, allowing companies to store.</p>
                                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
                            </div>
                        </div>
                        <div className='lg:col-span-5 col-span-12 flex lg:justify-end justify-center'>
                            <Image alt='' width={341} height={340} src="/Images/It_Infrastructure.png" />
                        </div>
                    </div>
                    <div className='grid grid-cols-12 lg:text-start text-center mb-10'>
                        <div className='lg:col-span-5 col-span-12 flex lg:justify-start justify-center'>
                            <Image alt='' width={350} height={350} src="/Images/Vector (2).png" />
                        </div>
                        <div className='lg:col-span-7 col-span-12 flex justify-center items-center'>
                            <div className=' lg:text-start text-center'>
                                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>defensive security services </h2>
                                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>Managed Defensive Security</h1>
                                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>Stay ahead of cyber threats with our managed defensive security services - our expert team monitors your systems 24/7 to detect, respond and remediate potential
                                    security incidents before they become major issues.</p>
                                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12  lg:text-start text-center mb-8'>
                        <div className=' lg:col-span-7 col-span-12 flex justify-end items-center'>
                            <div className=' lg:text-start text-center'>
                                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>the foundation of a successful business </h2>
                                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>Governance, Risk & Compliance</h1>
                                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>Effective Governance, Risk & Compliance is the foundation of a successful business - let us help you navigate regulatory requirements
                                    and manage risk to ensure your operations are secure and compliant.</p>
                                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
                            </div>
                        </div>
                        <div className='lg:col-span-5 col-span-12 flex lg:justify-end justify-center'>
                            <Image alt='' width={357} height={368} src="/Images/Group (1).png" />
                        </div>
                    </div>
                 </div> 
                <div className=' relative min-h-[981px] flex items-center justify-center ' >
                    <div className='inset-0  bg-center, bg-transparent grid'>
                        <Image src="/Images/Rectangle 1.png" fill alt='' />
                        <Image src="/Images/Vector.png" fill alt='' />
                        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid  items-center'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12'>
                                    <h1 className='text-center font-bold text-[42px] leading-[58px] tracking-[1px] mb-5'>Why GapSec?</h1>
                                    <p className='text-[#050202] opacity-[70%] font-normal text-xl leading-8 text-center mb-6'>We are a team of dedicated security professionals who prioritize the values of trust, expertise, <br />
                                        and innovation in providing comprehensive and tailored security solutions to our clients.</p>
                                    <p className='text-[#050202] opacity-[70%] font-normal text-xl leading-8 text-center mb-10'>By choosing us, clients can expect increased protection against cyber threats, enhanced <br />
                                        regulatory compliance, and time and cost savings by outsourcing their security operations.</p>
                                    <Image src="/Images/Group 1000003154.png" width={1116} height={443} alt='' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    

    )
}

export default Services
