import React, { useState } from 'react';

const ContactArea: React.FC = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field: string) => setFocusedField(field);
    const handleBlur = () => setFocusedField(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Formulário enviado! (Simulação)");
        // Implement actual submission logic here
    };

    const inputClasses = (name: string) => `
        w-full px-5 py-4 rounded-xl border-2 outline-none transition-all duration-300 bg-gray-50
        ${focusedField === name ? 'border-secondary ring-4 ring-secondary/10 bg-white' : 'border-gray-200 hover:border-gray-300'}
    `;

    return (
        <div className="section-padding bg-primary relative overflow-hidden">
            {/* Abstract Shapes overlay */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-white">
                        <span className="inline-block px-4 py-1 bg-white/10 rounded-full border border-white/20 text-sm font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                            Fale Conosco
                        </span>
                        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                            Vamos construir o seu <br />
                            <span className="text-secondary">FUTURO?</span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-lg leading-relaxed font-light">
                            Entre em contato conosco, tire suas dúvidas e garanta condições especiais para sua matrícula.
                        </p>

                        <div className="space-y-6">
                            <a href="tel:2435120102" className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10">
                                <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-xl text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200 uppercase tracking-widest font-bold">Ligue agora</p>
                                    <p className="text-2xl font-bold">(24) 3512-0102</p>
                                </div>
                            </a>

                            <a href="https://wa.me/5524974003287" target='_blank' className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10">
                                <div className="w-14 h-14 bg-green-500 flex items-center justify-center rounded-xl text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200 uppercase tracking-widest font-bold">WhatsApp</p>
                                    <p className="text-2xl font-bold">(24) 97400-3287</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Premium Form Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>

                            <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        name="name"
                                        placeholder="Seu nome completo"
                                        className={inputClasses('name')}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Seu telefone"
                                            className={inputClasses('phone')}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('phone')}
                                            onBlur={handleBlur}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Seu melhor e-mail"
                                            className={inputClasses('email')}
                                            onChange={handleChange}
                                            onFocus={() => handleFocus('email')}
                                            onBlur={handleBlur}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Sobre o que você gostaria de falar?"
                                        className={`${inputClasses('message')} h-36 resize-none`}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={handleBlur}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full bg-primary hover:bg-secondary text-white font-bold py-5 rounded-xl shadow-xl shadow-blue-900/10 hover:shadow-green-900/20 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                                    type="submit"
                                >
                                    Enviar Mensagem <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactArea;
