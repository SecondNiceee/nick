import React, { FC } from 'react';

interface ITechnology{
    technology : string
}
const Technology:FC<ITechnology> = ({technology}) => {
    return (
        <div className='flex gap-3 items-center'>
            <div className='w-[10px] h-[10px] bg-white rounded-full'></div>
            <p className='text-h3 text-left '>{technology}</p>
        </div> 
    );
};

export default Technology;