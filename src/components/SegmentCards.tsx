import React from 'react';
import { Link } from 'react-router-dom';

const SegmentCards: React.FC = () => {
    const segments = [
        {
            title: "Ensino regular",
            subtitle: "Fundamental e médio",
            icon: "fa-graduation-cap",
            color: "text-secondary",
            link: "/cursos/fundamental"
        },
        {
            title: "Cursos técnicos",
            subtitle: "Formação profissional",
            icon: "fa-microscope",
            color: "text-primary",
            link: "/cursos/tecnico"
        },
        {
            title: "Cursos profissionalizantes",
            subtitle: "Qualificação rápida",
            icon: "fa-briefcase",
            color: "text-amber-500",
            link: "/cursos/profissionalizante"
        },
    ];

    return (
        <div id="modalidades" className="relative pt-20 pb-10 -mt-12 md:-mt-16 lg:-mt-20 z-20 scroll-mt-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {segments.map((segment, index) => (
                        <Link
                            key={index}
                            to={segment.link}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 flex items-center justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-b-4 border-transparent hover:border-primary group"
                        >
                            <div className="flex-1 pr-4">
                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1 group-hover:text-primary transition-colors leading-tight">
                                    {segment.title}
                                </h3>
                                <p className="text-gray-400 font-bold text-[10px] md:text-xs tracking-widest uppercase">
                                    {segment.subtitle}
                                </p>
                            </div>
                            <div className={`w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-xl bg-gray-50 flex items-center justify-center ${segment.color} text-xl md:text-2xl transition-transform duration-500 group-hover:scale-110`}>
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
