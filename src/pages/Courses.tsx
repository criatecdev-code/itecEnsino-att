import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';

const Courses: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredCourses = useMemo(() => {
        let result = courses;

        if (category) {
            const normalizedCategory = category.toLowerCase();
            result = result.filter(course => {
                const courseCat = course.categoria.toLowerCase();
                if (normalizedCategory === 'tecnico') return courseCat.includes('técnico') || courseCat.includes('tecnico');
                if (normalizedCategory === 'profissionalizante') return courseCat.includes('profissionalizante');
                if (normalizedCategory === 'fundamental') return courseCat.includes('fundamental');
                if (normalizedCategory === 'medio' || normalizedCategory === 'médio') return courseCat.includes('médio') || courseCat.includes('medio');
                return true;
            });
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(course =>
                course.titulo.toLowerCase().includes(term) ||
                course.sobre.toLowerCase().includes(term)
            );
        }

        return result;
    }, [category, searchTerm]);

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
                    <h1 className="text-4xl md:text-5xl font-black mb-3 animate-fade-in-up text-white drop-shadow-sm">{pageTitle}</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-white/70 animate-fade-in-up delay-100">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="text-secondary">•</span>
                        <span className="text-white font-medium">Cursos</span>
                    </div>
                </div>
            </div>

            <section className="py-12">
                <div className="container-custom">

                    {/* Search and Filter Info */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div>
                            <p className="text-gray-500 font-medium">
                                Mostrando <span className="text-primary font-bold">{filteredCourses.length}</span> {filteredCourses.length === 1 ? 'curso' : 'cursos'}
                                {searchTerm && <span> para "<span className="text-gray-900 font-bold">{searchTerm}</span>"</span>}
                            </p>
                        </div>

                        <div className="relative w-full md:w-96 group">
                            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"></i>
                            <input
                                type="text"
                                placeholder="Buscar curso por nome ou área..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-10 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <i className="fas fa-times-circle"></i>
                                </button>
                            )}
                        </div>
                    </div>

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
                                                to={`/curso/${course.slug}`}
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
