import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Fundamental2Detail: React.FC = () => {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Helmet>
                <title>Ensino Fundamental II | ITEC Ensino</title>
                <meta name="description" content="O Ensino Fundamental II no ITEC prepara o aluno para os desafios do futuro com uma base acadêmica sólida, pensamento crítico e protagonismo." />
            </Helmet>

            {/* Premium Hero Section with User Image */}
            <div className="relative py-32 lg:py-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/img/courses/fundamental2.png"
                        alt="Ensino Fundamental II"
                        className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/80 to-secondary/70 mix-blend-multiply"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

                <div className="container-custom relative z-10 text-center text-white">
                    <div className="flex justify-center mb-8 animate-fade-in-up">
                        <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-secondary font-bold tracking-[0.2em] uppercase shadow-lg transform hover:scale-105 transition-transform duration-300">
                            6º ao 9º Ano
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white animate-fade-in-up delay-100 uppercase">
                        Fundamental <span className="text-secondary">II</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        Fortalecendo competências, estimulando o pensamento crítico e preparando o jovem para os novos desafios acadêmicos.
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="relative -mt-4 md:-mt-8 z-30 container-custom">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-white/50 bg-gray-900/50 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-white/10 mx-auto lg:mx-0">
                    <Link to="/" className="hover:text-white transition-colors">Início</Link>
                    <span className="text-secondary">•</span>
                    <Link to="/cursos/fundamental" className="hover:text-white transition-colors">Ensino Fundamental</Link>
                    <span className="text-secondary">•</span>
                    <span className="text-white font-medium">Fundamental II</span>
                </div>
            </div>

            {/* Main Content - Pillars Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div className="space-y-8 animate-fade-in-up">
                            <div>
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                                    <span className="w-12 h-[2px] bg-secondary"></span>
                                    Foco Acadêmico
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    Desenvolvimento do <br />
                                    <span className="text-primary relative inline-block">
                                        Protagonismo
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-left md:text-justify border-l-2 md:border-l-4 border-gray-100 pl-4 md:pl-8 font-medium">
                                <p>
                                    No Ensino Fundamental II, ampliamos os horizontes dos nossos alunos, incentivando a curiosidade intelectual e a autonomia nos estudos.
                                </p>
                                <p>
                                    Nossa metodologia foca na transição para uma rotina de estudos mais complexa, garantindo que o estudante desenvolva habilidades fundamentais de raciocínio lógico, interpretação e escrita.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                {[
                                    'Corpo docente qualificado',
                                    'Laboratórios de ponta',
                                    'Foco no ENEM e Concursos',
                                    'Acompanhamento individualizado',
                                    'Projetos Interdisciplinares',
                                    'Ambiente seguro e moderno'
                                ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-50 group hover:border-primary/20 transition-all">
                                        <i className="fas fa-check-circle text-primary group-hover:scale-110 transition-transform"></i>
                                        <span className="text-gray-700 font-bold text-sm tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group animate-fade-in-up delay-200">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-primary via-secondary to-primary rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="/img/courses/fundamental2.png"
                                    alt="Estudante Fundamental II"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-12">
                        Pronto para o <span className="text-secondary">Próximo Nível?</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
                        Venha conhecer nossa estrutura e nossa proposta pedagógica diferenciada para os anos finais do Ensino Fundamental.
                    </p>
                    <a
                        href="https://wa.me/5524974003287?text=Olá, gostaria de saber mais sobre o Ensino Fundamental II"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-primary hover:bg-secondary text-white font-black py-6 px-12 rounded-full text-xl md:text-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                    >
                        <i className="fab fa-whatsapp text-3xl transition-transform group-hover:scale-110"></i>
                        Fale com um consultor
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Fundamental2Detail;
