import React from 'react';

interface EducationLevelSectionProps {
    title: string;
    subtitle: string;
    description: string;
    features?: string[];
    image: string;
    link: string;
    linkText: string;
    isReversed?: boolean;
    colorClass?: string; // e.g., 'text-primary' or 'text-secondary'
    bgClass?: string;    // e.g., 'bg-white' or 'bg-gray-50'
}

const EducationLevelSection: React.FC<EducationLevelSectionProps> = ({
    title,
    subtitle,
    description,
    features,
    image,
    link,
    linkText,
    isReversed = false,
    colorClass = 'text-primary',
    bgClass = 'bg-white'
}) => {
    const isWhiteBg = bgClass.includes('bg-white');

    return (
        <section className={`py-20 lg:py-24 ${bgClass} overflow-hidden relative group ${isWhiteBg ? 'border-t border-gray-100' : ''}`}>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/img/pattern/map.png')] bg-no-repeat bg-right-top opacity-5 pointer-events-none"></div>

            <div className="container-custom">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl shadow-black/5 transform transition-transform duration-700 hover:scale-[1.01]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <span className={`${colorClass} font-bold tracking-[0.2em] text-sm mb-4 block flex items-center gap-2`}>
                            <span className={`w-12 h-[2px] ${colorClass === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}></span>
                            {subtitle}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-medium opacity-90">
                            {description}
                        </p>

                        {/* Features List */}
                        {features && features.length > 0 && (
                            <div className="space-y-4 mb-12">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className={`mt-1.5 w-2 h-2 rounded-full ${colorClass === 'text-secondary' ? 'bg-secondary' : 'bg-primary'} flex-shrink-0`}></div>
                                        <span className="text-gray-700 font-bold text-lg leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <a
                            href={link}
                            className={`btn-primary ${colorClass === 'text-secondary' ? '!bg-secondary' : '!bg-primary'} px-10 py-4 !rounded-xl !text-base shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1`}
                        >
                            {linkText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationLevelSection;
