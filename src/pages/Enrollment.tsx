import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/courses';

const Enrollment: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        courseType: '',
        interest: '',
        period: ''
    });

    // Filtered courses based on selected type
    const filteredCourses = useMemo(() => {
        if (!formData.courseType) return [];
        const type = formData.courseType.toLowerCase();
        
        return courses.filter(course => {
            const courseCat = course.categoria.toLowerCase();
            if (type === 'técnico' || type === 'tecnico') return courseCat.includes('técnico') || courseCat.includes('tecnico');
            if (type === 'profissionalizante') return courseCat.includes('profissionalizante');
            if (type === 'fundamental') return courseCat.includes('fundamental');
            if (type === 'médio' || type === 'medio') return courseCat.includes('médio') || courseCat.includes('medio');
            return true;
        });
    }, [formData.courseType]);

    // Current selected course data
    const selectedCourseData = useMemo(() => {
        if (!formData.interest) return null;
        return courses.find(c => c.titulo === formData.interest);
    }, [formData.interest]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        setFormData(prev => {
            const newState = { ...prev, [name]: value };
            
            // Reset interest if course type changes
            if (name === 'courseType') {
                newState.interest = '';
            }
            
            return newState;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        let message = `Olá, gostaria de me matricular!\n\n`;
        message += `*Nome:* ${formData.name}\n`;
        message += `*Telefone:* ${formData.phone}\n`;
        message += `*E-mail:* ${formData.email}\n`;
        message += `*Nível:* ${formData.courseType}\n`;
        message += `*Curso:* ${formData.interest}\n`;
        message += `*Turno:* ${formData.period}`;
        
        if (selectedCourseData) {
            message += `\n\n*Informações do Curso Selecionado:*\n`;
            message += `- Duração: ${selectedCourseData.tempo}\n`;
            if (selectedCourseData.categoria.toLowerCase().includes('técnico')) {
                message += `- Certificação: Diploma Técnico\n`;
            } else {
                message += `- Carga Horária: ${selectedCourseData.cargahoraria}\n`;
            }
        }

        const whatsappUrl = `https://wa.me/552435120102?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white">
            <Helmet>
                <title>Matrícula Online | ITEC Ensino - Garanta sua Vaga</title>
                <meta name="description" content="Realize sua matrícula online no ITEC Ensino de forma rápida e segura. Garanta sua vaga nos melhores cursos técnicos e profissionalizantes da região." />
            </Helmet>
            {/* Header / Breadcrumb - Consistent with other pages */}
            <div className="relative pt-28 pb-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-primary/60 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black mb-3 animate-fade-in-up text-white">Matrícula Online</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-gray-300 animate-fade-in-up delay-100">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="text-secondary">•</span>
                        <span className="text-white">Matricule-se</span>
                    </div>
                </div>
            </div>

            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Form Section */}
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>

                                <div className="mb-10">
                                    <h2 className="text-3xl font-black text-gray-900 mb-4">Garanta sua Vaga</h2>
                                    <p className="text-gray-500">
                                        Preencha o formulário abaixo para iniciar seu processo de matrícula. Nossa equipe entrará em contato para finalizar os detalhes.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Nome Completo</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                                placeholder="Digite seu nome"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-bold text-gray-700 uppercase tracking-wider">WhatsApp / Telefone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                                                title="Formato esperado: (24) 99999-9999"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                                placeholder="(00) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">E-mail</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                                placeholder="seu@email.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="courseType" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Nível de Ensino</label>
                                            <div className="relative">
                                                <select
                                                    id="courseType"
                                                    name="courseType"
                                                    value={formData.courseType}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Selecione...</option>
                                                    <option value="Técnico">Curso Técnico</option>
                                                    <option value="Profissionalizante">Curso Profissionalizante</option>
                                                    <option value="Fundamental">Ensino Fundamental</option>
                                                    <option value="Médio">Ensino Médio</option>
                                                </select>
                                                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="interest" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Curso de Interesse</label>
                                            <div className="relative">
                                                <select
                                                    id="interest"
                                                    name="interest"
                                                    value={formData.interest}
                                                    onChange={handleChange}
                                                    required
                                                    disabled={!formData.courseType}
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <option value="">
                                                        {!formData.courseType ? 'Selecione o nível acima...' : 'Selecione o curso...'}
                                                    </option>
                                                    {filteredCourses.map((course, idx) => (
                                                        <option key={idx} value={course.titulo}>{course.titulo}</option>
                                                    ))}
                                                </select>
                                                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="period" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Turno de Interesse</label>
                                            <div className="relative">
                                                <select
                                                    id="period"
                                                    name="period"
                                                    value={formData.period}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Selecione...</option>
                                                    <option value="Manhã">Manhã</option>
                                                    <option value="Tarde">Tarde</option>
                                                    <option value="Noite">Noite</option>
                                                    <option value="Sábado / Integral">Sábado / Integral</option>
                                                </select>
                                                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Course Preview Info */}
                                    {selectedCourseData && (
                                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 animate-fade-in">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                                    <img src={selectedCourseData.img} alt={selectedCourseData.titulo} className="w-8 h-8 object-cover rounded" />
                                                </div>
                                                <div className="space-y-3 flex-1">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 text-sm">{selectedCourseData.titulo}</h4>
                                                        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{selectedCourseData.sobre}</p>
                                                    </div>
                                                    
                                                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-primary/10">
                                                        <div className="flex items-center gap-2">
                                                            <i className="far fa-calendar-alt text-primary text-xs"></i>
                                                            <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">{selectedCourseData.tempo}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <i className="far fa-clock text-primary text-xs"></i>
                                                            <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">
                                                                {selectedCourseData.categoria.toLowerCase().includes('técnico') ? 'Diploma Técnico' : selectedCourseData.cargahoraria}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full btn-secondary py-4 text-lg shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                        >
                                            <i className="fab fa-whatsapp"></i> Iniciar Matrícula via WhatsApp
                                        </button>
                                        <p className="text-center text-xs text-gray-400 mt-4">
                                            Ao clicar, você será redirecionado para nosso atendimento oficial no WhatsApp.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="w-full lg:w-1/3 space-y-8">
                            {/* Benefits Card */}
                            <div className="bg-primary text-white rounded-[2rem] p-8 shadow-xl shadow-primary/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-6">Por que estudar no ITEC?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <i className="fas fa-check-circle mt-1 text-secondary"></i>
                                            <span className="font-medium text-gray-100">Metodologia prática focada no mercado de trabalho</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="fas fa-check-circle mt-1 text-secondary"></i>
                                            <span className="font-medium text-gray-100">Laboratórios modernos e equipados</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="fas fa-check-circle mt-1 text-secondary"></i>
                                            <span className="font-medium text-gray-100">Professores atuantes na área</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <i className="fas fa-check-circle mt-1 text-secondary"></i>
                                            <span className="font-medium text-gray-100">Alta taxa de empregabilidade</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Dúvidas?</h3>
                                <div className="space-y-4 text-gray-600">
                                    <p className="flex items-center gap-3">
                                        <i className="fas fa-phone text-primary"></i>
                                        <span>(24) 3512-0102</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <i className="fab fa-whatsapp text-primary"></i>
                                        <span>(24) 3512-0102</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <i className="fas fa-envelope text-primary"></i>
                                        <span>contato@itecensino.com.br</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Enrollment;
