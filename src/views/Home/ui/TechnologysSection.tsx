import React from 'react';
import { technologys } from '../config/technologys.config';
import Technology from './Technology';

const TechnologysSection = () => {
    return (
        <section id='technologys' className='relative z-[50] md:pb-[100px] sm:pb-[60px] pb-[40px]'>
            <div className="container flex flex-col gap-[20px] sm:gap-[30px]">
                <h2 className='section-title underline'>Technologys</h2>
                <ul className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-[10px] w-[100%]'>
                    {technologys.map( (technology, i) => <Technology technology={technology} /> )}
                </ul>
            </div>
        </section>
    );
};

export default TechnologysSection;