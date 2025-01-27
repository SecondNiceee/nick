import React from 'react';
import HomeSection from './ui/HomeSection';
import ProjectSection from './ui/ProjectSection';
import TechnologysSection from './ui/TechnologysSection';
import ContactMeSection from './ui/ContactMeSection';

const Home = () => {
    return (
        <>
            <HomeSection/>
            <ProjectSection /> 
            <TechnologysSection />
            <ContactMeSection />
        </>
    );
};

export default Home;