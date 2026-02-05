
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/courses';

const CourseDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const course = courses.find((c) => c.slug === slug);

    useEffect(() => {
        if (!course) {
            // Optional: Redirect to courses list or show 404
            // navigate('/cursos/profissionalizante'); 
        }
    }, [course, navigate]);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Curso não encontrado</h1>
                <Link to="/" className="btn-primary">Voltar para Início</Link>
            </div>
        );
    }

    const modulesList = course.modulos.split(';').map(m => m.trim()).filter(m => m.length > 0);

    const getCategoryUrl = (category: string) => {
        const cat = category.toLowerCase();
        if (cat.includes('técnico') || cat.includes('tecnico')) return '/cursos/tecnico';
        if (cat.includes('profissionalizante')) return '/cursos/profissionalizante';
        if (cat.includes('fundamental')) return '/cursos/fundamental';
        if (cat.includes('médio') || cat.includes('medio')) return '/cursos/medio';
        return '/cursos/profissionalizante';
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>{course.titulo} | ITEC Ensino</title>
                <meta name="description" content={`Saiba tudo sobre o curso de ${course.titulo}. ${course.sobre.substring(0, 150)}...`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Course",
                        "name": course.titulo,
                        "description": course.sobre,
                        "provider": {
                            "@type": "EducationalOrganization",
                            "name": "ITEC Ensino",
                            "sameAs": "https://www.itecensino.com.br"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero / Header */}
            <div className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                {/* Background Image Overlay if available, else gradient */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
                    style={{ backgroundImage: `url(${course.img})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 mix-blend-multiply"></div>

                <div className="container-custom relative z-10 text-white">
                    <div className="flex flex-col md:flex-row items-end gap-6">
                        <div className="flex-1">
                            <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 text-white shadow-sm">
                                {course.categoria}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight text-white drop-shadow-sm">{course.titulo}</h1>
                            <div className="flex items-center gap-2 text-sm text-gray-200">
                                <Link to="/" className="hover:text-white transition-colors">Início</Link>
                                <span>/</span>
                                <Link to={getCategoryUrl(course.categoria)} className="hover:text-white transition-colors">Cursos</Link>
                                <span>/</span>
                                <span className="text-white font-medium">{course.titulo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Content */}
                        <div className="flex-1 space-y-12">

                            {/* Sobre */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <i className="fas fa-info-circle"></i>
                                    </span>
                                    Sobre o Curso
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                    {course.sobre}
                                </p>
                            </div>

                            {/* Área de Atuação */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                        <i className="fas fa-briefcase"></i>
                                    </span>
                                    Área de Atuação
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                                    {course.area}
                                </p>
                            </div>

                            {/* Modulos (Display as list if lengthy, or grid) */}
                            {modulesList.length > 0 && (
                                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                                            <i className="fas fa-layer-group"></i>
                                        </span>
                                        Conteúdo Programático
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {modulesList.map((modulo, idx) => (
                                            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                                <span className="text-gray-700 font-medium">{modulo}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:w-1/3 space-y-8">

                            {/* Info Card */}
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Informações Rápidas</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xl">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Carga Horária</p>
                                            <p className="text-gray-900 font-bold text-lg">{course.cargahoraria}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 text-xl">
                                            <i className="far fa-calendar-alt"></i>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Duração Estimada</p>
                                            <p className="text-gray-900 font-bold text-lg">{course.tempo}</p>
                                        </div>
                                    </div>

                                    {course.turnos && (
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl">
                                                <i className="far fa-sun"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Turnos</p>
                                                <p className="text-gray-900 font-bold text-sm whitespace-pre-line">{course.turnos.replace(/;/g, '\n')}</p>
                                            </div>
                                        </div>
                                    )}

                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <Link to="/matricula" className="btn-primary w-full text-center flex items-center justify-center gap-2 py-4 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                                        Matricule-se Agora <i className="fas fa-arrow-right"></i>
                                    </Link>
                                    <a
                                        href={`https://wa.me/5524974003287?text=Olá, gostaria de saber mais sobre o curso de ${course.titulo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full bg-white border-2 border-green-500 text-green-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
                                    >
                                        <i className="fab fa-whatsapp text-xl"></i> Tire suas dúvidas
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;
