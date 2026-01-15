import React from 'react';
import { Link } from 'react-router-dom';

const AboutAreaTwo: React.FC = () => {
    return (
        <div className="py-24 bg-gray-900 relative overflow-hidden text-white">
            {/* Background & Overlays */}
            <div className="absolute inset-0 bg-[url('/img/home/sucesso.png')] bg-cover bg-fixed bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/40"></div>

            {/* Animated Gradient Accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-secondary font-bold text-sm uppercase tracking-widest backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            Carreira & Sucesso
                        </div>

                        <h3 className="text-5xl md:text-6xl font-black leading-tight">
                            Dê o próximo passo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">
                                RUMO AO SUCESSO!
                            </span>
                        </h3>

                        <p className="text-lg text-gray-400 leading-relaxed font-light border-l-4 border-secondary pl-6">
                            Com <strong className="text-white">15 anos de história</strong>, já transformamos a vida de milhares de alunos. Somos a referência que você precisa para alavancar sua carreira com ensino técnico e profissionalizante de excelência.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Link to="/matricula" className="group btn-secondary px-8 py-4 text-lg shadow-xl shadow-green-900/20 flex items-center justify-center gap-3">
                                <span>Quero me Matricular</span>
                                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </Link>
                            <Link to="/cursos/tecnico" className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 hover:border-secondary/50 transition-all font-bold tracking-wide flex items-center justify-center gap-3">
                                <i className="fas fa-search"></i> Ver Cursos
                            </Link>
                        </div>
                    </div>

                    {/* Stats Column */}
                    <div className="w-full lg:w-5/12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-secondary/50 transition-colors group">
                                <div className="text-4xl font-black text-white mb-2 group-hover:text-secondary transition-colors">+5.000</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Alunos Formados</div>
                            </div>

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-secondary/50 transition-colors group mt-0 sm:mt-12">
                                <div className="text-4xl font-black text-white mb-2 group-hover:text-secondary transition-colors">15 Anos</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">De Tradição</div>
                            </div>

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-secondary/50 transition-colors group">
                                <div className="text-4xl font-black text-white mb-2 group-hover:text-secondary transition-colors">100%</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Professores Qualificados</div>
                            </div>

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-secondary/50 transition-colors group mt-0 sm:mt-12">
                                <div className="text-4xl font-black text-white mb-2 group-hover:text-secondary transition-colors">Top 1</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Na Região</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutAreaTwo;
