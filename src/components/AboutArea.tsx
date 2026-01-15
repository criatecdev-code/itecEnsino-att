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
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 transform transition-transform duration-700 hover:scale-[1.02]">
                            <img className="w-full h-auto object-cover" src="/img/home/sobrenos.png" alt="Alunos ITEC" />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Decorative floating element */}
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 max-w-xs hidden md:block animate-fade-in-up border border-white/50">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-green-100/50 rounded-full flex items-center justify-center text-green-600 text-2xl shadow-sm">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg leading-tight">Certificado Válido</p>
                                    <p className="text-sm text-gray-500 font-medium">Reconhecido pelo MEC</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                            <span className="w-12 h-[2px] bg-secondary"></span>
                            Sobre Nós
                        </span>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
                            A sua melhor escolha <br />
                            é o <span className="text-primary relative inline-block">
                                ITEC
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/20 -z-10 rounded-full"></span>
                            </span>
                        </h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Além de te preparar para o mercado com o <strong className="text-gray-900">melhor custo benefício</strong>, no Ensino Regular (Fundamental + Médio)
                                trabalhamos a <span className="text-secondary font-bold">educação empreendedora</span>, possibilitando mais protagonismo e visão de futuro.
                            </p>
                            <p>
                                No Ensino Técnico, somos comprometidos com a prática. Inserimos nossos alunos em campos
                                de estágio reais para garantir a entrada no mercado de trabalho com confiança e excelência.
                            </p>
                        </div>

                        <div className="pt-10 flex flex-wrap gap-4">
                            <a className="btn-primary" href="/sobrenos">
                                Conheça Nossa História
                            </a>
                            <a className="btn-secondary !bg-white !text-secondary border-2 border-secondary hover:!bg-secondary hover:!text-white shadow-none hover:shadow-lg" href="/contato">
                                Fale Conosco
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;
