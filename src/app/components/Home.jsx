'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import Carousel from './Carousel';
function Home() {
   const [isChecked, setIsChecked] = useState(false);

   const toggleCheckbox = () => {
     setIsChecked(!isChecked);
   };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1024, min: 767 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  
  return (
    <>
     <div className=' top-0 relative' >
        <div className=' inset-0  bg-center, bg-transparent grid'>
          <Image src="/Images/Rectangle 1.png" layout='fill' alt='' />
          <Image src="/Images/vector.png" layout='fill' alt='' />
          <div className='container mx-auto grid justify-center items-center py-44'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 md:text-start text-center'>
              <div className=' md:text-start sm:text-center'>
                <h1 className=' font-bold text-sm tracking-[1px] uppercase text-[#E63232] py-4'>Security Services provider.</h1>
                <h1 className=' font-bold text-5xl text-[#0D0D0D] leading-[67px] py-4 capitalize'>We identify Gaps, <span className='text-[#E63232]'> you gain Security</span></h1>
                <p className=' font-normal text-xl leading-8 text-[#050202] opacity-[70%] py-4'>Identifying gaps is a crucial step in ensuring security in any system or process. These gaps can range from technical vulnerabilities to gaps in policies and procedures.</p>
                <button className='w-[197px] bg-[#E63232] font-medium text-base leading-5 rounded-[5px] gap-2.5 h-[51px] text-[#FFFCFC] '>Company Profile</button>
              </div>
              <div className=' '>
                <div className='flex justify-center items-center'>
                  <Image src="/Images/Group 1000003129.png" height={303} width={580} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container mx-auto'>
          <h1 className='text-center text-[42px] font-bold leading-[58px] text-[#0D0D0D] tracking-[2px] mt-12'>Services</h1>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 md:text-start text-center mb-8'>
            <div>
              <div className='flex justify-center items-center'>
                <Image alt='' width={350} height={350} src="/Images/Group 1000002916.png" />
              </div>
            </div>
            <div className=' grid justify-center items-center'>
              <div className=' md:text-start text-center'>
                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>our offensive security </h2>
                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>Offensive Security</h1>
                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>Protect your business with our offensive security services. We simulate real-world
                  threats to identify and fix vulnerabilities before they can be exploited, ensuring the safety of your organisation.</p>
                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 md:text-start text-center mb-8'>
            <div className=' grid justify-center items-center'>
              <div className=' md:text-start text-center'>
                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>The Power of IT and Solutions Computing</h2>
                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>IT Solutions</h1>
                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>IT and cloud technology have transformed the way businesses operate, enabling them to become more efficient, agile, and responsive to customer needs.
                  The cloud has revolutionized data storage and management, allowing companies to store.</p>
                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
              </div>
            </div>
            <div>
              <div className='flex justify-center items-center'>
                <Image alt='' width={200} height={200} src="/Images/It_Infrastructure.png" />
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 md:text-start text-center mb-8'>
            <div>
              <div className='flex justify-center items-center'>
                <Image alt='' width={350} height={350} src="/Images/Group 1000002974.png" />
              </div>
            </div>
            <div className=' grid justify-center items-center'>
              <div className=' md:text-start text-center'>
                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>defensive security services </h2>
                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>Managed Defensive Security</h1>
                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>Stay ahead of cyber threats with our managed defensive security services - our expert team monitors your systems 24/7 to detect, respond and remediate potential
                  security incidents before they become major issues.</p>
                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
              </div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 md:text-start text-center mb-8'>
            <div className=' grid justify-center items-center'>
              <div className=' md:text-start text-center'>
                <h2 className=' font-semibold text-xs leading-5 tracking-wide uppercase text-[#E63232] py-2'>the foundation of a successful business </h2>
                <h1 className='font-bold text-[42px] leading-[58px] text-[#0D0D0D] tracking-[3px] py-2'>Governance, Risk & Compliance</h1>
                <p className=' font-normal text-xl leading-[32px] text-[#050202] opacity-[70%] py-2'>Effective Governance, Risk & Compliance is the foundation of a successful business - let us help you navigate regulatory requirements
                  and manage risk to ensure your operations are secure and compliant.</p>
                <button type='buttton' className='my-4 h-[51px] rounded-[5px] border-[1px] border-solid gap-2 w-[157px] border-[#E63232] font-medium text-base leading-5 text-[#E63232] '>Learn more</button>
              </div>
            </div>
            <div>
              <div className='flex justify-center items-center'>
                <Image alt='' width={200} height={200} src="/Images/Group (1).png" />
              </div>
            </div>
          </div>
        </div>
        <div className=' relative py-20' >
          <div className='inset-0  bg-center, bg-transparent grid'>
            <Image src="/Images/Rectangle 1.png" layout='fill' alt='' />
            <Image src="/Images/vector.png" layout='fill' alt='' />
            <div className='container mx-auto grid justify-center items-center'>
              <div className='grid grid-cols-1'>
                <div>
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
        <Carousel/>
      <div className=' relative py-20' >
        <div className='inset-0  bg-center, bg-transparent grid'>
          <Image src="/Images/Rectangle 1.png" layout='fill' alt='' />
          <div className='container mx-auto grid  items-center'>
            <h1 className='text-center font-bold text-[42px] leading-[58px] tracking-[1px] mb-5'>contact us</h1>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
              <div>
                <Image alt='' width={518} height={518} src="/Images/Group 1000003104.png" />
              </div>
              <div>
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
    </>
  )
}

export default Home
