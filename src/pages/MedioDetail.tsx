import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MedioDetail: React.FC = () => {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Helmet>
                <title>Ensino Médio | ITEC Ensino - Preparação para o Futuro</title>
                <meta name="description" content="Conheça o Novo Ensino Médio no ITEC. Preparação para o ENEM, cursos técnicos integrados, material SAE Digital e foco no protagonismo do aluno." />
            </Helmet>

            {/* Premium Hero Section */}
            <div className="relative py-32 lg:py-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/90 to-secondary/80 mix-blend-multiply"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

                <div className="container-custom relative z-10 text-center text-white">
                    <div className="flex justify-center mb-8 animate-fade-in-up">
                        <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-secondary font-bold tracking-[0.2em] uppercase shadow-lg transform hover:scale-105 transition-transform duration-300">
                            Ensino Médio
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-white animate-fade-in-up delay-100">
                        Ensino <span className="text-secondary">Médio</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        Formação de excelência para os desafios do futuro, unindo conhecimento acadêmico, tecnologia e profissionalização.
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="relative -mt-4 md:-mt-8 z-30 container-custom">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-white/50 bg-gray-900/50 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-white/10 mx-auto lg:mx-0">
                    <Link to="/" className="hover:text-white transition-colors">Início</Link>
                    <span className="text-secondary">•</span>
                    <Link to="/cursos/medio" className="hover:text-white transition-colors">Ensino Médio</Link>
                    <span className="text-secondary">•</span>
                    <span className="text-white font-medium">Detalhes</span>
                </div>
            </div>

            {/* Methodology & Differentials */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="space-y-8 animate-fade-in-up">
                            <div>
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                                    <span className="w-12 h-[2px] bg-secondary"></span>
                                    Nossa Proposta
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                    Metodologia <br />
                                    <span className="text-primary">Inovadora e Maker</span>
                                </h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Atuamos há mais de 15 anos com um ensino inovador e construtivista, onde o estudante é o foco. Promovemos a autonomia e o protagonismo, preparando alunos proativos, criativos e colaborativos para um futuro em constante movimento.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Aulas Dinâmicas & Projetos",
                                    "Sala de Aula Invertida",
                                    "Pensamento Crítico",
                                    "Habilidades Socioemocionais",
                                    "Cultura Digital (Maker)",
                                    "Robótica Educacional"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                        <i className="fas fa-check-circle text-secondary"></i>
                                        <span className="text-gray-700 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group perspective-1000">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-primary via-secondary to-primary rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700 animate-pulse"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform duration-700">
                                <img src="/img/home/medio.png" alt="Ensino Médio ITEC" className="w-full h-full object-cover" />
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                                            <i className="fas fa-rocket"></i>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Transformando Vidas</p>
                                            <p className="text-sm text-gray-600">Educação focada no mercado e universidades.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure & Support Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                <i className="fas fa-building"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estrutura Premium</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Salas climatizadas com TV e WI-FI, ambiente monitorado 24h e laboratórios com equipamentos simuladores e peças anatômicas.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border-2 border-secondary/10 group transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-secondary text-3xl mb-6 transition-colors group-hover:bg-secondary group-hover:text-white">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Apoio Psicopedagógico</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Equipe com psicopedagogas especialistas em TEA para suporte individualizado aos alunos com dificuldades de aprendizagem.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-3xl mb-6 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança & App</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Seguro estudantil incluso e App inovador para acompanhar a vida escolar do estudante em tempo real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey by Series */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">A Jornada</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Evolução por <span className="text-secondary">Série</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[
                            {
                                serie: "1ª Série",
                                focus: "Vocacional & Adaptação",
                                items: ["Teste vocacional personalizado", "Escolha do curso profissionalizante", "Plano de estudos individualizado", "Primeiros simulados ENEM"],
                                icon: "fas fa-compass"
                            },
                            {
                                serie: "2ª Série",
                                focus: "Técnico & Intensificação",
                                items: ["Início do curso técnico (opcional)", "Enfermagem ou Análises Clínicas", "Intensificação preparatória ENEM", "Projetos práticos reais"],
                                icon: "fas fa-tools",
                                highlighted: true
                            },
                            {
                                serie: "3ª Série",
                                focus: "Foco Total no Futuro",
                                items: ["Continuidade do curso técnico", "Intensivo ENEM e Vestibulares", "Mentorias de definição de carreira", "Estágios supervisionados"],
                                icon: "fas fa-user-graduate"
                            }
                        ].map((card, i) => (
                            <div key={i} className={`p-10 rounded-[3rem] transition-all duration-500 border-2 ${card.highlighted ? 'bg-primary border-primary shadow-2xl shadow-primary/30 transform hover:scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${card.highlighted ? 'bg-white text-primary' : 'bg-white/10 text-secondary'}`}>
                                    <i className={card.icon}></i>
                                </div>
                                <h3 className={`text-3xl font-black mb-2 ${card.highlighted ? 'text-white' : 'text-white'}`}>{card.serie}</h3>
                                <p className={`font-bold mb-8 tracking-wider uppercase text-sm ${card.highlighted ? 'text-white/80' : 'text-secondary'}`}>{card.focus}</p>
                                <ul className="space-y-4">
                                    {card.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <i className={`fas fa-caret-right mt-1 ${card.highlighted ? 'text-white' : 'text-secondary'}`}></i>
                                            <span className={`text-sm leading-relaxed ${card.highlighted ? 'text-white' : 'text-gray-300'}`}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SAE Digital Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="bg-gray-50 rounded-[3.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 border border-gray-100 shadow-sm">
                        <div className="w-full lg:w-1/2 space-y-8">
                            <img src="https://saedigital.com.br/wp-content/uploads/2021/10/logo-sae-digital.png" alt="SAE Digital" className="h-16 w-auto grayscale opacity-50 mb-8" />
                            <h2 className="text-4xl font-black text-gray-900 leading-tight">
                                Material Didático <br />
                                <span className="text-primary text-nowrap">SAE DIGITAL</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Alinhado à BNCC, o SAE Digital foca na autonomia do estudante. Oferece preparação completa para o ENEM através de tecnologias educacionais totalmente integradas ao material impresso.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Aulas com vídeos e animações 3D",
                                    "Recursos interativos de aprendizado",
                                    "Simulados com correção TRI",
                                    "Plataforma digital integrada"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-700 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
                                <h4 className="text-primary font-black text-2xl mb-4">Horários</h4>
                                <p className="text-gray-600 text-sm font-medium mb-2">1ª e 2ª Séries:</p>
                                <p className="text-gray-900 font-bold mb-4">7h às 12:20</p>
                                <p className="text-gray-600 text-sm font-medium mb-2">3ª Série:</p>
                                <p className="text-gray-900 font-bold">7h às 12:20</p>
                                <p className="text-gray-500 text-xs mt-1">+ Aula à tarde (1x por semana)</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
                                <i className="fas fa-shopping-cart text-secondary text-3xl mb-6"></i>
                                <h4 className="text-gray-900 font-bold text-lg mb-4">Lista de Material</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Adquira o material através da nossa loja oficial parceira.</p>
                                <a href="https://lojanaescola.com.br/itec" target="_blank" rel="noopener noreferrer" className="inline-block text-secondary font-black text-sm uppercase tracking-widest border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all">
                                    Ver loja <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">O futuro começa aqui no ITEC</h2>
                    <p className="text-white/80 text-xl font-medium mb-12 max-w-2xl mx-auto">Garanta sua vaga em uma instituição que valoriza o seu talento e potencial.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/matricula" className="bg-secondary text-white font-black py-5 px-12 rounded-full text-xl shadow-2xl hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1">
                            Quero me matricular
                        </Link>
                        <a href="https://wa.me/552435120102?text=Olá, gostaria de saber mais sobre o Ensino Médio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white font-black text-xl hover:text-secondary transition-colors">
                            <i className="fab fa-whatsapp text-3xl"></i> Falar com consultor
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MedioDetail;
