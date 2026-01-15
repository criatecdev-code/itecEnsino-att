import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactArea from '../components/ContactArea';

const Contact: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Fale Conosco | ITEC Ensino - Entre em Contato</title>
                <meta name="description" content="Entre em contato com o ITEC Ensino. Tire suas dúvidas sobre matrículas, cursos e bolsas. Estamos prontos para atender você via WhatsApp, telefone ou e-mail." />
            </Helmet>

            {/* Reuse existing ContactArea which already contains the form and map */}
            {/* Removed duplicate ContactArea */}

            {/* Header / Breadcrumb - Consistent with About & Courses Page */}
            <div className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black mb-3 animate-fade-in-up">Entre em Contato</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-gray-400 animate-fade-in-up delay-100">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="text-secondary">•</span>
                        <span className="text-white">Contato</span>
                    </div>
                </div>
            </div>

            {/* Reuse existing ContactArea which already contains the form and map */}
            <ContactArea />

        </>
    );
};

export default Contact;
