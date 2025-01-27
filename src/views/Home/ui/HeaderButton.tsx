'use client'
import scrollTo from '@/shared/utils/scrollTo';
import React from 'react';

const HeaderButton = () => {
    return (
        <button onClick={() => scrollTo("projects")} className='md:py-[18px] py-[15px] w-fit md:px-[60px] px-[30px] bg-[#252432] rounded-[10px]'>
        <p className='text-p font-bold'>Go to projects!</p>
    </button>
    );
};

export default HeaderButton;