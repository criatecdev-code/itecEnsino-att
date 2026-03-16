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
            <div className="relative pt-36 pb-32 lg:pt-52 lg:pb-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/cardfundamental2.png"
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
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">6º ao 9º Ano</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                            Nossos <span className="text-primary">Pilares</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: 'fa-robot', title: 'Robótica Avançada', desc: 'Desenvolvimento de lógica, criatividade e resolução de problemas complexos com tecnologia de ponta (obrigatório, presente na matriz curricular)', color: 'text-primary' },
                            { icon: 'fa-coins', title: 'Educação Financeira', desc: 'Formação para a autonomia financeira e mindset empreendedor desde cedo', color: 'text-secondary' },
                            { icon: 'fa-gamepad', title: 'Gamificação', desc: 'Alunos motivados a evoluir por meio de desafios que transformam o aprendizado em uma jornada empolgante', color: 'text-purple-600' },
                            { icon: 'fa-lightbulb', title: 'Metodologia Ativa', desc: 'Aprendizagem prática com projetos interdisciplinares que conectam o conteúdo à realidade', color: 'text-primary' },
                            { icon: 'fa-heart', title: 'Desenvolvimento Socioemocional', desc: 'Programa estruturado para desenvolver empatia, resiliência e trabalho em equipe', color: 'text-secondary' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all group">
                                <div className={`w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center ${item.color} text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8 animate-fade-in-up">
                            <div>
                                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proposta Pedagógica</span>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                                    Metodologia e <span className="text-primary">Infraestrutura</span>
                                </h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Nossa metodologia de ensino para o Ensino Fundamental foi desenvolvida para formar seres pensantes, conscientes e transformadores dos espaços que ocupam, com senso crítico e autonomia. Proporcionamos também um ambiente escolar que favoreça a problematização e o envolvimento ativo do aluno com experiências da vida real.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Para o Ensino Fundamental II são ofertados ambientes interativos, laboratórios para atividades práticas, sala Maker, Língua Inglesa com metodologia comunicativa e prática de imersão.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Ambientes interativos',
                                    'Laboratórios práticos',
                                    'Sala Maker',
                                    'Língua Inglesa com imersão',
                                    'Acompanhamento psicopedagógico',
                                    'Material Conquista Solução Educacional'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                                        <i className="fas fa-check-circle text-primary"></i>
                                        <span className="text-gray-700 font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group animate-fade-in-up delay-200">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-primary via-secondary to-primary rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-700"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="/cardfundamental2.png"
                                    alt="Estudante Fundamental II"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais e Conquista */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">Diferenciais do Ensino Fundamental</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Metodologia individualizada e personalizada conforme o perfil do aluno',
                                'Matrizes curriculares atualizadas e dinâmicas',
                                'Equipe pedagógica e professores qualificados',
                                'Acompanhamento psicopedagógico com especialistas em TEA',
                                'Excelente infraestrutura em localização privilegiada',
                                'Salas amplas, climatizadas, com TV e WI-FI',
                                'Ambiente monitorado 24 horas',
                                'Laboratórios com equipamentos simuladores e peças anatômicas',
                                'Portal/Aplicativo do aluno inovador',
                                'Seguro estudantil desde o início',
                                'Projeto de Vida e Projetos Interdisciplinares',
                                'Educação Profissionalizante – Robótica e Informática',
                                'Cultura Digital (Maker)'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                    <i className="fas fa-check-circle text-secondary mt-1 flex-shrink-0"></i>
                                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Conquista Solução Educacional</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            O Sistema Conquista tem como objetivo formar crianças e jovens preparados para os desafios do futuro. O sistema utiliza uma proposta interacionista, na qual o estudante é protagonista de seu processo de aprendizagem, estimulado a refletir e questionar.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            <strong>CONx PLATAFORMA</strong> com acesso a livros digitais diversificados, potencializando o aprendizado e engajamento do aluno.
                        </p>
                    </div>
                </div>
            </section>

            {/* Horários e Material */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fas fa-clock text-secondary"></i>
                                Horários
                            </h3>
                            <p className="text-gray-600 font-medium mb-2">1º ao 6º ano:</p>
                            <p className="text-gray-900 font-bold mb-6">13h às 17:30</p>
                            <p className="text-gray-600 font-medium mb-2">7º ao 9º ano:</p>
                            <p className="text-gray-900 font-bold">7h às 12:20</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <i className="fas fa-shopping-cart text-secondary text-3xl mb-6"></i>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Lista de Material</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">Adquira o material através da nossa loja oficial parceira.</p>
                            <a href="https://lojanaescola.com.br/itec" target="_blank" rel="noopener noreferrer" className="inline-block text-secondary font-black text-sm uppercase tracking-widest border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all">
                                Ver loja <i className="fas fa-arrow-right ml-2"></i>
                            </a>
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
                        href="https://wa.me/552435120102?text=Olá, gostaria de saber mais sobre o Ensino Fundamental II"
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
