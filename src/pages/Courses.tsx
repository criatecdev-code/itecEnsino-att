import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Courses: React.FC = () => {
    const { category } = useParams<{ category: string }>();

    const filteredCourses = useMemo(() => {
        if (!category) return courses;

        const normalizedCategory = category.toLowerCase();

        return courses.filter(course => {
            const courseCat = course.categoria.toLowerCase();

            if (normalizedCategory === 'tecnico') {
                return courseCat.includes('técnico') || courseCat.includes('tecnico');
            }
            if (normalizedCategory === 'profissionalizante') {
                return courseCat.includes('profissionalizante');
            }
            if (normalizedCategory === 'fundamental') {
                return courseCat.includes('fundamental');
            }
            if (normalizedCategory === 'medio' || normalizedCategory === 'médio') {
                return courseCat.includes('médio') || courseCat.includes('medio');
            }
            return true;
        });
    }, [category]);

    const pageTitle = useMemo(() => {
        if (category === 'tecnico') return 'Cursos Técnicos';
        if (category === 'profissionalizante') return 'Cursos Profissionalizantes';
        if (category === 'fundamental') return 'Ensino Fundamental';
        if (category === 'medio') return 'Ensino Médio';
        return 'Todos os Cursos';
    }, [category]);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>{pageTitle} | ITEC Ensino</title>
                <meta name="description" content={`Confira os cursos de ${pageTitle} oferecidos pelo ITEC Ensino. Qualidade, infraestrutura e professores qualificados.`} />
            </Helmet>
            {/* Header / Breadcrumb - Consistent with other pages */}
            <div className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black mb-3 animate-fade-in-up text-white">{pageTitle}</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-gray-300 animate-fade-in-up delay-100">
                        <a href="/" className="hover:text-white transition-colors">Início</a>
                        <span className="text-secondary">•</span>
                        <span className="text-white">Cursos</span>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="container-custom">
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
                                >
                                    {/* Card Image */}
                                    <div className="relative h-56 overflow-hidden shrink-0">
                                        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors z-10"></div>
                                        <img
                                            src={course.img}
                                            alt={course.titulo}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                                {course.categoria}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem]">
                                            {course.titulo}
                                        </h3>

                                        <div className="w-12 h-1 bg-secondary rounded-full mb-4 group-hover:w-20 transition-all duration-500"></div>

                                        {/* Optional Description truncated */}
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {course.sobre ? course.sobre.substring(0, 100) + '...' : 'Saiba mais sobre este curso incrível oferecido pelo ITEC.'}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Carga Horária</span>
                                                <span className="text-gray-900 font-bold">{course.cargahoraria || '-'}</span>
                                            </div>
                                            <Link
                                                to="#"
                                                className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300"
                                            >
                                                <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <i className="fas fa-search text-6xl text-gray-200 mb-6"></i>
                            <h3 className="text-2xl font-bold text-gray-500">Nenhum curso encontrado nesta categoria.</h3>
                            <Link to="/" className="btn-primary mt-8 inline-block">Voltar para Início</Link>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Courses;
