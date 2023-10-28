
'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState();

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: () => setCurrentSlide(),
    };

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 justify-center mb-20'>
             <div className='text-center py-20'>
                <h1 className=' capitalize font-bold text-[42px] leading-[58px] text-[#0D0D0D]'>Certifications & Accreditations</h1>
            </div>
            <div className='text-center'>
                <Slider  infinite {...settings} className='mx-auto'>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000002907.png' alt="" height={95} width={95} />
                    </div>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000002912.png' alt="" height={95} width={95} />
                    </div>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000002913.png' alt="" height={95} width={95} />
                    </div>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000003158 (1).png' alt="" height={95} width={95} />
                    </div>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000002900.png' alt="" height={95} width={95} />
                    </div>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000002907.png' alt="" height={95} width={95} />
                    </div>
                    <div className='!flex justify-center'>
                        <Image src='/Images/Group 1000002912.png' alt="" height={95} width={95} />
                    </div>
                </Slider>
                {currentSlide}
            </div>

        </div>
    );
};

export default SlickCarousel;