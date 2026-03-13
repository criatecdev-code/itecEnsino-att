import { Link } from 'react-router-dom';
import videoTeste from '../assets/videoTeste.webm';

const HeroVideo: React.FC = () => {
    return (
        <div className="relative w-full min-h-[600px] md:min-h-screen lg:h-screen overflow-hidden bg-white flex items-center justify-center">
            {/* Video Background */}
            <video
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
                <div className="container-custom text-center px-4 max-w-4xl pt-28 border-t-0">
                    <div className="space-y-6 md:space-y-8 animate-fade-in-up">
                        {/* High-Impact Headline */}
                        <h1 className="font-black text-white leading-tight tracking-tight mx-auto max-w-4xl">
                            <span className="text-5xl md:text-5xl lg:text-7xl block">Seu futuro</span>
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
                            <Link
                                to="/cursos"
                                className="px-12 py-5 rounded-2xl font-black border-2 border-white/30 text-white hover:bg-white hover:text-primary transition-all text-lg backdrop-blur-sm"
                            >
                                Conhecer cursos
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Visual Polish: Bottom Gradient Fade for Section Transition - Subtle */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        </div>
    );
};

export default HeroVideo;
