
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Política de Privacidade | ITEC Ensino</title>
            </Helmet>

            <div className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black mb-3">Política de Privacidade</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="text-secondary">•</span>
                        <span className="text-white">Privacidade</span>
                    </div>
                </div>
            </div>

            <section className="py-20">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-gray-100 prose prose-lg prose-blue max-w-none">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">1. Coleta de Informações</h2>
                        <p className="text-gray-600 mb-8">
                            Coletamos informações que você nos fornece diretamente, como quando você preenche nossos formulários de matrícula ou contato. Essas informações podem incluir seu nome, e-mail, número de telefone e curso de interesse.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">2. Uso das Informações</h2>
                        <p className="text-gray-600 mb-8">
                            As informações coletadas são utilizadas para processar seu interesse em nossos cursos, responder às suas dúvidas e enviar comunicações importantes sobre o ITEC Ensino.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">3. Proteção de Dados</h2>
                        <p className="text-gray-600 mb-8">
                            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">4. Cookies</h2>
                        <p className="text-gray-600 mb-8">
                            Utilizamos cookies para melhorar sua experiência em nosso site, entender como os visitantes interagem com nossas páginas e personalizar conteúdos.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">5. Contato</h2>
                        <p className="text-gray-600">
                            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <span className="font-bold text-primary">contato@itecensino.com.br</span>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
