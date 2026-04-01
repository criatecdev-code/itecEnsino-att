import React from 'react';
import EducationLevelSection from './EducationLevelSection';

const EducationLevels: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Ensino Regular - First */}
            <EducationLevelSection
                subtitle="Do 1º ano ao ensino médio"
                title="Ensino fundamental e médio"
                description="O diferencial do ensino regular está na integração da educação financeira e da gamificação, que ampliam o engajamento, estimulam o interesse pelo aprendizado e preparam os alunos para um futuro repleto de oportunidades"
                image="/img/home/fundamental.png"
                link="/cursos/fundamental"
                linkText="Conhecer proposta"
                isReversed={true}
                colorClass="text-secondary"
                bgClass="bg-white"
            />

            {/* Cursos Técnicos */}
            <EducationLevelSection
                subtitle="Qualificação profissional"
                title="Cursos técnicos"
                description="Os cursos técnicos são estruturados com base em uma metodologia 100% ativa, combinando aulas práticas e experiências reais que simulam o ambiente profissional, promovendo o desenvolvimento de competências essenciais e preparando você para atuar com segurança no mercado de trabalho."
                image="/img/home/enfermagem.png"
                link="/cursos/tecnico"
                linkText="Ver todos os cursos"
                isReversed={false}
                colorClass="text-primary"
                bgClass="bg-gray-50"
            />

            {/* Cursos Profissionalizantes */}
            <EducationLevelSection
                subtitle="Cursos rápidos e dinâmicos"
                title="Profissionalizantes"
                description="Qualificação rápida e focada em resultados, desenvolvida para destacar você no mercado. Cursos nas áreas de tecnologia, gestão, saúde e beleza, com certificação imediata."
                image="/img/home/administrativo.png"
                link="/cursos/profissionalizante"
                linkText="Ver cursos rápidos"
                isReversed={true}
                colorClass="text-primary"
                bgClass="bg-white"
            />
        </div>
    );
};

export default EducationLevels;
