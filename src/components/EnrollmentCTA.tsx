import React from 'react';

const EnrollmentCTA: React.FC = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with Overlay */}
            {/* Custom Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-[#051c3b] to-[#0a2e5c]">
                {/* Abstract Shapes for Texture */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 opacity-40"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2 text-white">
                        <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm animate-fade-in-up">
                            <span className="text-secondary font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                Matrículas Abertas 2026
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-fade-in-up delay-100 text-white">
                            O futuro que você sonha <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">começa aqui.</span>
                        </h2>

                        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl animate-fade-in-up delay-200">
                            Não perca a oportunidade de estudar na instituição que é referência em ensino técnico e profissionalizante. Condições especiais para matrículas antecipadas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <a href="/matricula" className="btn-primary text-center px-10 py-4 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 !rounded-xl transform hover:-translate-y-1 transition-all">
                                Garantir minha Vaga
                            </a>
                            <a href="https://wa.me/5524974003287" target="_blank" rel="noreferrer" className="px-10 py-4 rounded-xl border-2 border-white/20 hover:bg-white/10 text-white font-bold text-lg transition-all text-center flex items-center justify-center gap-2">
                                <i className="fab fa-whatsapp"></i> Falar com Consultor
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-medium text-gray-400 animate-fade-in-up delay-400">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-secondary text-lg"></i>
                                <span>Material Incluso</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-secondary text-lg"></i>
                                <span>Bolsas de até 50%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-secondary text-lg"></i>
                                <span>Certificado Reconhecido</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Card Column */}
                    <div className="w-full lg:w-5/12 animate-fade-in-up delay-500">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary to-primary rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 shadow-lg">
                                        <i className="fas fa-user-graduate text-2xl text-white"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Por que escolher o ITEC?</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            Mais de 15 anos transformando vidas através da educação de qualidade.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-gray-900/50 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-gray-900/70 transition-colors cursor-default">
                                        <span className="text-2xl font-black text-secondary">01</span>
                                        <div>
                                            <h4 className="font-bold text-sm">Metodologia Prática</h4>
                                            <p className="text-xs text-gray-400">Aprenda fazendo em laboratórios reais</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900/50 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-gray-900/70 transition-colors cursor-default">
                                        <span className="text-2xl font-black text-secondary">02</span>
                                        <div>
                                            <h4 className="font-bold text-sm">Alta Empregabilidade</h4>
                                            <p className="text-xs text-gray-400">Parcerias com grandes empresas</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-900/50 rounded-xl p-4 flex items-center gap-4 border border-white/5 hover:bg-gray-900/70 transition-colors cursor-default">
                                        <span className="text-2xl font-black text-secondary">03</span>
                                        <div>
                                            <h4 className="font-bold text-sm">Professores Experts</h4>
                                            <p className="text-xs text-gray-400">Profissionais atuantes no mercado</p>
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
