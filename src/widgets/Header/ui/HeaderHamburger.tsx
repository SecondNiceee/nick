'use client'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import HeaderMenu from './HeaderMenu';


const HeaderHamburger = () => {
    const [isOpen, setOpen] = useState(false)
    return (    
        <>
            <div onClick={() => setOpen((value) => (!value))} className='block md:hidden h-fit'>
                <Hamburger color='white'  toggled={isOpen}/>
            </div>
            <HeaderMenu isOpen = {isOpen} />
        </>
    );
};

export default HeaderHamburger;