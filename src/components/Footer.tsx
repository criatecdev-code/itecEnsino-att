import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 font-sans">
            {/* Newsletter / CTA Strip */}
            <div className="bg-white border-t border-gray-100 py-16 relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="bg-primary rounded-3xl p-10 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="text-center lg:text-left z-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Pronto para começar?</h2>
                            <p className="text-blue-100 text-lg">Matricule-se hoje e transforme o seu futuro profissional.</p>
                        </div>
                        <div className="z-10 flex flex-col sm:flex-row gap-4">
                            <Link to="/matricula" className="btn-secondary bg-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-white hover:text-secondary transition-colors inline-block text-center">
                                Inscreva-se Agora
                            </Link>
                            <Link to="/contato" className="px-8 py-4 rounded-xl font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-colors text-center inline-block">
                                Fale com Consultor
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Background pattern for strip */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 -z-0"></div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-gray-900 pt-20 pb-12 border-t border-gray-800">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Column 1: Brand */}
                        <div className="space-y-6">
                            <div className="bg-white p-3 rounded-xl inline-block w-48">
                                <img src="/img/logo/logo_footer.png" alt="ITEC" className="w-full brightness-0" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Referência em ensino técnico e profissionalizante na região sul fluminense.
                                Compromisso com a qualidade e o sucesso do aluno.
                            </p>
                            <div className="flex space-x-3">
                                <a href="https://www.facebook.com/itec.ensino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/itecensino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/itec-ensino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.youtube.com/@itecensino" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Links */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">Institucional</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sobrenos" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Sobre Nós
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sobrenos" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Corpo Docente
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sobrenos" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Infraestrutura
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="flex items-center gap-2 hover:text-primary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Courses */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-secondary pl-3">Cursos em Alta</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/cursos/tecnico" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Técnico em Enfermagem
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cursos/tecnico" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Técnico em Radiologia
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cursos/tecnico" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Técnico em Logística
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cursos/profissionalizante" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Especialização
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cursos/profissionalizante" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                                        <i className="fas fa-angle-right text-xs opacity-50"></i> Cursos Livres
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-primary pl-3">Fale Conosco</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start gap-3">
                                    <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                                    <a href="https://maps.google.com/?q=Rua+Sessenta,60,Vila+Santa+Cecília,Volta+Redonda-RJ" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        Rua Sessenta, nº60 - Vila Santa Cecília, Volta Redonda - RJ
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-phone-alt text-primary"></i>
                                    <a href="tel:2435120102" className="hover:text-primary transition-colors">(24) 3512-0102</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fab fa-whatsapp text-primary text-lg"></i>
                                    <a href="https://wa.me/5524974003287" target="_blank" className="hover:text-primary transition-colors">(24) 97400-3287</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fas fa-envelope text-primary"></i>
                                    <a href="mailto:contato@itecensino.com.br" className="hover:text-primary transition-colors">contato@itecensino.com.br</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-gray-950 py-6 border-t border-gray-800">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>&copy; 2026 ITEC Ensino. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
