"use client";

import React, { useState } from 'react';
import Testimonials from './testimonial';


export default function TestimonialsPage () {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

        return (
            <div className='w-full overflow-hidden h-[auto]'>
                <div className="flex transition-transform duration-[0.5s]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="w-full flex-shrink-0 ">
                        <Testimonials />
                    </div>
                    <div className="w-full flex-shrink-0 ">
                        <Testimonials />
                    </div>
                    <div className="w-full flex-shrink-0 ">
                        <Testimonials />
                    </div>
                    <div className="w-full flex-shrink-0 ">
                        <Testimonials />
                    </div>
                    <div className="w-full flex-shrink-0 ">
                        <Testimonials />
                    </div>
                </div>
                <div className='flex justify-center h-[60px]'>
                    <div className='w-full h-[4px] flex justify-center items-center gap-4'>
                        <div onClick={() => goToSlide(0)} className='h-[10px] w-[10px] rounded-lg bg-[#666666] cursor-pointer hover:bg-[#000000]'>
    
                        </div>
                        <div onClick={() => goToSlide(1)} className='h-[10px] w-[10px] rounded-lg bg-[#666666] cursor-pointer hover:bg-[#000000]'>
    
                        </div>
                        <div onClick={() => goToSlide(2)} className='h-[10px] w-[10px] rounded-lg bg-[#666666] cursor-pointer hover:bg-[#000000]'>
    
                        </div>

                        <div onClick={() => goToSlide(3)} className='h-[10px] w-[10px] rounded-lg bg-[#666666] cursor-pointer hover:bg-[#000000]'>

                        </div>

                        <div onClick={() => goToSlide(4)} className='h-[10px] w-[10px] rounded-lg bg-[#666666] cursor-pointer hover:bg-[#000000]'>
                        </div>
                    </div>
                </div>
            </div>
    );
};