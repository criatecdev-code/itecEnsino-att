import React from 'react';
import EducationLevelSection from './EducationLevelSection';

const EducationLevels: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Ensino Regular - First */}
            <EducationLevelSection
                subtitle="Do 1º ano ao ensino médio"
                title="Ensino regular"
                description="Uma jornada completa de aprendizado que prepara o aluno para os desafios do presente e do futuro. No ITEC, o conhecimento ganha vida através de metodologias ativas e tecnologia."
                image="/img/home/fundamental.png"
                link="/cursos/fundamental"
                linkText="Conhecer proposta"
                isReversed={true}
                colorClass="text-secondary"
                bgClass="bg-white"
            />

            {/* Cursos Técnicos - Now SECOND */}
            <EducationLevelSection
                subtitle="Qualificação profissional"
                title="Cursos técnicos"
                description="A entrada mais rápida para o mercado de trabalho. Nossos cursos técnicos combinam teoria e muita prática para você sair pronto para os desafios da profissão."
                image="/img/home/enfermagem.png"
                link="/cursos/tecnico"
                linkText="Ver todos os cursos"
                isReversed={false}
                colorClass="text-primary"
                bgClass="bg-gray-50"
            />

            {/* Cursos Profissionalizantes - Third */}
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
