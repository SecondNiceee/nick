import React, { FC } from 'react';
import { TypeContact } from '../model/TypeContact';


const Contact:FC<TypeContact> = ({clue, value, isLink}) => {
    return (
        <div className='flex flex-col lg:gap-2'>
            <p className='text-h3'>{clue}</p>
            {isLink ? <a href={value} target='_blank' rel={"noopener noreferrer"} className='text-h3 text-[#00D4FF] underline'>{value}</a> : <p className='text-h3'>{value}</p>}
        </div>
    );
};

export default Contact;