
import Image from 'next/image'
import React from 'react'

function Home() {
  
  return (
    <>
      <div className='min-h-[792px] top-0 relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid  items-center justify-center ' >
        <div className=' inset-0  bg-center, bg-transparent grid'>
          <Image src="/Images/Rectangle 1.png" layout='fill' alt='' />
          <Image src="/Images/Vector.png" layout='fill' alt='' />
          <div className='  items-center '>
            <div className='grid md:grid-cols-12 sm:grid-cols-1 md:text-start text-center '>
              <div className='md:col-span-7 sm:col-span-12 md:text-start sm:text-center md:min-w-[558px] md:min-h-[375px] md:top-[225px] md:left-[291px] mb-4'>
                <h1 className=' font-bold text-sm tracking-[1px] uppercase text-[#E63232] py-4'>Security Services provider.</h1>
                <h1 className=' font-bold text-5xl text-[#0D0D0D] leading-[67px] py-4 capitalize'>We identify Gaps, <span className='text-[#E63232]'> you gain Security</span></h1>
                <p className=' font-normal text-xl leading-8 text-[#050202] opacity-[70%] py-4'>Identifying gaps is a crucial step in ensuring security in any system or process. These gaps can range from technical vulnerabilities to gaps in policies and procedures.</p>
                <button className='w-[197px] bg-[#E63232] font-medium text-base leading-5 rounded-[5px] gap-2.5 h-[51px] text-[#FFFCFC] '>Company Profile</button>
              </div>
              <div className='md:col-span-5 sm:col-span-12 flex justify-center items-center sm:text-center  md:top-[246px] md:left-[922px] '>
                <Image src="/Images/Group 1000003129.png" height={303} width={583} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>

     

    </>
  )
}

export default Home
