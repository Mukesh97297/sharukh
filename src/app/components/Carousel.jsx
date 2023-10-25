'use client'
import React from 'react'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Carousel() {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 6 },
    };
    
    const items = [
        <div key={1} className="item flex justify-center" data-value="1">
          <Image src="/Images/Group 1000002907.png" alt="" height={95} width={95}  />    
          </div>,
        <div key={2} className="item flex justify-center" data-value="2">
             <Image src="/Images/Group 1000002912.png" alt="" height={95} width={95}  />    
        </div>,
        <div key={3} className="item flex justify-center" data-value="3">
             <Image src="/Images/Group 1000002913.png" alt="" height={95} width={95}  />    
        </div>,
        <div key={4} className="item flex justify-center" data-value="4">
             <Image src="/Images/Group 1000003158 (1).png" alt="" height={95} width={95}  />    
        </div>,
        <div key={5} className="item flex justify-center" data-value="5">
             <Image src="/Images/Group 1000003158.png" alt="" height={95} width={95}  />    
        </div>,
         <div key={5} className="item flex justify-center" data-value="5">
         <Image src="/Images/Group 1000002900.png" alt="" height={95} width={95}  />    
    </div>,
];
    
  
  return (
      < div className='container mx-auto'>
        <div className='text-center py-20'>
            <h1 className=' capitalize font-bold text-[42px] leading-[58px] text-[#0D0D0D]'>Certifications & Accreditations</h1>
        </div>
        <AliceCarousel  items={items} responsive={responsive}/>
        
           
            
           
      </div>
      
         
            
          
         
  )
}

export default Carousel
