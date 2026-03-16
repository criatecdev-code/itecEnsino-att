import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FundamentalDetail: React.FC = () => {
    return (
        <div className="bg-gray-50 flex flex-col min-h-screen">
            <Helmet>
                <title>Ensino Fundamental I - ITEKIDS | ITEC Ensino</title>
                <meta name="description" content="Conheça o Ensino Fundamental I no ITEKIDS. Projeto de Vida, Inglês desde o 1º ano e metodologias ativas para o desenvolvimento integral do seu filho." />
            </Helmet>

            {/* Premium Hero Section */}
            <div className="relative pt-36 pb-32 lg:pt-52 lg:pb-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/90 to-secondary/80 mix-blend-multiply"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

                <div className="container-custom relative z-10 text-center text-white">
                    <div className="flex justify-center mb-8 animate-fade-in-up">
                        <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-secondary font-bold tracking-[0.2em] uppercase shadow-lg transform hover:scale-105 transition-transform duration-300">
                            Ensino Fundamental I
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight text-white animate-fade-in-up delay-100">
                        Fundamental <span className="text-secondary">I</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                        Onde o aprendizado se transforma em descoberta e o futuro começa com autonomia e criatividade.
                    </p>
                </div>
            </div>

            {/* Breadcrumb - Overlapping the Hero */}
            <div className="relative -mt-4 md:-mt-8 z-30 container-custom">
                <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-white/50 bg-gray-900/50 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-white/10 mx-auto lg:mx-0">
                    <Link to="/" className="hover:text-white transition-colors">Início</Link>
                    <span className="text-secondary">•</span>
                    <Link to="/cursos/fundamental" className="hover:text-white transition-colors">Ensino Fundamental</Link>
                    <span className="text-secondary">•</span>
                    <span className="text-white font-medium">ITEKIDS</span>
                </div>
            </div>

            {/* Main Content - Pillars Section */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center justify-center gap-2">
                            <span className="w-8 h-[2px] bg-secondary"></span>
                            Nossos Pilares
                            <span className="w-8 h-[2px] bg-secondary"></span>
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                            Uma base sólida de <br />
                            <span className="text-primary relative inline-block">
                                valores e inovação
                                <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden animate-fade-in-up delay-100 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-4xl mb-8 group-hover:rotate-6 transition-transform duration-300">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors">
                                Projeto de Vida Infantil
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Desenvolvimento dos pilares fundamentais: família, empreendedorismo, educação financeira e habilidades socioemocionais desde cedo, preparando a criança para as escolhas da vida.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border-2 border-secondary/10 group relative overflow-hidden animate-fade-in-up delay-200 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-secondary/10"></div>
                            <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-4xl mb-8 group-hover:rotate-6 transition-transform duration-300">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-secondary transition-colors text-nowrap">
                                Inglês desde o 1º ano
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Imersão na língua inglesa com foco em conversação, preparando seu filho para um mundo globalizado.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden animate-fade-in-up delay-300 flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:bg-purple-500/10"></div>
                            <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 text-4xl mb-8 group-hover:rotate-6 transition-transform duration-300">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                                Metodologia Ativa & Gamificação
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Aprendizagem lúdica e adaptada à faixa etária, tornando o conhecimento significativo e divertido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metodologia Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Proposta Pedagógica</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Metodologia <span className="text-primary">Inovadora</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Somos um grupo educacional atuante no mercado há mais de 15 anos, sempre voltado ao ensino inovador e construtivista, compreendendo o estudante como foco do processo educativo. Formamos alunos proativos, criativos, colaborativos, críticos e com habilidades socioemocionais, preparados para um futuro desafiador e em constante movimento.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mt-6">
                            Nosso método aposta em aulas totalmente dinâmicas, com estudos de caso, sala de aula invertida, projetos e rodas de conversa. Utilizamos a metodologia de problemas, priorizando o aprendizado em grupo e valorizando a criatividade e o pensamento crítico.
                        </p>
                    </div>

                    {/* Diferenciais */}
                    <div className="max-w-5xl mx-auto">
                        <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">Diferenciais do Ensino Fundamental</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Metodologia individualizada e personalizada conforme o perfil do aluno',
                                'Matrizes curriculares atualizadas e dinâmicas, sintonizadas com o mercado',
                                'Equipe pedagógica e professores qualificados com graduação e licenciatura',
                                'Acompanhamento psicopedagógico com psicopedagogas especialistas em TEA',
                                'Excelente infraestrutura em localização privilegiada, segura e de fácil acesso',
                                'Salas amplas, climatizadas, confortáveis e equipadas com TV e WI-FI',
                                'Ambiente monitorado 24 horas',
                                'Laboratórios com equipamentos simuladores, esqueleto, bonecos e peças anatômicas',
                                'Portal/Aplicativo do aluno inovador com a vida escolar na palma da mão',
                                'Seguro estudantil desde o início das atividades escolares',
                                'Projeto de Vida (Família, Empreendedorismo, Educação Financeira e Socioemocional)',
                                'Educação Profissionalizante e Tecnológica – Robótica Educacional e Informática',
                                'Cultura Digital (Maker) – faça você mesmo',
                                'Projetos Interdisciplinares'
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <i className="fas fa-check-circle text-secondary mt-1 flex-shrink-0"></i>
                                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Conquista Solução Educacional */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Material Didático</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            Conquista <span className="text-primary">Solução Educacional</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            O Sistema Conquista tem como objetivo formar crianças e jovens preparados para os desafios do futuro. O sistema utiliza uma proposta interacionista, na qual o estudante é protagonista de seu processo de aprendizagem, estimulado a refletir e questionar. Eles são incentivados à autonomia, à criatividade e à inovação.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            <strong>CONx PLATAFORMA</strong> com acesso a livros digitais diversificados, potencializando o aprendizado e engajamento do aluno.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contraturno Completo */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">1º ao 6º ano</span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                            Contraturno <span className="text-primary">Completo</span>
                        </h2>
                        <p className="text-gray-600 text-lg">Ideal para pais que trabalham em tempo integral.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: 'fa-clock', title: 'Período Estendido', desc: 'Das 6h50 às 13h ou até 18h30 com extensão, adaptando-se à sua rotina familiar' },
                            { icon: 'fa-utensils', title: 'Alimentação Completa', desc: 'Café da manhã, almoço, lanche da tarde e ceia (conforme o turno), com cardápio balanceado e nutritivo' },
                            { icon: 'fa-book', title: 'Hora da Tarefa', desc: 'Acompanhamento pedagógico diário para as atividades escolares, garantindo aprendizagem de qualidade' },
                            { icon: 'fa-robot', title: 'Robótica', desc: 'Desenvolvimento de lógica e criatividade' },
                            { icon: 'fa-music', title: 'Musicalização', desc: 'Encenação, roda com desenvolvimento de ritmos, coordenação motora, memória' },
                            { icon: 'fa-medal', title: 'Judô', desc: 'Desenvolvimento físico e disciplina' },
                            { icon: 'fa-theater-masks', title: 'Oficina Artística', desc: 'Dança/Teatro – corpo e movimento, consciência corporal' },
                            { icon: 'fa-tools', title: 'Oficina Maker', desc: 'Mão na massa – criação e construção com as próprias mãos, projetos como bonecos e carrinhos com reciclagem' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary text-2xl mb-4">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Horários e Material */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                <i className="fas fa-clock text-secondary"></i>
                                Horários
                            </h3>
                            <p className="text-gray-600 font-medium mb-2">1º ao 6º ano:</p>
                            <p className="text-gray-900 font-bold mb-6">13h às 17:30</p>
                            <p className="text-gray-600 font-medium mb-2">7º ao 9º ano:</p>
                            <p className="text-gray-900 font-bold">7h às 12:20</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
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

            {/* Philosophy Section - Interactive & Impactful */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-10 shadow-xl border border-white/20 animate-bounce">
                            <i className="fas fa-quote-left"></i>
                        </div>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight italic drop-shadow-md">
                            "No <span className="text-secondary">ITEKIDS</span>, seu filho desenvolve autonomia, criatividade e pensamento crítico em um ambiente acolhedor e estimulante."
                        </p>
                        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
                            <a
                                href="https://wa.me/552435120102?text=Olá, gostaria de saber mais sobre o Ensino Fundamental I (ITEKIDS)"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 bg-secondary hover:bg-white hover:text-primary text-white font-black py-6 px-12 rounded-full text-xl md:text-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                            >
                                <i className="fab fa-whatsapp text-3xl transition-transform group-hover:scale-110"></i>
                                Garanta a vaga do seu filho
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FundamentalDetail;
