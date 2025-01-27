import Image from 'next/image';
import React from 'react';
import "./ui/styles/header.scss";
import HeaderHamburger from './ui/HeaderHamburger';
const Header = () => {
    return (
        <header className='mt-[14px]  relative z-[30]'>
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <Image alt='#' src={"/images/logo.svg"} width={39} height={39} />
                    <p className='logo-text'>Nick</p>
                </div>

                <HeaderHamburger />

                <a href='https://t.me/LastTryS' rel='noopener noreferrer' target='_blank' className='bg-[#4E47FF] py-[11px] px-[20px] sm:px-[30px] md:px-[42px] rounded-[20px]'>
                    <p className='text-h5 text-white font-bold'>Send</p>
                </a>
            </div>
        </header>
    );
};

export default Header;