'use client'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import HeaderMenu from './HeaderMenu';


const HeaderHamburger = () => {
    const [isOpen, setOpen] = useState(false)
    return (    
        <>
            <div onClick={() => setOpen((value) => (!value))} className='block md:hidden h-fit'>
                <Hamburger  toggled={isOpen}/>
            </div>
            <HeaderMenu isOpen = {isOpen} />
        </>
    );
};

export default HeaderHamburger;