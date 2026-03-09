import React from 'react';
import { Link } from 'react-router-dom';

const AboutAreaTwo: React.FC = () => {
    return (
        <div className="py-24 bg-gray-900 relative overflow-hidden text-white">
            {/* Background & Overlays */}
            <div className="absolute inset-0 bg-[url('/img/home/sucesso.png')] bg-cover bg-fixed bg-center opacity-[0.07] mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/98 to-gray-900/80"></div>

            {/* Mesh Gradient Shapes - Reduced Opacity */}
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 -left-32 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-secondary font-bold text-xs tracking-[0.3em] uppercase backdrop-blur-xl shadow-2xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Carreira & sucesso
                        </div>

                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white tracking-tight">
                            Dê o próximo passo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-green-400 to-secondary animate-gradient-x">
                                rumo ao sucesso!
                            </span>
                        </h3>

                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
                            <p className="text-xl text-gray-300 leading-relaxed font-light pl-8 max-w-xl italic">
                                Já transformamos a vida de milhares de alunos. Somos a <span className="text-white font-semibold">referência número 1</span> que você precisa para alavancar sua carreira com <span className="text-secondary font-medium">ensino regular, técnico e profissionalizante</span> de excelência.
                            </p>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row gap-5">
                            <Link to="/matricula" className="btn-primary !bg-secondary !text-white px-10 py-5 rounded-xl">
                                <span className="font-bold">Quero me matricular</span>
                                <i className="fas fa-rocket ml-2"></i>
                            </Link>
                            <Link to="/cursos/tecnico" className="px-10 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all font-bold tracking-wide flex items-center justify-center gap-3">
                                <i className="fas fa-th-large text-secondary"></i>
                                <span>Ver cursos</span>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Column */}
                    <div className="w-full lg:w-5/12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                            {/* Decorative line behind cards */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 blur-[80px] -z-10 rounded-full"></div>

                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-secondary transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <i className="fas fa-user-graduate text-5xl"></i>
                                </div>
                                <div className="text-5xl font-black text-white mb-3 group-hover:text-secondary transition-colors">+5.000</div>
                                <div className="text-xs text-gray-400 tracking-[0.2em] font-bold uppercase">Alunos formados</div>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-secondary transition-all duration-500 group sm:mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <i className="fas fa-history text-5xl"></i>
                                </div>
                                <div className="text-5xl font-black text-white mb-3 group-hover:text-secondary transition-colors">15 anos</div>
                                <div className="text-xs text-gray-400 tracking-[0.2em] font-bold uppercase">De tradição</div>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-secondary transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <i className="fas fa-star text-5xl"></i>
                                </div>
                                <div className="text-5xl font-black text-white mb-3 group-hover:text-secondary transition-colors">100%</div>
                                <div className="text-xs text-gray-400 tracking-[0.2em] font-bold uppercase">Professores Experts</div>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-secondary transition-all duration-500 group sm:mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <i className="fas fa-award text-5xl"></i>
                                </div>
                                <div className="text-5xl font-black text-white mb-3 group-hover:text-secondary transition-colors">Top 1</div>
                                <div className="text-xs text-gray-400 tracking-[0.2em] font-bold uppercase">Escola da região</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutAreaTwo;
