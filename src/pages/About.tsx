import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Header / Breadcrumb Area - Premium Dark Style */}
            <div className="relative py-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-black mb-4 animate-fade-in-up">Sobre Nós</h1>
                    <div className="flex justify-center items-center gap-2 text-sm uppercase tracking-widest text-gray-400 animate-fade-in-up delay-100">
                        <a href="/" className="hover:text-white transition-colors">Início</a>
                        <span className="text-secondary">•</span>
                        <span className="text-white">Sobre Nós</span>
                    </div>
                </div>
            </div>

            {/* Main Content - History & Context */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                                <span className="w-12 h-[2px] bg-secondary"></span>
                                Nossa História
                            </span>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                                Transformando vidas através da <span className="text-primary relative">Educação <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/20 -z-10 rounded-full"></span></span> desde 2009.
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                                <p>
                                    O <strong>ITEC Ensino Técnico</strong>, também conhecido como Instituto Tecnológico de Capacitação, nasceu com o propósito de suprir a demanda por qualificação profissional de excelência na região Sul Fluminense.
                                </p>
                                <p>
                                    Fundado em Volta Redonda (RJ), o ITEC rapidamente se destacou pela metodologia inovadora que une teoria à prática intensiva. Hoje, com unidades em Resende, Barra Mansa e Angra dos Reis, somos referência absoluta em ensino técnico e profissionalizante.
                                </p>
                                <p>
                                    Nestes mais de 15 anos de história, já formamos mais de 4 mil alunos, entregando ao mercado profissionais éticos, competentes e preparados para os desafios reais da indústria e do setor de serviços.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <img src="/img/home/img1.png" alt="Instalações ITEC" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values - Glass Cards */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Identidade ITEC</span>
                        <h2 className="text-4xl font-black text-gray-900">Nossa Essência</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-primary group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Contribuir para o desenvolvimento da sociedade oferecendo educação de excelência em diversas áreas do conhecimento e promovendo inovação contínua.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-secondary group">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-secondary text-3xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Ser reconhecido como o principal polo de educação profissional e tecnológica do Sul Fluminense, formando profissionais preparados para a indústria 4.0.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-purple-500 group">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-3xl mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <i className="fas fa-gem"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                            <ul className="space-y-2 text-gray-600 text-left">
                                <li className="flex items-center gap-2"><i className="fas fa-check text-purple-500 text-xs"></i> Qualidade Acadêmica</li>
                                <li className="flex items-center gap-2"><i className="fas fa-check text-purple-500 text-xs"></i> Inovação & Tecnologia</li>
                                <li className="flex items-center gap-2"><i className="fas fa-check text-purple-500 text-xs"></i> Ética e Responsabilidade</li>
                                <li className="flex items-center gap-2"><i className="fas fa-check text-purple-500 text-xs"></i> Empregabilidade Focada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
