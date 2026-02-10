import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogArea: React.FC = () => {
    return (
        <div className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 border-l-4 border-secondary pl-6">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Nosso Blog</span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-800">
                            Fique por dentro das <br /><span className="text-primary">Novidades</span>
                        </h3>
                    </div>
                    <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors uppercase tracking-wider text-sm">
                        Ver todas as notícias <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post, index) => (
                        <Link to="/blog" key={index} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 h-60">
                                <img
                                    src={post.imagem}
                                    alt={post.titulo}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide text-primary shadow-sm">
                                    Notícia
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-3">
                                    <i className="far fa-calendar-alt"></i> <span>20 Mar, 2026</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                    {post.titulo}
                                </h3>
                                <span className="text-secondary font-bold text-sm tracking-wide group-hover:underline decoration-2 underline-offset-4">
                                    Ler Mais
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12 md:hidden">
                    <Link to="/blog" className="btn-primary w-full inline-block">Ver todas as notícias</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogArea;
