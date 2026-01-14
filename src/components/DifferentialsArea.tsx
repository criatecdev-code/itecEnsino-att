import React from 'react';

const DifferentialsArea: React.FC = () => {
    const differentials = [
        {
            icon: "fa-graduation-cap",
            title: "Metodologia Inovadora",
            description: "Aulas dinâmicas que unem teoria e prática, preparando você para os desafios reais do mercado.",
            color: "text-primary",
            bg: "bg-blue-50"
        },
        {
            icon: "fa-microscope",
            title: "Infraestrutura de Ponta",
            description: "Laboratórios modernos e equipados com tecnologia atual para uma formação completa.",
            color: "text-secondary",
            bg: "bg-green-50"
        },
        {
            icon: "fa-chalkboard-teacher",
            title: "Professores Qualificados",
            description: "Equipe docente formada por especialistas atuantes no mercado e comprometidos com seu sucesso.",
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            icon: "fa-briefcase",
            title: "Alta Empregabilidade",
            description: "Parcerias com empresas e foco no desenvolvimento de competências exigidas pelo setor produtivo.",
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-fade-in-up">Por que escolher o ITEC?</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100">
                        Diferenciais que <span className="text-primary relative inline-block">
                            Transformam
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99995 83.2501 0.750004 200 1.99997" stroke="currentColor" strokeWidth="3"></path></svg>
                        </span> seu Futuro
                    </h2>
                    <p className="text-gray-500 text-lg animate-fade-in-up delay-200">
                        Mais do que uma escola técnica, somos um centro de excelência focado em impulsionar sua carreira.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-8 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`w-20 h-20 rounded-2xl ${item.bg} flex items-center justify-center text-3xl ${item.color} mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm`}>
                                <i className={`fas ${item.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DifferentialsArea;
