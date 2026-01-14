import React from 'react';
import EducationLevelSection from './EducationLevelSection';

const EducationLevels: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Ensino Fundamental */}
            <EducationLevelSection
                subtitle="Do 1º ao 9º Ano"
                title="Ensino Fundamental I e II"
                description="Uma jornada de descobertas e crescimento. No ITEC, unimos inovação, valores humanos e excelência acadêmica para formar a base do futuro do seu filho."
                image="/img/home/fundamental.png"
                points={[
                    "Material Didático Positivo",
                    "Robótica Educacional",
                    "Inglês Diário",
                    "Educação Socioemocional"
                ]}
                link="/fundamental"
                linkText="Conheça o Fundamental"
                isReversed={false}
                colorClass="text-primary"
            />

            {/* Ensino Médio - Using a slightly distinctive styling approach conceptually by reversing */}
            <EducationLevelSection
                subtitle="1ª a 3ª Série"
                title="Ensino Médio"
                description="Preparação total para o ENEM e para a vida. Nosso Ensino Médio conecta o aluno com a tecnologia, o empreendedorismo e as melhores universidades do país."
                image="/img/home/medio.png"
                points={[
                    "Foco no ENEM",
                    "Projeto de Vida",
                    "Laboratórios Modernos",
                    "Orientação Profissional"
                ]}
                link="/medio"
                linkText="Conheça o Ensino Médio"
                isReversed={true}
                colorClass="text-secondary"
            />

            {/* Ensino Técnico */}
            <EducationLevelSection
                subtitle="Qualificação Profissional"
                title="Cursos Técnicos"
                description="A entrada mais rápida para o mercado de trabalho. Nossos cursos técnicos combinam teoria e muita prática para você sair pronto para os desafios da profissão."
                image="/img/home/cursos-interna.png"
                points={[
                    "Enfermagem e Radiologia",
                    "Laboratórios Equipados",
                    "Estágios Garantidos",
                    "Docentes Atuantes no Mercado"
                ]}
                link="/cursos"
                linkText="Ver Todos os Cursos"
                isReversed={false}
                colorClass="text-primary"
            />
        </div>
    );
};

export default EducationLevels;
