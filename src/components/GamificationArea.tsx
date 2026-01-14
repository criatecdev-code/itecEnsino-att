import React from 'react';

const GamificationArea: React.FC = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-fade-in-up">
                            <span className="text-secondary font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                                <i className="fas fa-gamepad"></i>
                                Metodologia Exclusiva
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 animate-fade-in-up delay-100">
                            Aprender nunca foi tão <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-400">Divertido e Desafiador</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed animate-fade-in-up delay-200">
                            No ITEC, utilizamos a <strong>Gamificação</strong> para engajar e motivar nossos alunos.
                            Transformamos o aprendizado em uma jornada de conquistas, onde cada atividade vale pontos
                            e desbloqueia novos níveis de conhecimento.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up delay-300">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-2xl mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-trophy"></i>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Conquistas e Recompensas</h3>
                                <p className="text-gray-500 text-sm">Ganhe medalhas e prêmios reais ao superar desafios acadêmicos.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary text-2xl mb-4 group-hover:scale-110 transition-transform">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Níveis de Evolução</h3>
                                <p className="text-gray-500 text-sm">Acompanhe seu progresso visualmente e suba de nível a cada semestre.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Content */}
                    <div className="w-full lg:w-1/2 animate-fade-in-up delay-400">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                                <img
                                    src="/img/home/img1.png"
                                    alt="Gamificação na Educação"
                                    className="w-full h-auto object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

                                {/* Floating UI Elements simulating game interface */}
                                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-white font-mono text-sm">LEVEL 12</span>
                                </div>

                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                                        <div className="flex justify-between items-end mb-2">
                                            <div>
                                                <span className="text-gray-400 text-xs uppercase tracking-wider">Próximo Nível</span>
                                                <div className="text-white font-bold">Mestre da Robótica</div>
                                            </div>
                                            <span className="text-secondary font-bold">85%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-secondary to-green-400 w-[85%] relative">
                                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Floating Icon */}
                            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-br from-secondary to-orange-600 rounded-2xl rotate-12 flex items-center justify-center text-4xl text-white shadow-lg shadow-orange-500/30 animate-bounce hover:rotate-0 transition-transform">
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GamificationArea;
