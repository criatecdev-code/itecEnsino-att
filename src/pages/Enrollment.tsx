import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Enrollment: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        courseType: '',
        interest: '',
        period: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., sending to an API or WhatsApp
        const message = `Olá, gostaria de me matricular!\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nTipo de Curso: ${formData.courseType}\nInteresse: ${formData.interest}\nTurno: ${formData.period}`;
        const whatsappUrl = `https://wa.me/5524974003287?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white">
            <Helmet>
                <title>Matrícula Online | ITEC Ensino - Garanta sua Vaga</title>
                <meta name="description" content="Realize sua matrícula online no ITEC Ensino de forma rápida e segura. Garanta sua vaga nos melhores cursos técnicos e profissionalizantes da região." />
            </Helmet>
            {/* Header / Breadcrumb - Consistent with other pages */}
            <div className="relative py-20 bg-gray-900 overflow-hidden">
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
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                                placeholder="(00) 00000-0000"
                                            />
                                        </div>
                                    </div>

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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                                    <option value="Fundamental">Ensino Fundamental</option>
                                                    <option value="Médio">Ensino Médio</option>
                                                    <option value="Profissionalizante">Curso Profissionalizante</option>
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
                                                    <option value="Integral">Integral (se disponível)</option>
                                                </select>
                                                <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="interest" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Curso de Interesse (Opcional)</label>
                                        <input
                                            type="text"
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                            placeholder="Ex: Enfermagem, Robótica, Ensino Médio..."
                                        />
                                    </div>

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
                                        <span>(24) 97400-3287</span>
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
