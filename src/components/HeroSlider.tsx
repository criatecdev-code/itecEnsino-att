import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        dotsClass: "slick-dots !bottom-8 !flex !justify-center !gap-2 [&>li]:!w-3 [&>li]:!h-3 [&>li>button]:!w-3 [&>li>button]:!h-3 [&>li>button]:!bg-white/50 [&>li>button]:!rounded-full [&>li.slick-active>button]:!bg-secondary [&>li>button:before]:!content-none"
    };

    const slides = [
        {
            image: '/img/home/banner2.png',
            mobileColor: 'bg-gradient-to-br from-green-900 to-gray-900',
            link: '/matricula',
            title: 'Técnico em <span class="text-secondary">ENFERMAGEM</span>',
            subtitle: 'Referência em formação na área da saúde. Mais de 5 mil alunos formados.',
            buttonText: 'Inicie Sua Jornada',
            showContent: true
        },
        {
            image: '/img/home/banner1.png',
            mobileColor: 'bg-gradient-to-br from-blue-900 to-gray-900',
            link: '/cursos',
            title: 'Fundamental <br/>+ Médio',
            subtitle: 'Educação completa para o futuro do seu filho com valores e qualidade.',
            buttonText: 'Conheça a Escola',
            showContent: true
        },
        {
            image: '/img/home/banner5.png',
            mobileColor: 'bg-gradient-to-br from-indigo-900 to-gray-900',
            link: '/matricula',
            title: 'MÉDIO + TÉCNICO',
            subtitle: 'Saia da escola já com uma profissão. O caminho mais rápido para o sucesso.',
            buttonText: 'Quero Saber Mais',
            showContent: true
        },
        {
            image: '/img/home/banner_traumatologia.png',
            mobileColor: 'bg-gradient-to-br from-cyan-900 to-gray-900',
            link: '/matricula',
            title: 'Técnico em <span class="text-secondary">RADIOLOGIA</span>',
            subtitle: 'O mercado precisa de especilistas. O ITEC forma os melhores.',
            buttonText: 'Garantir Minha Vaga',
            showContent: true
        },
        {
            image: '/img/home/banner6_new.jpeg',
            mobileColor: 'bg-gradient-to-br from-teal-900 to-gray-900',
            link: '/matricula',
            title: 'Técnico em <span class="text-secondary">ANÁLISES CLÍNICAS</span>',
            subtitle: 'Alta demanda em hospitais. Laboratórios de ponta esperando por você.',
            buttonText: 'Inscreva-se Hoje',
            showContent: true,
            isRightAligned: true
        },
        {
            image: '/img/home/banner_itec_26.png',
            mobileColor: 'bg-gradient-to-br from-purple-900 to-gray-900',
            link: '/matricula',
            title: '',
            subtitle: '',
            buttonText: 'Ver Resultado',
            showContent: false
        },
    ];

    return (
        <div className="relative w-full h-[75vh] md:h-screen overflow-hidden bg-gray-900">
            <Slider {...settings} className="h-full">
                {slides.map((slide, index) => (
                    <div key={index} className="outline-none h-[75vh] md:h-screen overflow-hidden relative">
                        <div
                            className={`relative w-full h-full flex items-center transition-transform duration-[10s] ease-linear bg-cover
                                ${!isMobile ? 'bg-center scale-100 hover:scale-105' : 'bg-top'}`}
                            style={{
                                backgroundImage: `url(${slide.image})`
                            }}
                        >
                            {/* Overlay - Keeping it light as requested */}
                            <div className="absolute inset-0 bg-black/20"></div>

                            {slide.showContent && (
                                <div className="absolute inset-0 z-10">
                                    <div className="container-custom h-full flex items-center">
                                        <div className={`w-full md:max-w-3xl pt-16 md:pt-20 px-6 md:px-0 text-white ${slide.isRightAligned ? 'md:ml-auto md:text-right' : ''}`}>
                                            {slide.subtitle && (
                                                <span className="block text-secondary font-bold tracking-widest text-xs md:text-xl uppercase mb-2 md:mb-4 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                                    {slide.subtitle}
                                                </span>
                                            )}
                                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 md:mb-8 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] opacity-0 text-shadow-lg break-words"
                                                dangerouslySetInnerHTML={{ __html: slide.title }}
                                            >
                                            </h1>

                                            <div className="animate-[fade-in-up_0.8s_ease-out_0.4s_forwards] opacity-0">
                                                <a
                                                    href={slide.link}
                                                    className="btn-primary text-sm md:text-lg !px-6 md:!px-10 !py-3 md:!py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center"
                                                >
                                                    {slide.buttonText}
                                                    <i className="fas fa-arrow-right ml-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroSlider;
