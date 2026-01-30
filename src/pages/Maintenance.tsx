import React from 'react';


const Maintenance: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">

                {/* Content Section */}
                <div className="flex-1 text-center md:text-left space-y-6 max-w-2xl mx-auto md:mx-0">
                    {/* Logo */}
                    <img
                        src={`${import.meta.env.BASE_URL}img/logo/logo.png`}
                        alt="ITEC Ensino"
                        className="h-12 md:h-16 mb-4 mx-auto md:mx-0"
                    />

                    {/* Main Heading */}
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
                            Evoluindo para <br className="hidden md:block" />
                            <span className="text-primary">Transformar</span>
                        </h1>
                    </div>

                    {/* Subtitle/Message */}
                    <p className="text-lg text-gray-600 leading-relaxed" style={{ textWrap: 'pretty' }}>
                        O portal da ITEC Ensino está passando por uma reformulação estratégica completa.
                        Estamos implementando novas tecnologias para oferecer uma experiência educacional
                        ainda mais conectada, intuitiva e eficiente.
                    </p>

                    {/* Call to Action / Info */}
                    <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm w-full">
                        <p className="text-gray-700 font-medium mb-4">
                            Nossos sistemas continuam operando normalmente:
                        </p>
                        <div className="flex flex-col gap-4 justify-center md:justify-start">
                            <a
                                href="https://www.itecqualificacao.com.br/campus/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full sm:w-auto px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-1 text-sm md:text-base text-center"
                            >
                                Cursos Profissionalizantes <i className="fas fa-external-link-alt ml-2"></i>
                            </a>
                            <a
                                href="https://portal.selsensino.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full sm:w-auto px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-1 text-sm md:text-base text-center"
                            >
                                Cursos Técnicos <i className="fas fa-external-link-alt ml-2"></i>
                            </a>
                            <a
                                href="https://meuestagio.app.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 rounded-full font-bold bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all transform hover:-translate-y-1 text-center"
                            >
                                Meu Estágio <i className="fas fa-external-link-alt ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mascot Section */}
                <div className="flex-1 flex justify-center animate-float">
                    <img
                        src={`${import.meta.env.BASE_URL}mascot.png`}
                        alt="Mascote ZEK - Evoluindo para Transformar"
                        className="w-48 md:w-64 lg:w-72 h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
