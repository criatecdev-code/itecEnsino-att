import { Link } from 'react-router-dom';
import videoTeste from '../assets/videoTeste.webm';

const HeroVideo: React.FC = () => {
    return (
        <div className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-gray-900 flex items-center justify-center">
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
                fetchPriority="high"
            >
                <source src={videoTeste} type="video/webm" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            {/* Dark Overlay for superior legibility and depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>

            {/* Content Container */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="container-custom text-center px-4 max-w-4xl pt-40 md:pt-52">
                    <div className="space-y-6 md:space-y-8 animate-fade-in-up">
                        {/* High-Impact Headline */}
                        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight filter drop-shadow-2xl">
                            Sua carreira de <span className="text-secondary">sucesso</span> começa no ITEC
                        </h1>

                        {/* Persuasive Subtitle */}
                        <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed filter drop-shadow-lg">
                            Do Ensino Fundamental ao Técnico: Formação de excelência focada no mercado de trabalho e no seu futuro.
                        </p>

                        {/* Conversion Buttons (CTAs) */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                to="/matricula"
                                className="group relative w-full sm:w-auto overflow-hidden bg-secondary px-10 py-5 rounded-2xl text-white font-black text-lg shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-1 transition-all active:scale-95"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Quero me Matricular <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </Link>

                            <Link
                                to="/cursos"
                                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 px-10 py-5 rounded-2xl text-white font-black text-lg hover:bg-white hover:text-primary hover:border-white transition-all active:scale-95"
                            >
                                Conheça nossos Cursos
                            </Link>
                        </div>

                        {/* Trust Indicator / Social Proof (Simplified) */}
                        <div className="pt-8 flex items-center justify-center gap-8 opacity-70">
                            <div className="flex items-center gap-2 text-white">
                                <i className="fas fa-check-circle text-secondary"></i>
                                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Cursos Reconhecidos</span>
                            </div>
                            <div className="flex items-center gap-2 text-white border-l border-white/20 pl-8">
                                <i className="fas fa-star text-yellow-400"></i>
                                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Líder em Educação</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Polish: Bottom Gradient Fade for Section Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
    );
};

export default HeroVideo;
