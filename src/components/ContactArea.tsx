import React, { useState } from 'react';

const ContactArea: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Formulário enviado! (Simulação)");
        // Implement actual submission logic here
    };

    // Light theme input classes matching Enrollment page
    const inputClasses = () => `
        w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 
        focus:border-secondary focus:ring-2 focus:ring-secondary/20 
        outline-none transition-all font-medium text-gray-900 placeholder-gray-400
    `;

    const labelClasses = "text-sm font-bold text-gray-700 uppercase tracking-wider mb-2 block";

    return (
        <div className="py-24 bg-gray-50 relative overflow-hidden" id="contato">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Content - Contact Info (kept on left, updated visuals) */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div>
                            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Fale Conosco</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Estamos aqui para <span className="text-primary">ajudar você</span>
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Tem alguma dúvida sobre nossos cursos ou processo de matrícula? Entre em contato pelos canais abaixo.
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-4">
                            <a href="tel:2435120102" className="group flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <i className="fas fa-phone-alt text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Ligue para nós</p>
                                    <p className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">(24) 3512-0102</p>
                                </div>
                            </a>

                            <a href="https://wa.me/5524974003287" target='_blank' className="group flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                    <i className="fab fa-whatsapp text-2xl"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">WhatsApp Oficial</p>
                                    <p className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">(24) 97400-3287</p>
                                </div>
                            </a>

                            <div className="group flex items-center gap-4 p-6 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50">
                                <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                    <i className="fas fa-envelope text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Envie um E-mail</p>
                                    <p className="text-lg font-bold text-gray-900">contato@itecensino.com.br</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form - Styled to match Enrollment */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900">Envie uma mensagem</h3>
                                <p className="text-gray-500 mt-2">Preencha o formulário abaixo e responderemos o mais breve possível.</p>
                            </div>

                            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className={labelClasses}>Nome Completo</label>
                                    <input
                                        name="name"
                                        id="name"
                                        placeholder="Digite seu nome"
                                        className={inputClasses()}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className={labelClasses}>Telefone / WhatsApp</label>
                                        <input
                                            name="phone"
                                            id="phone"
                                            type="tel"
                                            placeholder="(00) 00000-0000"
                                            className={inputClasses()}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className={labelClasses}>E-mail</label>
                                        <input
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            className={inputClasses()}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className={labelClasses}>Como podemos ajudar?</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Escreva sua mensagem..."
                                        className={`${inputClasses()} h-40 resize-none`}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full btn-secondary py-4 text-lg shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    <span>Enviar Mensagem</span>
                                    <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Google Maps Embed */}
                <div className="mt-20 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white shadow-gray-200/50 relative h-[450px] group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.475459392!2d-44.1102!3d-22.5185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea29f8f4a!2sRua%20Sessenta%2C%2060%20-%20Vila%20Santa%20Cecília%2C%20Volta%20Redonda%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização ITEC Volta Redonda"
                        className="filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    ></iframe>

                    {/* Floating Info Badge on Map */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl hidden md:block border border-white/50 animate-fade-in-up">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Nossa Unidade Sede</p>
                                <p className="text-xs text-gray-500">Vila Santa Cecília, Volta Redonda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
