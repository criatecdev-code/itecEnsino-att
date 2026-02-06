import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const Blog: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Blog | ITEC Ensino - Notícias e Dicas</title>
                <meta name="description" content="Fique por dentro das novidades, eventos e dicas do ITEC Ensino. O blog oficial para quem quer transformar sua carreira." />
            </Helmet>

            {/* Header / Breadcrumb */}
            <div className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black mb-3 animate-fade-in-up text-white drop-shadow-sm">Notícias ITEC</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-white/70 animate-fade-in-up delay-100">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="text-secondary">•</span>
                        <span className="text-white font-medium">Blog</span>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, index) => (
                            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                                <div className="relative h-60 overflow-hidden shrink-0">
                                    <img
                                        src={post.imagem}
                                        alt={post.titulo}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
                                        Notícia
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-3">
                                        <i className="far fa-calendar-alt"></i> <span>20 Mar, 2026</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-3">
                                        {post.titulo}
                                    </h3>
                                    
                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <button className="text-secondary font-bold text-sm tracking-wide group-hover:underline decoration-2 underline-offset-4 flex items-center gap-2">
                                            Ler Mais <i className="fas fa-arrow-right text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
