import React from 'react';
import { Link } from 'react-router-dom';
import ContactArea from '../components/ContactArea';

const Contact: React.FC = () => {
    return (
        <div className="bg-white">
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

        </div>
    );
};

export default Contact;
