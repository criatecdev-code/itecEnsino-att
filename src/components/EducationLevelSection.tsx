import React from 'react';

interface EducationLevelSectionProps {
    title: string;
    subtitle: string;
    description: string;
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
    image,
    link,
    linkText,
    isReversed = false,
    colorClass = 'text-primary',
    bgClass = 'bg-white'
}) => {
    return (
        <section className={`py-24 lg:py-32 ${bgClass} overflow-hidden relative group`}>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/img/pattern/map.png')] bg-no-repeat bg-right-top opacity-5 pointer-events-none"></div>

            <div className="container-custom">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 transform transition-transform duration-700 hover:scale-[1.02]">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-auto object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                        </div>
                        {/* Decorative Background */}
                        <div className={`absolute -bottom-8 ${isReversed ? '-right-8' : '-left-8'} w-full h-full border-[3px] ${colorClass === 'text-primary' ? 'border-primary/10' : 'border-secondary/10'} rounded-[3rem] -z-0 transform translate-y-2 translate-x-2`}></div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <span className={`${colorClass} font-bold tracking-[0.2em] text-sm mb-4 block flex items-center gap-2`}>
                            <span className={`w-12 h-[2px] ${colorClass === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`}></span>
                            {subtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-[1] tracking-tight">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-xl font-medium opacity-90">
                            {description}
                        </p>


                        <a
                            href={link}
                            className={`btn-primary ${colorClass === 'text-secondary' ? '!bg-secondary hover:!bg-green-800' : ''} px-10 py-4 !rounded-full !text-base shadow-xl hover:shadow-2xl hover:-translate-y-1`}
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
