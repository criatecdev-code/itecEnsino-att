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
                <meta name="description" content="O ITEC Ensino oferece cursos técnicos (Enfermagem, Radiologia) e profissionalizantes com alta empregabilidade. Transforme seu futuro com qualidade e inovação no Sul Fluminense." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.itecensino.com.br/" />
                <meta property="og:title" content="ITEC Ensino - Excelência em Cursos Técnicos e Profissionalizantes" />
                <meta property="og:description" content="Transforme seu futuro com o ensino técnico de maior tradição do Sul Fluminense. Cursos com alta empregabilidade e infraestrutura moderna." />
                <meta property="og:image" content="https://www.itecensino.com.br/img/logo/og-image.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.itecensino.com.br/" />
                <meta property="twitter:title" content="ITEC Ensino - Excelência em Cursos Técnicos e Profissionalizantes" />
                <meta property="twitter:description" content="Transforme seu futuro com o ensino técnico de maior tradição do Sul Fluminense. Cursos com alta empregabilidade e infraestrutura moderna." />
                <meta property="twitter:image" content="https://www.itecensino.com.br/img/logo/og-image.png" />

                <link rel="canonical" href="https://www.itecensino.com.br/" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "ITEC Ensino",
                        "url": "https://www.itecensino.com.br/",
                        "logo": "https://www.itecensino.com.br/img/logo/logo.png",
                        "description": "Escola técnica e profissionalizante de excelência no Sul Fluminense.",
                        "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Volta Redonda",
                        "addressRegion": "RJ",
                        "addressCountry": "BR"
                        },
                        "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Cursos Técnicos e Profissionalizantes",
                        "itemListElement": [
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Course",
                                "name": "Técnico em Enfermagem"
                            }
                            },
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Course",
                                "name": "Técnico em Radiologia"
                            }
                            }
                        ]
                        }
                    }
                    `}
                </script>
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
