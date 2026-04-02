import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import videoTeste from '../assets/videoTeste.webm';
import hashtag from '../assets/huhui.svg';

const HeroVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Force video play on mount (helps with mobile autoplay restrictions)
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay prevented by browser:", error);
            });
        }
    }, []);

    return (
        <div className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-white flex items-center justify-center mb-10">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute w-full h-full object-cover min-w-full min-h-full"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{ objectFit: 'cover' }}
                // @ts-ignore - fetchPriority is supported but might not be in the current types
                fetchpriority="high"
            >
                <source src={videoTeste} type="video/webm" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            {/* Dark Overlay for superior legibility and depth */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content Container */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="container-custom text-center px-4 max-w-4xl pt-32 border-t-0">
                    <div className="space-y-10 md:space-y-12 animate-fade-in-up">
                        {/* Tagline / Hashtag */}
                        <div className="flex justify-center">
                            <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-md rounded-full border border-secondary/30 text-white font-bold text-xs md:text-sm tracking-widest uppercase shadow-sm">
                                Ensino que prepara, formação que transforma.
                            </span>
                        </div>

                        {/* High-Impact Headline */}
                        <h1 className="font-black text-white leading-tight tracking-tight mx-auto max-w-4xl">
                            <span className="text-5xl md:text-5xl lg:text-7xl flex items-center justify-center gap-4">
                                <img src={hashtag} alt="" className="h-[0.85em] w-auto" aria-hidden="true" />
                                Seu futuro
                            </span>
                            <span className="text-4xl md:text-5xl lg:text-6xl block opacity-95">
                                <span className="text-secondary">começa</span> aqui!
                            </span>
                        </h1>

                        {/* Persuasive Subtitle */}
                        <p className="text-xl md:text-1xl text-white/90 font-medium max-w-[400px] mx-auto leading-relaxed">
                            Ensino fundamental e médio, cursos técnicos e profissionalizantes.
                        </p>

                        {/* Conversion Buttons (CTAs) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
                            <Link
                                to="/matricula"
                                className="group bg-secondary px-12 py-5 rounded-2xl text-white font-black text-lg shadow-xl shadow-black/10 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3"
                            >
                                Quero me matricular <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                            </Link>
                            <a
                                href="#modalidades"
                                className="px-12 py-5 rounded-2xl font-black border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all text-lg backdrop-blur-sm cursor-pointer"
                            >
                                Conheça nossas modalidades
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroVideo;
