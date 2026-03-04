import React from 'react';
import EducationLevelSection from './EducationLevelSection';

const EducationLevels: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Ensino Regular - First */}
            <EducationLevelSection
                subtitle="Do 1º ano ao ensino médio"
                title="Ensino regular"
                description="O diferencial do ensino regular está na educação financeira e na gamificação, que aumentam o engajamento, despertam vontade de aprender e preparam os alunos para um futuro de oportunidades."
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
                description="O curso técnico utiliza metodologia 100% ativa, com aulas práticas e experiências reais em sala que simulam a área de atuação, desenvolvendo competências profissionais e preparando você para um futuro profissional verdadeiro."
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
                description="Qualificação rápida e focada para você se destacar. Cursos nas áreas de tecnologia, gestão, saúde e beleza com certificação imediata."
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
