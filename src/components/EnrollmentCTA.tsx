import React from 'react';

const EnrollmentCTA: React.FC = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with Overlay */}
            {/* Custom Background */}
            <div className="absolute inset-0 z-0 bg-primary">
                {/* Subtle Texture overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/img/pattern/map.png')] bg-center scale-150"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-white">
                        <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-fade-in-up">
                            <span className="text-secondary font-bold text-sm tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                Matrículas abertas 2026
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up delay-100 text-white">
                            O futuro que você sonha <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">começa aqui.</span>
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl animate-fade-in-up delay-200">
                            Não perca a oportunidade de estudar na instituição que é referência em ensino regular, técnico e profissionalizante. Condições especiais para matrículas antecipadas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <a href="/matricula" className="btn-primary !bg-secondary !text-white px-10 py-4 !rounded-xl">
                                Garantir minha vaga
                            </a>
                            <a href="https://wa.me/552435120102" target="_blank" rel="noreferrer" className="px-10 py-4 rounded-xl border-2 border-white/20 hover:bg-white hover:text-primary font-bold text-lg transition-all text-center flex items-center justify-center gap-2">
                                <i className="fab fa-whatsapp"></i> Falar com consultor
                            </a>
                        </div>

                    </div>

                    {/* Visual/Card Column */}
                    <div className="w-full lg:w-5/12 animate-fade-in-up delay-500">
                        <div className="relative">
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-white">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                                        <i className="fas fa-star text-white"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black mb-1 text-white uppercase tracking-tight">Vantagens ITEC</h3>
                                        <p className="text-white/70 text-sm font-medium">
                                            Transformando vidas através da educação.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-black text-xs">01</div>
                                        <div>
                                            <h4 className="font-bold text-sm text-white">Gamificação</h4>
                                            <p className="text-xs text-white/60">Aprenda com desafios e recompensas</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-black text-xs">02</div>
                                        <div>
                                            <h4 className="font-bold text-sm text-white">Metodologia ativa</h4>
                                            <p className="text-xs text-white/60">O aluno como protagonista</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                                        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-black text-xs">03</div>
                                        <div>
                                            <h4 className="font-bold text-sm text-white">Qualificação real</h4>
                                            <p className="text-xs text-white/60">Alinhada com o mercado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EnrollmentCTA;
