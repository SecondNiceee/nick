import Image from 'next/image';
import React from 'react';

const HomeSection = () => {
    return (
        <section className='md:py-[180px] sm:py-[100px] py-[60px] relative'>
            <div className="container flex flex-col sm:gap-[39px] gap-[20px] items-center relative z-[20]">
                <div className='flex flex-col items-center '>
                    <h1 className='text-title font-bold'>My Portfolio</h1>
                    <h1 className='text-title font-bold'>(Nick)</h1>
                </div>
                <button className='md:py-[18px] py-[15px] w-fit md:px-[60px] px-[30px] bg-[#252432] rounded-[10px]'>
                    <p className='text-p font-bold'>Go to posts!</p>
                </button>


            </div>
            <Image src={"/images/home-liner.svg"} alt='liner' width={794} height={652} className='md:top-[-29%]  480:top-[-40%] top-[-20%] 420:top-[-26%]  w-[1004px] absolute  left-[50%] -translate-x-[50%]' />

        </section>
    );
};

export default HomeSection;