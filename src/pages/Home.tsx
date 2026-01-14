import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FunFactorsArea from '../components/FunFactorsArea';
import EducationLevels from '../components/EducationLevels';
import EnrollmentCTA from '../components/EnrollmentCTA';
import AboutArea from '../components/AboutArea';
import AboutAreaTwo from '../components/AboutAreaTwo';
import TestimonialsArea from '../components/TestimonialsArea';
import ContactArea from '../components/ContactArea';

const Home: React.FC = () => {
    return (
        <>
            <HeroSlider />
            <FunFactorsArea />
            <EducationLevels />
            <EnrollmentCTA />
            <AboutArea />
            <AboutAreaTwo />
            <TestimonialsArea />
            {/* <BlogArea /> Optional, keep if used */}
            <ContactArea />
        </>
    );
};

export default Home;
