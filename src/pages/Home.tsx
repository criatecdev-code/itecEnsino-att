import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroVideo from '../components/HeroVideo';

// Lazy load almost everything except the above-the-fold content
const SegmentCards = React.lazy(() => import('../components/SegmentCards'));
const EducationLevels = React.lazy(() => import('../components/EducationLevels'));
const EnrollmentCTA = React.lazy(() => import('../components/EnrollmentCTA'));
const GamificationArea = React.lazy(() => import('../components/GamificationArea'));
const AboutArea = React.lazy(() => import('../components/AboutArea'));
const AboutAreaTwo = React.lazy(() => import('../components/AboutAreaTwo'));
const FunFactorsArea = React.lazy(() => import('../components/FunFactorsArea'));
const TestimonialsArea = React.lazy(() => import('../components/TestimonialsArea'));
const FAQArea = React.lazy(() => import('../components/FAQArea'));
const ContactArea = React.lazy(() => import('../components/ContactArea'));

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>ITEC Ensino - Excelência em Cursos Técnicos e Profissionalizantes</title>
                <meta name="description" content="O ITEC Ensino oferece cursos técnicos (Enfermagem, Radiologia) e profissionalizantes com alta empregabilidade. Transforme seu futuro com qualidade e inovação." />
            </Helmet>

            {/* Critical Content - Loaded Eagerly */}
            <HeroVideo />

            {/* Deferred Content - Loaded on demand */}
            <Suspense fallback={<div className="h-64 flex items-center justify-center"><i className="fas fa-spinner animate-spin text-primary text-2xl"></i></div>}>
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
            </Suspense>
        </>
    );
};

export default Home;
