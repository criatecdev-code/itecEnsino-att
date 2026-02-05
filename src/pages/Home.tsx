import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/HeroSlider';
import FunFactorsArea from '../components/FunFactorsArea';
import EducationLevels from '../components/EducationLevels';
import GamificationArea from '../components/GamificationArea';
import AboutArea from '../components/AboutArea';
import AboutAreaTwo from '../components/AboutAreaTwo';
import ContactArea from '../components/ContactArea';
import SegmentCards from '../components/SegmentCards';

const TestimonialsArea = React.lazy(() => import('../components/TestimonialsArea'));
const FAQArea = React.lazy(() => import('../components/FAQArea'));
const EnrollmentCTA = React.lazy(() => import('../components/EnrollmentCTA'));

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>ITEC Ensino - Excelência em Cursos Técnicos e Profissionalizantes</title>
                <meta name="description" content="O ITEC Ensino oferece cursos técnicos (Enfermagem, Radiologia) e profissionalizantes com alta empregabilidade. Transforme seu futuro com qualidade e inovação." />
            </Helmet>
            <HeroSlider />
            <SegmentCards />
            <EducationLevels />
            <EnrollmentCTA />
            <GamificationArea />
            <AboutArea />
            <AboutAreaTwo />
            <FunFactorsArea />
            <TestimonialsArea />
            <FAQArea />
            <ContactArea />
        </>
    );
};

export default Home;
