import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseArea: React.FC = () => {
    // Filter to show only top 6 or featured courses for the home page to avoid clutter
    // Filter to show a mix of courses for the home page
    const fundamental = courses.filter(c => c.categoria.includes('Fundamental')).slice(0, 1);
    const medio = courses.filter(c => c.categoria.includes('Médio')).slice(0, 1);
    const tecEnfermagem = courses.filter(c => c.titulo.includes('Enfermagem')).slice(0, 1);
    const tecRadio = courses.filter(c => c.titulo.includes('Radiologia')).slice(0, 1);
    // Get 2 random or specific professional courses (avoiding duplicates if logic was more complex, but here simple selection is fine)
    const pro = courses.filter(c => c.categoria.includes('Profissionalizantes')).slice(0, 2);

    const displayedCourses = [...fundamental, ...medio, ...tecEnfermagem, ...tecRadio, ...pro];

    return (
        <div className="section-padding bg-gray-50 bg-[url('/img/pattern/map.png')] bg-no-repeat bg-center">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-fade-in-up">
                        Educação de Qualidade
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 animate-fade-in-up delay-100">
                        Nossas Modalidades
                    </h2>
                    <p className="text-gray-500 text-lg animate-fade-in-up delay-200">
                        Explore nossos cursos e encontre o caminho ideal para o seu futuro profissional.
                        Do ensino fundamental à especialização técnica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCourses.map((course, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Card Image */}
                            <div className="relative h-64 overflow-hidden">
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
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem]">
                                    {course.titulo}
                                </h3>

                                <Link
                                    to={`/curso/${course.slug}`}
                                    className="w-full btn-primary text-center group-hover:bg-blue-800 flex items-center justify-center gap-2"
                                >
                                    Ver Detalhes <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link to="/cursos" className="inline-block border-2 border-primary text-primary font-bold py-3 px-10 rounded-full hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                        Ver Todos os Cursos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseArea;
