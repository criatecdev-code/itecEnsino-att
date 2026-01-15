import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Main Navigation - Fixed at top, always white */}
            <header className={`fixed w-full z-50 top-0 h-20 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '!h-auto' : ''}`}>

                <div className="container-custom flex justify-between items-center h-full">
                    {/* Logo - Always dark (brightness-0 makes white logo black if it's white, assuming that's the trick used previously. If the logo is normally color, brightness-0 makes it black. Let's check the image. The image shows a BLACK ITEC logo with colored icon. brightness-0 might make EVERYTHING black. The original code used brightness-0 on scroll. Let's stick to that if it produced the black text effect, but careful with the icon colors. Actually, if valid logo is colored, brightness-0 makes it all black. The user image shows colored icon and black text. The original code was: `isScrolled ? '... brightness-0' : '...'`. If `brightness-0` was used, it forces black. The user says "padrao preta e branco", maybe they mean the text. Let's assume the 'scrolled' look was what they liked, as they said "mix de ensino...". Wait, they said "padrao preta e branco com o botãos como está na segunda imagem". The second image has a black "ITEC" text and colored symbol. If the original logo has white text, `brightness-0` makes it black. Let's trust the previous "scrolled" logic for now, but maybe remove brightness-0 if the logo is actually colored and we want colors. Let's leave brightness-0 if that was the "active" state, or maybe just remove the filter if the logo is naturally dark/colored. Let's look at the code execution again.
                    Original: `isScrolled ? 'h-10 md:h-12 brightness-0' : 'h-12 md:h-16'`
                    If I use `brightness-0` effectively, it might turn the colored icon black too.
                    Let's try to just keep the size consistent and maybe NOT force brightness-0 unless the logo needs it against white. 
                    Actually, if the logo is `/img/logo/logo.png`, it likely has the full color. On a transparent background (dark hero), it might have white text. If `brightness-0` was used for white bg, it implies the logo needs darkening.
                    However, usually `brightness: 0` makes everything black. The user's image shows the icon has COLORS (blue/green/pink). `brightness-0` would kill that.
                    The user attached an image where the logo has COLORS.
                    So `brightness-0` is BAD if it kills the icon colors.
                    Wait, looking at the code `brightness-0` was used in `isScrolled`. If the user liked the "scrolled" look (which is usually the white bar), maybe they didn't realize it makes the icon black? OR maybe the logo file used IS different or I am misunderstanding.
                    Actually, let's look at the user provided image 1 (second image).
                    It shows: ITEC text is Black. Icon is Black/White? No, it looks like just the shape.
                    Actually.. in the image "uploaded_image_1_...", the logo seems to be purely black.
                    In "uploaded_image_0_...", the logo seems colorful (on the left) but it's hard to tell.
                    Correction: "uploaded_image_1" shows a logo that looks like `ITEC` in black. The icon is also black.
                    So `brightness-0` is probably correct to achieve that "Preto e branco" look they asked for ("padrao preta e branco").
                    So I will keep `brightness-0`.
                    */
                    }
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <img
                                className="h-10 md:h-12 transition-all duration-300 brightness-0"
                                src="/img/logo/logo.png"
                                alt="ITEC Ensino"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {/* Static Links */}
                        <Link to="/" className={`text-sm uppercase tracking-wide font-bold transition-all duration-300 relative group py-2 ${location.pathname === '/' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                            Início
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>

                        <Link to="/sobrenos" className={`text-sm uppercase tracking-wide font-bold transition-all duration-300 relative group py-2 ${location.pathname === '/sobrenos' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                            Sobre Nós
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/sobrenos' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>

                        {/* Dropdown for Cursos */}
                        <div className="relative group">
                            <button className={`text-sm uppercase tracking-wide font-bold transition-all duration-300 relative py-2 flex items-center gap-1 ${location.pathname.includes('/cursos') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                                Cursos <i className="fas fa-chevron-down text-xs ml-1 transition-transform group-hover:rotate-180"></i>
                            </button>

                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl overflow-hidden transform opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                                <Link to="/cursos/tecnico" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Técnico</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Formação completa</span>
                                </Link>
                                <Link to="/cursos/fundamental" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Fundamental & Médio</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Educação Básica</span>
                                </Link>
                                <Link to="/cursos/profissionalizante" className="block px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Profissionalizante</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Cursos Rápidos</span>
                                </Link>
                            </div>
                        </div>

                        {/* Dropdown for Área do Aluno */}
                        <div className="relative group">
                            <button className={`text-sm uppercase tracking-wide font-bold transition-all duration-300 relative py-2 flex items-center gap-1 ${location.pathname.includes('/portal') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                                Área do Aluno <i className="fas fa-chevron-down text-xs ml-1 transition-transform group-hover:rotate-180"></i>
                            </button>

                            <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl overflow-hidden transform opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                                <a href="https://www.itecqualificacao.com.br/admin/" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Itec Digital</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Acesso ao sistema</span>
                                </a>
                                <a href="https://meuestagio.itecensino.com.br/" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <span className="block text-primary font-bold text-sm">Meu Estágio</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">Portal de estágios</span>
                                </a>
                            </div>
                        </div>

                        <Link to="/contato" className={`text-sm uppercase tracking-wide font-bold transition-all duration-300 relative group py-2 ${location.pathname === '/contato' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                            Contato
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === '/contato' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>

                        <Link to="/matricula" className="btn-secondary px-6 py-2.5 text-sm uppercase tracking-wider shadow-lg shadow-green-600/20 hover:shadow-green-600/40">
                            Matricule-se
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden text-gray-700 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white border-t border-gray-100 shadow-xl pb-6">
                        <nav className="flex flex-col p-6 space-y-4">
                            {['Início', 'Sobre Nós', 'Cursos', 'Área do Aluno', 'Contato'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-700 font-medium text-lg border-b border-gray-50 pb-2 hover:text-primary hover:pl-2 transition-all"
                                >
                                    {item}
                                </a>
                            ))}
                            <a href="/matricula" className="btn-primary text-center w-full mt-4">
                                Quero me Matricular
                            </a>
                        </nav>

                        <div className="px-6 pt-2 flex justify-center space-x-6 text-gray-400">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f text-xl hover:text-primary"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram text-xl hover:text-primary"></i></a>
                            <a href="https://wa.me/5524974003287" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp text-xl hover:text-primary"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
