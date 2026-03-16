import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MedioDetail: React.FC = () => {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Helmet>
                <title>Ensino Médio | ITEC Ensino - Profissionalizante e Técnico</title>
                <meta name="description" content="Ensino Médio no ITEC: preparação para ENEM e vestibulares, cursos técnicos integrados (Enfermagem, Análises Clínicas), material SAE Digital e foco na profissionalização e acesso às universidades." />
            </Helmet>

            {/* Hero Section */}
            <div className="relative pt-36 pb-32 lg:pt-52 lg:pb-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/90 to-secondary/80 mix-blend-multiply"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

                <div className="container-custom relative z-10 text-center text-white">
                    <div className="flex justify-center mb-8 animate-fade-in-up">
                        <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-secondary font-bold tracking-[0.2em] uppercase shadow-lg">
                            Profissionalizante | Técnico
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-white animate-fade-in-up delay-100">
                        Ensino <span className="text-secondary">Médio</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        Foco na profissionalização do estudante, inserção no mercado de trabalho e acesso às universidades públicas e privadas.
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="relative -mt-4 md:-mt-8 z-30 container-custom">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-white/50 bg-gray-900/50 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-white/10 mx-auto lg:mx-0">
                    <Link to="/" className="hover:text-white transition-colors">Início</Link>
                    <span className="text-secondary">•</span>
                    <Link to="/cursos/fundamental" className="hover:text-white transition-colors">Ensino Regular</Link>
                    <span className="text-secondary">•</span>
                    <span className="text-white font-medium">Ensino Médio</span>
                </div>
            </div>

            {/* Proposta Pedagógica e Metodologia */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proposta Pedagógica</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Metodologia <span className="text-primary">Inovadora</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Somos um grupo educacional atuante no mercado há mais de 15 anos, sempre voltado ao ensino inovador e construtivista, compreendendo o estudante como foco do processo educativo, promovendo o desenvolvimento da autonomia e do protagonismo de nossos alunos, em busca de uma educação participativa para uma sociedade democrática e mais humana.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mt-6">
                            Formamos alunos proativos, criativos, colaborativos, críticos e com habilidades socioemocionais, preparados para um futuro desafiador e em constante movimento. Nosso método de ensino aposta em aulas totalmente dinâmicas, com estudos de caso, aulas no modelo sala de aula invertida, projetos e rodas de conversa. Utilizamos a metodologia de problemas, priorizando o aprendizado em grupo e valorizando a criatividade e o pensamento crítico.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mt-6">
                            A proposta pedagógica é individualizada, personalizada e desenvolvida conforme o perfil do aluno. Nos primeiros dias de aula a equipe pedagógica aplica uma avaliação para verificar o nível de aprendizado dos alunos buscando promover o desenvolvimento de habilidades e competências de acordo com a BNCC (Base Nacional Comum Curricular).
                        </p>
                    </div>

                    {/* Pilares do Ensino Médio */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            { icon: 'fa-file-alt', title: 'Simulados ENEM desde o 1º ano', desc: 'Preparação contínua para o exame mais importante para o ingresso nas universidades brasileiras.', color: 'text-primary' },
                            { icon: 'fa-coins', title: 'Educação Financeira e Empreendedorismo', desc: 'Formação para autonomia financeira e desenvolvimento de projetos empreendedores reais.', color: 'text-secondary' },
                            { icon: 'fa-laptop-code', title: 'Tecnologia Educacional Avançada', desc: 'Aulas com vídeos, animações 3D e recursos interativos que potencializam o aprendizado.', color: 'text-primary' },
                            { icon: 'fa-lightbulb', title: 'Metodologia Ativa', desc: 'Aplicação prática e foco nas competências da BNCC com projetos interdisciplinares.', color: 'text-secondary' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl transition-all group">
                                <div className={`w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center ${item.color} text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Diferenciais */}
                    <div className="max-w-5xl mx-auto">
                        <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Diferenciais do Ensino Médio</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Metodologia de ensino inovadora que busca incentivar os alunos a aprenderem de forma autônoma, participativa e significativa, por meio de problemas e situações reais',
                                'Proposta pedagógica individualizada, personalizada e desenvolvida conforme o perfil do aluno',
                                'Matrizes curriculares atualizadas e dinâmicas, sintonizadas com as tendências do mercado de trabalho',
                                'Equipe pedagógica e professores qualificados e experientes com graduação pedagógica e licenciatura na área abordada',
                                'Acompanhamento psicopedagógico para os alunos com dificuldade de aprendizagem. Em nossa equipe temos duas psicopedagogas com especialização em TEA',
                                'Excelente infraestrutura em localização privilegiada, segura e de fácil acesso',
                                'Salas amplas, climatizadas, confortáveis e equipadas com TV e WI-FI',
                                'Ambiente monitorado 24 horas',
                                'Laboratórios com equipamentos simuladores, esqueleto, bonecos e peças anatômicas',
                                'Portal/Aplicativo do aluno inovador e moderno, que apresenta a vida escolar do estudante na palma da mão',
                                'Seguro estudantil desde o início das atividades escolares',
                                'Material Didático SAE Digital',
                                'Educação Profissionalizante e Tecnológica – Robótica Educacional e Informática',
                                'Cultura Digital (Maker) – faça você mesmo',
                                'Projetos Interdisciplinares',
                                'Projeto de Vida (Família, Empreendedorismo, Educação Financeira e Socioemocional)',
                                'Preparatório para o ENEM',
                                'Foco na profissionalização do estudante, inserção no mercado de trabalho e acesso às universidades públicas e privadas'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                                    <i className="fas fa-check-circle text-secondary mt-1 flex-shrink-0"></i>
                                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Jornada por Série */}
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
                                items: ["Teste vocacional personalizado", "Escolha do curso profissionalizante", "Plano de estudos individualizados", "Primeiros simulados ENEM"],
                                icon: "fas fa-compass"
                            },
                            {
                                serie: "2ª Série",
                                items: ["Início do curso técnico (opcional)", "Opções: Enfermagem ou Análises Clínicas", "Intensificação das preparações para o ENEM", "Projetos práticos profissionalizantes"],
                                icon: "fas fa-tools",
                                highlighted: true
                            },
                            {
                                serie: "3ª Série",
                                items: ["Continuidade do curso técnico", "Intensivo para ENEM e vestibulares no 2º semestre", "Mentorias para definição de carreira", "Estágios supervisionados (para o curso técnico)"],
                                icon: "fas fa-user-graduate"
                            }
                        ].map((card, i) => (
                            <div key={i} className={`p-10 rounded-[3rem] transition-all duration-500 border-2 ${card.highlighted ? 'bg-primary border-primary shadow-2xl shadow-primary/30 transform hover:scale-105' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${card.highlighted ? 'bg-white text-primary' : 'bg-white/10 text-secondary'}`}>
                                    <i className={card.icon}></i>
                                </div>
                                <h3 className="text-3xl font-black mb-8 text-white">{card.serie}</h3>
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

            {/* SAE Digital */}
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
                                O material didático do SAE Digital para o Ensino Médio está alinhado às diretrizes nacionais e foca na autonomia dos estudantes, utilizando a tecnologia para potencializar o impacto positivo no processo de ensino e aprendizagem.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                A proposta do SAE Digital para o Novo Ensino Médio baseia-se em algumas premissas: cumprimento da legislação, pois assegura a adequação à Base Nacional Comum Curricular (BNCC) e oferece aos estudantes as condições para que sejam protagonistas de suas jornadas, tendo opções de escolha e se desenvolvendo com o auxílio do Projeto de Vida; preparação dos estudantes para o ingresso nas universidades escolhidas, explorando conteúdos, competências e habilidades e proporcionando experiências de prática com os modelos de prova.
                            </p>
                            <p className="text-gray-600 text-lg font-bold">
                                As tecnologias educacionais do SAE Digital são totalmente integradas ao material impresso!
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
                                <h4 className="text-primary font-black text-2xl mb-4">Horários 2025</h4>
                                <p className="text-gray-600 text-sm font-medium mb-2">1º ano:</p>
                                <p className="text-gray-900 font-bold mb-4">Seg a Sex: 7h às 12:20</p>
                                <p className="text-gray-600 text-sm font-medium mb-2">2º ano:</p>
                                <p className="text-gray-900 font-bold mb-1">Ter, Qui e Sex: 13h às 18:20</p>
                                <p className="text-gray-900 font-bold mb-4">Seg e Qua: 13h às 19:10</p>
                                <p className="text-gray-600 text-sm font-medium mb-2">3º ano:</p>
                                <p className="text-gray-900 font-bold mb-1">Seg a Sex: 7h às 12:20</p>
                                <p className="text-gray-500 text-xs mt-1">+ Profissionalizante: Seg 13h às 15h</p>
                                <p className="text-gray-500 text-xs">+ Aula à tarde Sex: 13:30 às 16:20</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
                                <i className="fas fa-shopping-cart text-secondary text-3xl mb-6"></i>
                                <h4 className="text-gray-900 font-bold text-lg mb-4">Lista de Material</h4>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">Adquira o material através da nossa loja oficial parceira. Gentileza adquirir ainda esse ano se possível.</p>
                                <a href="https://lojanaescola.com.br/itec" target="_blank" rel="noopener noreferrer" className="inline-block text-secondary font-black text-sm uppercase tracking-widest border-b-2 border-secondary pb-1 hover:text-primary hover:border-primary transition-all">
                                    Ver loja <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
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
