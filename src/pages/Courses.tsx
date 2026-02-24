import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

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

                    {category === 'fundamental' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Card ITEKIDS */}
                            <CourseCard
                                titulo="ITEKIDS"
                                categoria="Ensino Fundamental I"
                                img="/img/home/fundamental.png"
                                sobre="Desenvolvimento integral da criança em um ambiente que estimula a curiosidade e o aprendizado lúdico."
                                cargahoraria="Integral/Parcial"
                                slug="#"
                                colorClass="text-secondary"
                                features={[
                                    "Projeto de Vida Infantil",
                                    "Inglês desde o 1º ano",
                                    "Metodologia Ativa & Gamificação"
                                ]}
                            />

                            {/* Card Fundamental II */}
                            <CourseCard
                                titulo="Fundamental II"
                                categoria="Ensino Fundamental II"
                                img="/img/home/fundamental.png"
                                sobre="Base acadêmica sólida com foco no desenvolvimento do protagonismo e pensamento crítico do aluno."
                                cargahoraria="Matutino/Vespertino"
                                slug="#"
                                colorClass="text-secondary"
                            />
                        </div>
                    ) : (
                        <>
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
                                        <CourseCard
                                            key={index}
                                            titulo={course.titulo}
                                            categoria={course.categoria}
                                            img={course.img}
                                            sobre={course.sobre ? course.sobre.substring(0, 100) + '...' : 'Saiba mais sobre este curso.'}
                                            cargahoraria={course.cargahoraria}
                                            slug={course.slug}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <i className="fas fa-search text-6xl text-gray-200 mb-6"></i>
                                    <h3 className="text-2xl font-bold text-gray-500">Nenhum curso encontrado nesta categoria.</h3>
                                    <Link to="/" className="btn-primary mt-8 inline-block">Voltar para Início</Link>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Courses;
