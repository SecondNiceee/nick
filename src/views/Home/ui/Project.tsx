import Image from 'next/image';
import React, { FC } from 'react';
import { TypeProject } from '../model/TypeProject';
import ProjectCharacteristics from './ProjectCharacteristics';

interface IProject{
    project : TypeProject
}
const Project:FC<IProject> = ({project}) => {
    return (
        <div className='flex flex-col py-[30px] px-[30px] border-solid border-2 rounded-[20px] shadow-custom gap-[20px] justify-start'>
            <a className='' href={project.previewLink} target='_blank' rel={"noreferrer noopener"} ><Image width={400} height={400} alt='preview-image' className='object-cover w-[100%] transition-transform duration-300 hover:scale-110' src={project.ImageSrc} /></a>
            <h3 className='text-h2 font-semibold text-white mx-auto'>{project.title}</h3>
            <ProjectCharacteristics project={project} />
        </div>
    );
};

export default Project;