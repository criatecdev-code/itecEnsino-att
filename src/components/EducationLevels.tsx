import React from 'react';
import EducationLevelSection from './EducationLevelSection';

const EducationLevels: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Cursos Técnicos - Now FIRST */}
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
                link="/cursos/tecnico"
                linkText="Ver Todos os Cursos"
                isReversed={false}
                colorClass="text-primary"
            />

            {/* Ensino Regular (Fundamental + Médio) - Second */}
            <EducationLevelSection
                subtitle="Do Fundamental ao Médio"
                title="Ensino Regular"
                description="Uma jornada completa de desenvolvimento. Do Ensino Fundamental ao Médio, preparamos seu filho para a universidade e para a vida com valores e inovação."
                image="/img/home/fundamental.png"
                points={[
                    "Material Didático Positivo",
                    "Sistema Bilíngue (Inglês)",
                    "Robótica e Tecnologia",
                    "Projeto de Vida e Carreira"
                ]}
                link="/cursos/regular"
                linkText="Conheça o Ensino Regular"
                isReversed={true}
                colorClass="text-secondary"
            />

            {/* Cursos Profissionalizantes (Replacing Ensino Médio) - Third */}
            <EducationLevelSection
                subtitle="Cursos Rápidos e Dinâmicos"
                title="Profissionalizantes"
                description="Qualificação rápida e focada para você se destacar. Cursos nas áreas de tecnologia, gestão, saúde e beleza com certificação imediata."
                image="/img/home/administrativo.png" // Maintaining image for layout balance unless a better one exists, potentially /img/fotos/14.jpg (Web Dev) but let's stick to consistent style images if possible. Actually, medio.png might be specific to HS. Let's use a generic one or keep it. The user didn't provide a new image. I'll stick to the existing one but maybe I should swap to something more 'pro'. Let's use /img/home/banner_itec_26.png or just keep medio.png for now but label it properly. Or better, use one of the course images like '/img/fotos/5.jpg' (Apps) but the style is different (photo vs cutout?). The `fundamental.png` and `medio.png` seem to be cutouts/illustrations. Let's keep `medio.png` to avoid breaking layout style, but ideally we'd change it. 
                // Wait, I can try to find a better image from the list. `cursos-interna.png` is used for Técnico. 
                // Let's use `medio.png` for now to be safe on layout, as I don't have a specific asset request.
                points={[
                    "Certificação Rápida",
                    "Foco na Prática",
                    "Áreas em Alta Demanda",
                    "Preços Acessíveis"
                ]}
                link="/cursos/profissionalizante"
                linkText="Ver Cursos Rápidos"
                isReversed={false}
                colorClass="text-primary"
            />
        </div>
    );
};

export default EducationLevels;
