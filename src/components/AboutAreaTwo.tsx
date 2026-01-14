import React from 'react';

const AboutAreaTwo: React.FC = () => {
    return (
        <div className="section-padding bg-gray-900 relative overflow-hidden text-white">
            {/* Background Image with heavy overlay */}
            <div className="absolute inset-0 bg-[url('/img/home/sucesso.png')] bg-cover bg-fixed bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-secondary font-bold text-sm uppercase tracking-wider mb-6">
                            Carreira & Sucesso
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-8">
                            Dê o próximo passo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-300">RUMO AO SUCESSO!</span>
                        </h3>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-xl mb-10 font-light">
                            Com <strong>15 anos de história</strong>, já formamos mais de cinco mil alunos. Somos referência em ensino técnico e profissionalizante na região.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a className="btn-secondary text-center px-10 py-4 text-lg shadow-lg shadow-green-900/30 ring-2 ring-white/10 hover:ring-white/30" href="/matricula">
                                Quero me Matricular
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAreaTwo;
