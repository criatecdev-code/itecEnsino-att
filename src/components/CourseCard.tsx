import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
    titulo: string;
    categoria: string;
    img: string;
    sobre: string;
    cargahoraria?: string;
    slug: string;
    features?: string[];
    colorClass?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    titulo,
    categoria,
    img,
    sobre,
    cargahoraria,
    slug,
    features,
    colorClass = 'text-primary'
}) => {
    const isExternal = slug === '#';
    const LinkComponent = isExternal ? 'a' : Link;
    const linkProps = isExternal ? { href: slug } : { to: `/curso/${slug}` };

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md shadow-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
            {/* Card Image */}
            <div className="relative h-52 overflow-hidden shrink-0">
                <img
                    src={img}
                    alt={titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white text-primary text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm border border-gray-100">
                        {categoria}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {titulo}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {sobre}
                </p>

                {/* Features List - Cleaner */}
                {features && features.length > 0 && (
                    <div className="space-y-2.5 mb-6">
                        {features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                                <i className={`fas fa-check text-[10px] ${colorClass === 'text-secondary' ? 'text-secondary' : 'text-primary'}`}></i>
                                <span className="text-gray-600 font-medium text-xs">{feature}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    {cargahoraria && (
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">
                                Carga Horária
                            </span>
                            <span className="text-gray-900 font-black text-sm">
                                {cargahoraria}
                            </span>
                        </div>
                    )}
                    {/* @ts-ignore */}
                    <LinkComponent
                        {...linkProps}
                        className="flex items-center gap-2 text-primary font-black text-xs group-hover:gap-3 transition-all"
                    >
                        Ver detalhes <i className="fas fa-arrow-right"></i>
                    </LinkComponent>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
