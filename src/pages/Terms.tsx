
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Termos de Uso | ITEC Ensino</title>
            </Helmet>

            <div className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern/map.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay"></div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black mb-3">Termos de Uso</h1>
                    <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                        <Link to="/" className="hover:text-white transition-colors">Início</Link>
                        <span className="text-secondary">•</span>
                        <span className="text-white">Termos</span>
                    </div>
                </div>
            </div>

            <section className="py-20">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-gray-100 prose prose-lg prose-blue max-w-none">
                        <h2 className="text-2xl font-black text-gray-900 mb-6">1. Aceitação dos Termos</h2>
                        <p className="text-gray-600 mb-8">
                            Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">2. Uso do Conteúdo</h2>
                        <p className="text-gray-600 mb-8">
                            Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade do ITEC Ensino e está protegido por leis de direitos autorais. O uso não autorizado de qualquer material é estritamente proibido.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">3. Precisão das Informações</h2>
                        <p className="text-gray-600 mb-8">
                            Embora nos esforcemos para fornecer informações precisas e atualizadas, o ITEC Ensino não garante a exatidão, integridade ou adequação das informações e materiais encontrados ou oferecidos neste site.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">4. Links para Terceiros</h2>
                        <p className="text-gray-600 mb-8">
                            Este site pode incluir links para outros sites para fornecer mais informações. Isso não significa que endossamos o site em questão. Não temos responsabilidade pelo conteúdo do site vinculado.
                        </p>

                        <h2 className="text-2xl font-black text-gray-900 mb-6">5. Alterações nos Termos</h2>
                        <p className="text-gray-600">
                            O ITEC Ensino reserva-se o direito de alterar estes termos de tempos em tempos. O uso continuado do site após quaisquer alterações constitui aceitação dos novos termos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
