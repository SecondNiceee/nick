import React, { FC } from 'react';
import { TypeProject } from '../model/TypeProject';


interface IProjectCharacteristic{
    project : TypeProject
}
const ProjectCharacteristics:FC<IProjectCharacteristic> = ({project}) => {
    return (
        <div className='w-[100%] flex flex-col gap-[10px] md:gap-[15px]'>
            <p className='text-h4'>
                Стэк : {project.technologys.join(', ')}
            </p>
            <a href={project.previewLink} target='_blank' rel='noopener noreferrer' className='text-h4 cursor-pointer'>
                Превью : <span className='text-[#00D4FF] underline'>{project.previewLink}</span>
            </a>
            {project.gitHubLink ? 
                            <a href={project.gitHubLink} target='_blank' rel='noopener noreferrer' className='text-h4 break-words cursor-pointer'>
                            Git Hub  : <span className='text-[#00D4FF] underline'>{project.gitHubLink}</span>
                        </a>
            :
            <p className='text-h4'>
                Git Hub : закрыт, <span className='text-[#00FF66]'>коммерческий</span>
            </p>
            }
            <p className='text-h4'>
                Преимущества : {project.advantages ? project.advantages.join(', ') : "нет"}
            </p>

            <p className='text-h4'>
                Недостатки : {project.disAdvantages ? project.disAdvantages.join(', ') : "нет"}
            </p>
        </div>
    );
};

export default React.memo(ProjectCharacteristics);