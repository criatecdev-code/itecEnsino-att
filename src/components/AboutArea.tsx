import React from 'react';

const AboutArea: React.FC = () => {
    return (
        <div className="section-padding bg-white overflow-hidden relative">
            {/* Soft background shape */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 transform origin-top translate-x-1/2 -z-10"></div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl shadow-black/5 transform transition-transform duration-700 hover:scale-[1.01]">
                            <img className="w-full h-auto object-cover" src="/img/home/sobrenos.png" alt="Alunos ITEC" loading="lazy" />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-secondary font-bold tracking-[0.2em] text-sm mb-4 block flex items-center gap-2">
                            <span className="w-12 h-[2px] bg-secondary"></span>
                            Sobre nós
                        </span>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            A sua melhor escolha <br />
                            é o <span className="text-primary">ITEC</span>
                        </h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Com mais de <strong className="text-gray-900">15 anos de história</strong> transformando vidas através da educação,
                                o ITEC nasceu em Volta Redonda e se tornou o <span className="text-secondary font-bold">maior polo de ensino regular, técnico e profissionalizante</span> do Sul Fluminense.
                            </p>
                            <p>
                                Nossa trajetória é marcada pela inovação e pelo compromisso contínuo com a excelência. Unindo teoria à prática intensiva,
                                preparamos nossos alunos para os desafios reais do mercado de trabalho.
                            </p>
                        </div>

                        <div className="pt-10 flex flex-wrap gap-4">
                            <a className="btn-primary" href="/sobrenos">
                                Conheça nossa história
                            </a>
                            <a className="btn-secondary !bg-white !text-secondary border-2 border-secondary hover:!bg-secondary hover:!text-white shadow-none hover:shadow-lg" href="/contato">
                                Fale conosco
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;
