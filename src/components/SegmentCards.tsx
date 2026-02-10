import React from 'react';
import { Link } from 'react-router-dom';

const SegmentCards: React.FC = () => {
    const segments = [
        {
            title: "Ensino Regular",
            subtitle: "Fundamental e Médio",
            icon: "fa-school",
            color: "text-secondary",
            link: "/cursos/fundamental"
        },
        {
            title: "Cursos Técnicos",
            subtitle: "Formação Profissional",
            icon: "fa-microscope",
            color: "text-primary",
            link: "/cursos/tecnico"
        },
        {
            title: "Cursos Profissionalizantes",
            subtitle: "Qualificação Rápida",
            icon: "fa-briefcase",
            color: "text-amber-500",
            link: "/cursos/profissionalizante"
        },
    ];

    return (
        <div className="relative py-16 -mt-20 z-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {segments.map((segment, index) => (
                        <Link
                            key={index}
                            to={segment.link}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 flex items-center justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-b-4 border-transparent hover:border-primary group"
                        >
                            <div className="flex-1 pr-4">
                                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1 group-hover:text-primary transition-colors leading-tight">
                                    {segment.title}
                                </h3>
                                <p className="text-gray-500 font-medium text-xs md:text-sm uppercase tracking-wide">
                                    {segment.subtitle}
                                </p>
                            </div>
                            <div className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-gray-50 flex items-center justify-center ${segment.color} text-2xl md:text-3xl transition-transform duration-500 group-hover:rotate-12`}>
                                <i className={`fas ${segment.icon}`}></i>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SegmentCards;
