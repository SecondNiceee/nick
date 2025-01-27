'use client'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { links } from '../config/links.config';

const HeaderHamburger = () => {
    const [isOpen, setOpen] = useState(false)
    return (    

        <>
            <div onClick={() => setOpen((value) => (!value))} className='block md:hidden h-fit'>
                <Hamburger  toggled={isOpen}/>
            </div>
            <nav className={`rounded-[20px] md:static absolute md:w-[unset] w-[90%] 480:w-[80%] sm:w-[50%] bottom-[-20px] translate-y-[100%] md:translate-x-0 md:translate-y-0 translate-x-[-50%] transition-[left] duration-500  ${isOpen ? "left-[50%]" : "left-[-240px]"}`}>
                    <ul className='flex md:flex-row flex-col w-[100%]  gap-[36px] lg:gap-[47px] py-[22px] px-[30px] lg:px-[56px] bg-white justify-center items-center rounded-[20px]'>
                        {links.map((link) => <li className='text-p cursor-pointer text-black font-normal'>{link.value}</li>)}
                    </ul>
            </nav>
        </>
    );
};

export default HeaderHamburger;