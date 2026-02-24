import React from 'react';
import EducationLevelSection from './EducationLevelSection';

const EducationLevels: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Ensino Regular - First */}
            <EducationLevelSection
                subtitle="Do 1º ano ao Ensino Médio"
                title="Ensino Regular"
                description="Uma jornada completa de aprendizado que prepara o aluno para os desafios do presente e do futuro. No Itec, o conhecimento ganha vida através de metodologias ativas e tecnologia."
                image="/img/home/fundamental.png"
                link="/cursos/fundamental"
                linkText="Conhecer Proposta"
                isReversed={true}
                colorClass="text-secondary"
                bgClass="bg-white"
            />

            {/* Cursos Técnicos - Now SECOND */}
            <EducationLevelSection
                subtitle="Qualificação Profissional"
                title="Cursos Técnicos"
                description="A entrada mais rápida para o mercado de trabalho. Nossos cursos técnicos combinam teoria e muita prática para você sair pronto para os desafios da profissão."
                image="/img/home/enfermagem.png"
                link="/cursos/tecnico"
                linkText="Ver Todos os Cursos"
                isReversed={false}
                colorClass="text-primary"
                bgClass="bg-gray-50"
            />

            {/* Cursos Profissionalizantes - Third */}
            <EducationLevelSection
                subtitle="Cursos Rápidos e Dinâmicos"
                title="Profissionalizantes"
                description="Qualificação rápida e focada para você se destacar. Cursos nas áreas de tecnologia, gestão, saúde e beleza com certificação imediata."
                image="/img/home/administrativo.png"
                link="/cursos/profissionalizante"
                linkText="Ver Cursos Rápidos"
                isReversed={true}
                colorClass="text-primary"
                bgClass="bg-white"
            />
        </div>
    );
};

export default EducationLevels;
