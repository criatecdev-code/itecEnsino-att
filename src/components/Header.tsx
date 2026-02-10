import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const location = useLocation();
    const headerRef = useRef<HTMLHeadElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close dropdowns on route change
    useEffect(() => {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* Main Navigation - Floating Header */}
            <header ref={headerRef} className="fixed w-full z-50 top-6 px-4 md:px-10 pointer-events-none">
                <div className="container-custom max-w-7xl mx-auto flex justify-between items-center pointer-events-none">

                    {/* Logo - On the Left */}
                    <div className="flex-shrink-0 pointer-events-auto">
                        <Link to="/" className="block bg-white/95 backdrop-blur-md p-2.5 px-4 rounded-2xl shadow-xl border border-white/20 hover:bg-white transition-all transform hover:scale-105">
                            <img
                                className="h-7 md:h-8 transition-all duration-300"
                                src={`${import.meta.env.BASE_URL}img/logo/logo.png`}
                                alt="ITEC Ensino"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered Pill */}
                    <nav className="hidden lg:flex items-center space-x-1 bg-white/95 backdrop-blur-md px-1.5 py-1.5 rounded-full shadow-xl border border-white/20 pointer-events-auto">
                        <Link to="/" className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all duration-300 ${location.pathname === '/' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:text-primary'}`}>
                            Home
                        </Link>

                        <Link to="/sobrenos" className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all duration-300 ${location.pathname === '/sobrenos' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:text-primary'}`}>
                            Sobre Nós
                        </Link>

                        {/* Dropdown for Cursos */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('cursos')}
                                className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all duration-300 flex items-center gap-1 ${location.pathname.includes('/cursos') || openDropdown === 'cursos' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                            >
                                Cursos <i className={`fas fa-chevron-down text-[10px] ml-0.5 transition-transform ${openDropdown === 'cursos' ? 'rotate-180' : ''}`}></i>
                            </button>

                            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 z-50 border border-gray-100 ${openDropdown === 'cursos' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                <Link to="/cursos/tecnico" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Técnico</span>
                                    <span className="block text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Formação completa</span>
                                </Link>
                                <Link to="/cursos/fundamental" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Ensino Fundamental</span>
                                    <span className="block text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">1º ao 9º Ano</span>
                                </Link>
                                <Link to="/cursos/medio" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Ensino Médio</span>
                                    <span className="block text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Formação Geral</span>
                                </Link>
                                <Link to="/cursos/profissionalizante" className="block px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Profissionalizante</span>
                                    <span className="block text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">Cursos Rápidos</span>
                                </Link>
                            </div>
                        </div>


                        <Link to="/contato" className={`px-5 py-2 rounded-full text-sm font-extrabold transition-all duration-300 ${location.pathname === '/contato' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:text-primary'}`}>
                            Contato
                        </Link>
                    </nav>

                    {/* Action Buttons - On the Right */}
                    <div className="flex items-center gap-4 pointer-events-auto">
                        {/* Dropdown for Área do Aluno */}
                        <div className="relative hidden sm:block">
                            <button
                                onClick={() => toggleDropdown('aluno')}
                                className={`bg-secondary px-6 py-2.5 rounded-full text-sm font-extrabold text-white shadow-xl shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-0.5 transition-all flex items-center gap-2 ${openDropdown === 'aluno' ? 'brightness-110' : ''}`}
                            >
                                Área do Aluno <i className={`fas fa-chevron-down text-[10px] transition-transform ${openDropdown === 'aluno' ? 'rotate-180' : ''}`}></i>
                            </button>

                            <div className={`absolute top-full right-0 mt-4 w-72 bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 z-50 border border-gray-100 ${openDropdown === 'aluno' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                <a href="https://www.itecqualificacao.com.br/campus/" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Cursos Profissionalizantes</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Acessar Portal do Aluno</span>
                                </a>
                                <a href="https://portal.selsensino.com.br/" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Cursos Técnicos</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Acessar Portal do Aluno</span>
                                </a>
                                <a href="https://meuestagio.app.br/" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Meu Estágio</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Portal de estágios</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden bg-white/95 backdrop-blur-md text-primary p-3 rounded-full shadow-xl border border-white/20 hover:bg-white transition-all flex items-center justify-center h-10 w-10"
                            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden mt-4 overflow-hidden transition-all duration-500 ease-in-out pointer-events-auto ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden mx-auto max-w-[calc(100vw-2rem)]">
                        <nav className="flex flex-col p-6 space-y-1">
                            <Link to="/" onClick={toggleMobileMenu} className="px-5 py-3 rounded-xl text-gray-700 font-extrabold hover:bg-primary/5 hover:text-primary transition-all text-sm">Início</Link>
                            <Link to="/sobrenos" onClick={toggleMobileMenu} className="px-5 py-3 rounded-xl text-gray-700 font-extrabold hover:bg-primary/5 hover:text-primary transition-all text-sm">Sobre Nós</Link>
                            <Link to="/cursos/tecnico" onClick={toggleMobileMenu} className="px-5 py-3 rounded-xl text-gray-700 font-extrabold hover:bg-primary/5 hover:text-primary transition-all text-sm">Cursos</Link>
                            <Link to="/contato" onClick={toggleMobileMenu} className="px-5 py-3 rounded-xl text-gray-700 font-extrabold hover:bg-primary/5 hover:text-primary transition-all text-sm">Contato</Link>

                            <div className="pt-6 space-y-3 px-2">
                                <a href="https://www.itecqualificacao.com.br/campus/" target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-50 text-gray-700 py-3.5 rounded-2xl font-bold text-xs border border-gray-100 transition-all active:scale-95">
                                    Portal Profissionalizante
                                </a>
                                <a href="https://portal.selsensino.com.br/" target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-50 text-gray-700 py-3.5 rounded-2xl font-bold text-xs border border-gray-100 transition-all active:scale-95">
                                    Portal Técnico
                                </a>
                                <Link to="/matricula" onClick={toggleMobileMenu} className="block text-center bg-secondary text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-secondary/20 transition-all active:scale-95">
                                    Quero me Matricular
                                </Link>
                            </div>
                        </nav>

                        <div className="bg-gray-50/50 py-6 flex justify-center space-x-8 text-gray-400 border-t border-gray-100">
                            <a href="https://www.facebook.com/itec.ensino" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f text-xl hover:text-primary"></i></a>
                            <a href="https://www.instagram.com/itec.ensino/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram text-xl hover:text-primary"></i></a>
                            <a href="https://wa.me/5524974003287" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp text-xl hover:text-primary"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
