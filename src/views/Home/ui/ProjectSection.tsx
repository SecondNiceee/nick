import React from 'react';
import { projects } from '../config/project.config';
import Project from './Project';

const ProjectSection = () => {
    return (
        <section id='projects' className='relative z-[50] md:py-[100px] sm:py-[60px] py-[40px]'>
            <div className="container flex flex-col gap-[30px] sm:gap-[30px]">
                <h2 className='section-title underline'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] lg:gap-[56px]'>
                    {projects.map( (project, i) => <Project project={project} key={i} /> )}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;