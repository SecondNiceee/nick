import React, { FC } from 'react';
import { TypeProject } from '../model/TypeProject';
import GitHubLink from './GitHubLink';


interface IProjectCharacteristic{
    project : TypeProject
}
const ProjectCharacteristics:FC<IProjectCharacteristic> = ({project}) => {
    return (
        <div className='w-[100%] flex flex-col gap-1 md:gap-[15px]'>
            <p className='text-2xl'>
                Стэк : {project.technologys.join(', ')}
            </p>
            <a href={project.previewLink} target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer'>
                Превью : <span className='text-[#00D4FF] underline'>{"Ссылка на превью"}</span>
            </a>
            <GitHubLink link={project.gitHubLink} />

            <p className='text-2xl'>
                Преимущества : {project.advantages ? project.advantages.join(', ') : "нет"}
            </p>

            <p className='text-2xl'>
                Недостатки : {project.disAdvantages ? project.disAdvantages.join(', ') : "нет"}
            </p>
        </div>
    );
};

export default React.memo(ProjectCharacteristics);