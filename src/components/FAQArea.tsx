
import React, { useState } from 'react';

const FAQArea: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Quais são os documentos necessários para a matrícula?",
            answer: "Para cursos técnicos, geralmente solicitamos RG, CPF, Comprovante de Residência, Histórico Escolar do Ensino Médio e uma foto 3x4. Para o ensino regular, documentos dos pais e histórico do aluno."
        },
        {
            question: "O ITEC oferece estágio garantido?",
            answer: "Sim, para nossos cursos técnicos de saúde (Enfermagem, Radiologia e Análises Clínicas), possuímos convênios com os principais hospitais e clínicas da região, garantindo o estágio obrigatório para todos os alunos."
        },
        {
            question: "Os cursos são reconhecidos pelo MEC?",
            answer: "Sim, todos os nossos cursos técnicos são autorizados pelo Conselho Estadual de Educação (CEE-RJ) e reconhecidos pelo Ministério da Educação (MEC), garantindo a validade nacional do seu diploma."
        },
        {
            question: "Existem opções de bolsas ou descontos?",
            answer: "Trabalhamos com diversos convênios para empresas parceiras, além de descontos por pontualidade no pagamento e promoções especiais para ex-alunos de outras modalidades."
        },
        {
            question: "Como funciona a metodologia de gamificação?",
            answer: "Nossa metodologia transforma o aprendizado em uma jornada interativa com desafios, conquistas e níveis. Os alunos acumulam pontos por participação e desempenho, que podem ser trocados por benefícios e prêmios."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Title and info */}
                    <div className="w-full lg:w-1/3">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3 block">Dúvidas Frequentes</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                            Perguntas <br />
                            <span className="text-secondary">Comuns</span>
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                            Ainda tem alguma dúvida? Separamos as perguntas mais frequentes para te ajudar. Se precisar de mais detalhes, fale conosco pelo WhatsApp!
                        </p>
                        <a
                            href="https://wa.me/5524974003287"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Falar com um Consultor
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gray-50 shadow-lg' : 'bg-white shadow-sm hover:shadow-md'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full px-8 py-6 text-left flex justify-between items-center gap-4 transition-colors"
                                    >
                                        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-gray-900'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                                            <i className="fas fa-chevron-down text-sm"></i>
                                        </div>
                                    </button>

                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="px-8 pb-8 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50 mt-2 pt-4">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQArea;
