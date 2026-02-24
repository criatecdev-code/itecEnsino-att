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
        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
            {/* Card Image */}
            <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10"></div>
                <img
                    src={img}
                    alt={titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                        {categoria}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem]">
                    {titulo}
                </h3>

                <div className={`w-12 h-1 ${colorClass === 'text-secondary' ? 'bg-secondary' : 'bg-primary'} rounded-full mb-6 group-hover:w-20 transition-all duration-500`}></div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {sobre}
                </p>

                {/* Features List */}
                {features && features.length > 0 && (
                    <div className="space-y-3 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <i className={`fas fa-check-circle mt-1 ${colorClass === 'text-secondary' ? 'text-secondary' : 'text-primary'} text-xs`}></i>
                                <span className="text-gray-700 font-bold text-sm leading-tight">{feature}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Carga Horária</span>
                        <span className="text-gray-900 font-bold">{cargahoraria || '-'}</span>
                    </div>
                    {/* @ts-ignore */}
                    <LinkComponent
                        {...linkProps}
                        className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                        <i className="fas fa-arrow-right"></i>
                    </LinkComponent>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
