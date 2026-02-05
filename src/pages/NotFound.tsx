
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-24">
            <Helmet>
                <title>404 - Página Não Encontrada | ITEC Ensino</title>
            </Helmet>
            <div className="text-center max-w-lg">
                <div className="mb-8 relative">
                    <h1 className="text-[12rem] font-black text-gray-200 leading-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className="fas fa-exclamation-triangle text-6xl text-primary animate-bounce"></i>
                    </div>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Ops! Página Não Encontrada</h2>
                <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                    Parece que o caminho que você tentou acessar não existe ou foi movido.
                    Que tal voltar para o início e encontrar o que procura?
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 group"
                >
                    <i className="fas fa-home transition-transform group-hover:scale-110"></i>
                    Voltar para o Início
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
