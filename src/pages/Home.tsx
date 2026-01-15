import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/HeroSlider';
import FunFactorsArea from '../components/FunFactorsArea';
import EducationLevels from '../components/EducationLevels';
import EnrollmentCTA from '../components/EnrollmentCTA';
import GamificationArea from '../components/GamificationArea';
import AboutArea from '../components/AboutArea';
import AboutAreaTwo from '../components/AboutAreaTwo';
import TestimonialsArea from '../components/TestimonialsArea';
import ContactArea from '../components/ContactArea';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>ITEC Ensino - Excelência em Cursos Técnicos e Profissionalizantes</title>
                <meta name="description" content="O ITEC Ensino oferece cursos técnicos (Enfermagem, Radiologia) e profissionalizantes com alta empregabilidade. Transforme seu futuro com qualidade e inovação." />
            </Helmet>
            <HeroSlider />
            <FunFactorsArea />
            <EducationLevels />
            <EnrollmentCTA />
            <GamificationArea />
            <AboutArea />
            <AboutAreaTwo />
            <TestimonialsArea />
            {/* <BlogArea /> Optional, keep if used */}
            <ContactArea />
        </>
    );
};

export default Home;
