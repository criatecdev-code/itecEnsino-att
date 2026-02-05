import React from 'react';

const FunFactorsArea: React.FC = () => {
    const stats = [
        { label: "Anos de Excelência", value: "15+", icon: "fa-certificate", color: "text-amber-500" },
        { label: "Alunos Formados", value: "5k+", icon: "fa-user-graduate", color: "text-primary" },
        { label: "Opções de Ensino", value: "50+", icon: "fa-book", color: "text-secondary" },
    ];

    return (
        <div className="relative py-16 z-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 flex items-center justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-b-4 border-transparent hover:border-primary group"
                        >
                            <div>
                                <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-500 font-medium text-lg uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                            <div className={`w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center ${stat.color} text-3xl transition-transform duration-500 group-hover:rotate-12`}>
                                <i className={`fas ${stat.icon}`}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FunFactorsArea;
