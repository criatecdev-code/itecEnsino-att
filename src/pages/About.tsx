import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
    return (
        <div className="bg-gray-50 flex flex-col">
            <Helmet>
                <title>Sobre Nós | ITEC Ensino - Nossa História e Missão</title>
                <meta name="description" content="Conheça a história do ITEC Ensino, nossa missão de transformar vidas através da educação e o compromisso com a formação profissional de excelência." />
            </Helmet>
            {/* New Hero Section */}
            <div className="relative py-32 lg:py-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/90 to-secondary/80 mix-blend-multiply"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

                <div className="container-custom relative z-10 text-center text-white">
                    <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-secondary font-bold tracking-[0.2em] uppercase mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        Quem Somos
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">
                        Formando o Futuro <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">
                            com Excelência Técnica
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Há mais de 15 anos transformando vidas através da educação. Somos o maior polo de ensino técnico e profissionalizante do Sul Fluminense.
                    </p>
                </div>
            </div>

            {/* Statistics Section - Floating Cards */}
            <div className="relative -mt-20 z-20 container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: '15+', label: 'Anos de História', icon: 'fas fa-history' },
                        { number: '4mil+', label: 'Alunos Formados', icon: 'fas fa-user-graduate' },
                        { number: '3', label: 'Unidades', icon: 'fas fa-map-marker-alt' },
                        { number: '95%', label: 'Empregabilidade', icon: 'fas fa-briefcase' },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 text-center hover:-translate-y-2 transition-transform duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <i className={stat.icon}></i>
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-2">{stat.number}</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content - History & Context */}
            <section className="py-32">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 space-y-8">
                            <div>
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                                    <span className="w-12 h-[2px] bg-secondary"></span>
                                    Nossa Trajetória
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    Uma história de <br />
                                    <span className="text-primary relative inline-block">
                                        inovação e sucesso
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify border-l-4 border-gray-100 pl-8">
                                <p>
                                    O <strong>ITEC Ensino Técnico</strong>, também conhecido como Instituto Tecnológico de Capacitação, nasceu com o propósito audacioso de suprir a demanda por qualificação profissional de excelência na região Sul Fluminense.
                                </p>
                                <p>
                                    Fundado em Volta Redonda (RJ), o ITEC rapidamente se destacou pela metodologia inovadora que une teoria à prática intensiva. Hoje, com unidades em <strong>Resende, Barra Mansa e Angra dos Reis</strong>, somos referência absoluta em ensino técnico e profissionalizante.
                                </p>
                                <p>
                                    Entregamos ao mercado profissionais éticos, competentes e preparados para os desafios reais da indústria e do setor de serviços, moldando o futuro através do conhecimento.
                                </p>
                            </div>

                            <a href="/matricula" className="inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/30 group">
                                Venha fazer parte dessa história
                                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                            </a>
                        </div>

                        <div className="order-1 lg:order-2 relative group perspective-1000">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-primary via-secondary to-primary rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700 animate-pulse"></div>

                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform group-hover:rotate-y-2 transition-transform duration-700">
                                <img src="/img/home/img1.png" alt="Instalações ITEC" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />

                                {/* Image Overlay Card */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Infraestrutura Moderníssima</p>
                                            <p className="text-sm text-gray-600">Laboratórios equipados para aulas práticas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose ITEC Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Diferenciais</span>
                        <h2 className="text-4xl font-black text-gray-900">Por que escolher o ITEC?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Card 1 */}
                        <div id="corpo-docente" className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-4xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professores Especialistas</h3>
                            <p className="text-gray-600">
                                Nosso corpo docente é formado por profissionais atuantes no mercado, trazendo a realidade da profissão para a sala de aula.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div id="infraestrutura" className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-secondary/10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-secondary/10"></div>
                            <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-4xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecnologia de Ponta</h3>
                            <p className="text-gray-600">
                                Ambientes virtuais de aprendizagem, laboratórios de informática modernos e equipamentos atualizados.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-10 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-purple-500/10"></div>
                            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-4xl mb-8 group-hover:scale-110 transition-transform duration-300">
                                <i className="fas fa-certificate"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificação Reconhecida</h3>
                            <p className="text-gray-600">
                                Diplomas válidos em todo território nacional, abrindo portas para concursos e grandes empresas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission, Vision, Values - Glass Cards */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-gray-50 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Identidade ITEC</span>
                        <h2 className="text-4xl font-black text-gray-900">Nossa Essência</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-gray-50 p-10 rounded-3xl shadow-none hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Contribuir para o desenvolvimento da sociedade oferecendo educação de excelência em diversas áreas do conhecimento e promovendo inovação contínua.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gray-50 p-10 rounded-3xl shadow-none hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary text-3xl mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Ser reconhecido como o principal polo de educação profissional e tecnológica do Sul Fluminense, formando profissionais preparados para a indústria 4.0.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-gray-50 p-10 rounded-3xl shadow-none hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-purple-600 text-3xl mb-6 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <i className="fas fa-gem"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                            <ul className="space-y-3 text-gray-600 text-left text-sm">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Qualidade Acadêmica</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Inovação & Tecnologia</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Ética e Responsabilidade</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Empregabilidade Focada</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
