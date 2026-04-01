export interface Course {
  titulo: string;
  slug: string; // URL friendly identifier
  sobre: string;
  area: string;
  modulos: string;
  cargahoraria: string;
  tempo: string;
  categoria: string;
  img: string;
  turnos?: string;
  obs?: string;
}

export const courses: Course[] = [
  {
    titulo: "Assistente administrativo",
    slug: "assistente-administrativo",
    sobre: "Atue em processos administrativos, RH, finanças e logística com excelência.",
    area: "Gestão de processos administrativos, controle de qualidade, informações, equipes e comunicações internas e externas. Exercer atividades de liderança, promovendo o desenvolvimento das equipes e facilitando o alcance dos objetivos. Prestar assessoria e consultoria estratégica, participando ativamente das decisões que impactam a rotina da empresa. Manter um atendimento de excelência para clientes e fornecedores. Além disso, será responsável pela organização e manutenção de arquivos e redação de documentos precisos e eficientes.",
    modulos: `
        Criatividade no Trabalho
        ;Dinamismo e Compromisso com o Sucesso
        ;Empreendedor de Sucesso
        ;Excel - Essencial 365
        ;Excel - Intermediário 365
        ;Rotinas Administrativas
        ;Gestão de Pessoas
        `,
    cargahoraria: "48h",
    tempo: "6 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/1.jpg"
  },
  {
    titulo: "Assistente de contabilidade",
    slug: "assistente-de-contabilidade",
    sobre: "Organize documentos, realize lançamentos contábeis e apoie na apuração de impostos.",
    area: "Organizar documentos e efetuar sua classificação contábil, gerar lançamentos contábeis, auxiliar na apuração de impostos, conciliar contas e preenchimento de guias de recolhimento e solicitações junto a órgãos do governo, emitir notas de venda e de transferência, entre outras. Trabalhar em pequenas ou médias empresas ou escritórios de contabilidade, sempre sob supervisão de um contador.",
    modulos: `
        Excel - Essencial 365
        ;Matemática Financeira Na Hp 12c
        ;Assistente Contábil
        ;Departamento Pessoal
        `,
    cargahoraria: "69h",
    tempo: "8 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/2.jpg"
  },
  {
    titulo: "Atendente de farmácia",
    slug: "atendente-de-farmacia",
    sobre: "Atue no controle de medicamentos e atendimento em farmácias ou hospitais.",
    area: "Atuar na área farmacêutica, na comercialização, dispersão de medicamentos e correlatos, bem como na gestão de estoque farmacêutico.",
    modulos: `
        Operador De Caixa
        ;Agente De Vendas
        ;Atendente De Farmácia 1.0
        `,
    cargahoraria: "41h",
    tempo: "5 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/3.jpg"
  },
  {
    titulo: "Assistente de Cobrança",
    slug: "assistente-de-cobranca",
    sobre: "Aprenda técnicas de negociação e gestão para recuperação de crédito e cobrança.",
    area: "Atuar na área de departamentos financeiros, setores de crédito e cobrança, ou empresas especializadas em recuperação de crédito.",
    modulos: `
        Dez Maneiras de se Vender uma Idéia
        ;Gestão de Conflitos
        ;Atendimento ao Cliente
        ;Operador de Caixa
        ;Crédito e Cobrança
        ;Telemarketing
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/4.jpg"
  },
  {
    titulo: "Desenvolvimento de Apps",
    slug: "desenvolvimento-de-apps",
    sobre: "Desenvolva habilidades para projetar e criar aplicativos móveis e web.",
    area: "Atuar em indústrias de tecnologia, em startups, empresas de desenvolvimento de software ou como empreendedores na criação de seus próprios aplicativos.",
    modulos: `
        Lógica de Programação
        ;Criando Aplicativos com Angular
        ;Criando Aplicativos com Ionic
        ;Criando Aplicativos com Cordova
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/5.jpg"
  },
  {
    titulo: "Desenvolvimento de Sistemas",
    slug: "desenvolvimento-de-sistemas",
    sobre: "Crie e mantenha sistemas de software eficientes com as melhores tecnologias.",
    area: "Atuar na criação e manutenção de softwares personalizados para empresas, instituições e organizações em geral. Sua área de atuação inclui o desenvolvimento de sistemas de gestão, aplicativos empresariais, plataformas web e soluções tecnológicas sob medida para otimizar processos e melhorar a eficiência das operações.",
    modulos: `
        Banco De Dados SQL
        ;Programação C# com Visual Studio - Essencial
        ;Programação C# com Visual Studio - Intermediário
        ;Programação C# com Visual Studio - Avançado I
        ;Programação C# com Visual Studio - Avançado II
        `,
    cargahoraria: "76h",
    tempo: "9 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/6.jpg"
  },
  {
    titulo: "Design para mídias sociais",
    slug: "design-para-midias-sociais",
    sobre: "Crie conteúdo visual atrativo e impactante para as principais redes sociais.",
    area: "Atuar em agências de marketing, empresas, com influenciadores, empreendedores e no setor público, criando conteúdo visual criativo para impulsionar a presença nas redes sociais e fortalecer a identidade de marcas e projetos. Sua atuação abrange a produção de imagens, vídeos e elementos visuais para diversas plataformas e públicos-alvo.",
    modulos: `
        Adobe Premiere
        ;Adobe After Effects
        ;Photoshop Essencial
        ;Photoshop Avançado
        ;Illustrator 
        `,
    cargahoraria: "80h",
    tempo: "10 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/7.jpg"
  },
  {
    titulo: "Design gráfico",
    slug: "design-grafico",
    sobre: "Edite textos e imagens para criar layouts profissionais no mercado gráfico.",
    area: "Operar softwares de computação gráfica, permitindo a edição, criação e preparação para impressão de arquivos vetoriais. Atua em vários ramos de atividade, tais como: artes gráficas, indústria têxtil, fabricação madeireira, empresas de telecomunicações, entre outras.",
    modulos: `
        Adobe Photoshop - Módulo I
        ;Adobe Photoshop - Módulo II
        ;Adobe Photoshop - Módulo III
        ;Adobe Illustrator - Creative Cloud
        ;Coreldraw - Graphics Suite - Módulo I
        ;Coreldraw - Graphics Suite - Módulo II
        `,
    cargahoraria: "92h",
    tempo: "11 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/8.jpg"
  },
  {
    titulo: "Desenvolvimento de Games I",
    slug: "desenvolvimento-de-games",
    sobre: "Aprenda os conceitos básicos para criar seus próprios jogos e cenários digitais.",
    area: "Atuação em diversas áreas da indústria de jogos eletrônicos, incluindo desenvolvimento de jogos para plataformas móveis e consoles, criação de jogos para realidade virtual e aumentada, produção de jogos educacionais e de treinamento, além de oportunidades em estúdios de desenvolvimento de games, empresas de tecnologia e até mesmo como empreendedor independente na criação de jogos autorais.",
    modulos: `
        Lógica De Programação
        ;Kodu Game Lab
        ;Scratch
        ;Roblox
        ;Minecraft
        `,
    cargahoraria: "64h",
    tempo: "8 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/9.jpg"
  },
  {
    titulo: "Desenvolvimento de Games II",
    slug: "desenvolvimento-de-games-ii",
    sobre: "Aprenda os conceitos básicos para criar seus próprios jogos e cenários digitais.",
    area: "Atuação em diversas áreas da indústria de jogos eletrônicos, incluindo desenvolvimento de jogos para plataformas móveis e consoles, criação de jogos para realidade virtual e aumentada, produção de jogos educacionais e de treinamento, além de oportunidades em estúdios de desenvolvimento de games, empresas de tecnologia e até mesmo como empreendedor independente na criação de jogos autorais.",
    modulos: `
        Pixel Art
        ;Tinkercad
        ;Python
        ;Desenvolvimento de Games
        `,
    cargahoraria: "68h",
    tempo: "8 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/10.jpg"
  },
  {
    titulo: "Desenvolvimento de Games 3D",
    slug: "desenvolvimento-de-games-3d",
    sobre: "Crie experiências tridimensionais imersivas para diferentes plataformas.",
    area: "Atuação em estúdios de desenvolvimento de jogos, criando mundos e personagens para jogos em diversas plataformas. Além disso, podem encontrar oportunidades em empresas de realidade virtual e aumentada, produzindo conteúdo imersivo.",
    modulos: `
        Desenvolvimento de Games - 3d Módulo I
        ;Desenvolvimento de Games - 3d Módulo II
        `,
    cargahoraria: "40h",
    tempo: "5 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/11.jpg"
  },
  {
    titulo: "Desenvolvimento de Jogos Digitais",
    slug: "desenvolvimento-de-jogos-digitais",
    sobre: "Formação completa para conceber, programar e implementar jogos profissionais.",
    area: "Atuação em estúdios de desenvolvimento de games, criando jogos para consoles, PC e dispositivos móveis. Além disso, podem encontrar oportunidades em empresas de realidade virtual e aumentada, produzindo experiências imersivas. Outras áreas incluem gamificação, desenvolvimento de aplicativos interativos e simulações para treinamento.",
    modulos: `
        Lógica de Programação
        ;Kodu Game Lab
        ;Scratch
        ;Roblox
        ;Minecraft
        ;Pixel Art
        ;Tinkercad
        ;Python
        ;Desenvolvimento de Games
        ;Desenvolvimento de Games - 3d Módulo I
        ;Desenvolvimento de Games - 3d Módulo II
        `,
    cargahoraria: "172h",
    tempo: "21 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/12.jpg"
  },
  {
    titulo: "Gestão de RH",
    slug: "gestao-de-rh",
    sobre: "Capacitação estratégica em gestão de pessoas e processos de Recursos Humanos.",
    area: "Atuação em diversas áreas, como: setores de Recursos Humanos de empresas, consultorias em RH para auxiliar em processos de recrutamento e seleção, desenvolvimento de treinamentos e políticas de retenção de talentos, e também em cargos de liderança e gestão de equipes dentro das organizações.",
    modulos: `
        Departamento Pessoal
        ;Recursos Humanos
        ;Gestão de Pessoas
        `,
    cargahoraria: "60h",
    tempo: "7 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/13.jpg"
  },
  {
    titulo: "Desenvolvimento web",
    slug: "desenvolvimento-web",
    sobre: "Projete e implemente sites e aplicações web de forma eficiente e profissional.",
    area: "Atuação em agências de criação, empresas de tecnologia e startups, desenvolvendo e mantendo sites e aplicações web, em setores de comércio eletrônico, mídia digital e empreendendo projetos próprios na área de desenvolvimento web.",
    modulos: `
        Lógica de Programação
        ;Desenvolvimento Web - Html
        ;Desenvolvimento Web - Css
        ;Desenvolvimento Web - Javascript
        ;Desenvolvimento Web - Wordpress
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/14.jpg"
  },
  {
    titulo: "Informática completa",
    slug: "informatica-completa",
    sobre: "Domine as principais ferramentas de informática e softwares essenciais do mercado.",
    area: "Atuação em diversas áreas, como: suporte técnico em empresas de tecnologia, atendimento ao cliente em setores de informática, auxiliando na resolução de problemas e manutenção de equipamentos, e também em cargos administrativos e de escritório, utilizando softwares de escritório e sistemas de gestão.",
    modulos: `
        Introdução a Informática
        ;Windows 11 Essencial
        ;Windows 11 Avançado
        ;Word Essencial 365
        ;Word Avançado 365
        ;Power Point Essencial 365
        ;Power Point Avançado 365
        ;Excel - Essencial 365
        ;Excel - Intermediário 365
        ;Outlook Essencial 365
        ;Outlook Avançado 365
        `,
    cargahoraria: "86h",
    tempo: "10 meses e 3 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/15.jpg"
  },
  {
    titulo: "Liderança 4.0",
    slug: "lideranca-4-0",
    sobre: "Desenvolva habilidades de liderança eficaz para maximizar o potencial de equipes.",
    area: "Atuação em diversas áreas, como: gestão de equipes em empresas de diferentes setores, liderança em projetos e empreendimentos, cargos de supervisão e coordenação em organizações, além de oportunidades em consultorias e treinamentos em desenvolvimento de liderança.",
    modulos: `
        Desenvolvimento Profissional
        ;Dinamismo e Compromisso com o Sucesso
        ;Empreendedor de Sucesso
        ;Criatividade no Trabalho
        ;Dez Maneiras de Se Vender uma Idéia
        ;Gestão de Conflitos
        ;A'tendimento ao Cliente
        ;Trabalho em Equipe
        ;Liderança
        ;Gestão de Pessoas
        `,
    cargahoraria: "42h",
    tempo: "5 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/16.jpg"
  },
  {
    titulo: "Gestão em marketing digital",
    slug: "gestao-e-marketing-digital",
    sobre: "Planeje e implemente estratégias de marketing digital para impulsionar negócios.",
    area: "Atuação em diversas áreas, como: gerência de marketing digital em empresas, agências de publicidade e marketing, consultorias para otimizar estratégias digitais de negócios, e empreendedorismo para impulsionar o crescimento de marcas e projetos online.",
    modulos: `
        Agente de Vendas
        ;Google Adwords
        ;Marketing Digital I
        ;Marketing Digital II
        `,
    cargahoraria: "50h",
    tempo: "6 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/17.jpg"
  },
  {
    titulo: "Excel profissional",
    slug: "excel-profissional",
    sobre: "Domine o Microsoft Excel com técnicas avançadas para análise e tomada de decisões.",
    area: "A expertise em Excel é valorizada em diferentes setores profissionais, como em setores administrativos e financeiros de empresas, departamentos de recursos humanos para análise de dados e relatórios, em consultorias para auxiliar clientes com análises complexas de dados, e também em áreas de pesquisa e desenvolvimento para coletar e analisar informações relevantes.",
    modulos: `
        Excel - Essencial 365
        ;Excel - Intermediário 365
        ;Excel - Avançado 365
        `,
    cargahoraria: "24h",
    tempo: "3 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/18.jpg"
  },
  {
    titulo: "Social Media 360",
    slug: "social-media-360",
    sobre: "Torne-se especialista em gerir mídias sociais e impulsionar o engajamento de marcas.",
    area: "Atuação em diversas áreas como: agências de marketing digital, gerenciamento de redes sociais para empresas e marcas, criação de conteúdo para influenciadores digitais, estratégias de mídias sociais para e-commerce, além de oportunidades em sectores de comunicação e publicidade.",
    modulos: `
        Desenvolvimento Profissional
        ;Dinamismo e Compromisso com o Sucesso
        ;Empreendedor de Sucesso
        ;Criatividade no Trabalho
        ;Dez Maneiras de se Vender uma Idéia
        ;Adobe Photoshop - Módulo I
        ;Internet, Redes Sociais e Aplicativos
        ;Apresentações Google
        ;Google Adwords
        ;Marketing Digital I
        `,
    cargahoraria: "82h",
    tempo: "10 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/19.jpg"
  },
  {
    titulo: "Google for Business",
    slug: "google-business",
    sobre: "Domine as ferramentas Google para otimizar a produtividade no ambiente corporativo.",
    area: "Atuação em diversas áreas, como: setores administrativos e de secretariado, gerenciamento de projetos e equipes, consultorias em produtividade e processos de negócios, e empreendedorismo para otimizar a gestão de empresas.",
    modulos: `
        Google: Ferramentas de Produtividade
        ;Documentos Google
        ;Planilhas Google
        ;Apresentações Google
        `,
    cargahoraria: "40h",
    tempo: "5 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/20.jpg"
  },
  {
    titulo: "Power BI",
    slug: "power-bi",
    sobre: "Aprenda a interpretar dados e tomar decisões estratégicas com o Microsoft Power BI.",
    area: "Finanças e contabilidade - Marketing e vendas - Recursos humanos - Operações e logística Saúde e ciências da vida - Educação e pesquisa",
    modulos: `
        Microsoft Power Bi - Modulo I 
        ;Microsoft Power Bi - Modulo II
        ;Microsoft Power Bi - Modulo III
        `,
    cargahoraria: "48h",
    tempo: "6 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/24.jpg"
  },
  {
    titulo: "Redes e infraestrutura",
    slug: "redes-e-infraestrutura",
    sobre: "Projete, configure e administre redes de computadores com foco em infraestrutura.",
    area: `Administração de redes - Análise de redes - Análise de segurança de redes
        Consultoria de tecnologia de redes - Engenharia de redes - Gerência de projetos de rede - Gerência de suporte de rede - Especialista em infraestrutura de TI
        Os profissionais que atuam nessas áreas são responsáveis por: Instalar, configurar e
        manter redes corporativas - Garantir o bom funcionamento de sistemas e servidores
        Implementar sistemas e redes - Gerenciar e manter a infraestrutura tecnológica de uma organização Planejar, implementar, suportar e otimizar sistemas e redes de computadores`,
    modulos: `
        Redes - Cabeamento e Infraestrutura
        ;Redes - Lógicas e Estruturação 
        ;Redes - Tecnologia Wireless
        ;Montagem e Manutenção de Computadores
        `,
    cargahoraria: "49h",
    tempo: "6 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/21.jpg"
  },
  {
    titulo: "Finanças essencial",
    slug: "financas-essencial",
    sobre: "Aprenda os conceitos fundamentais de finanças, da gestão pessoal à empresarial.",
    area: "Planejamento financeiro - Controle financeiro - Monitoramento de recursos financeiros - Análise de custos e riscos - Gestão de fluxo de caixa - Alocação de recursos - Investimentos - Profissões na área financeira - Analista financeiro - Analista de risco - Analista de fundos de investimento - Analista de crédito - Analista de mercado de capitais - Economista financeiro - Consultor financeiro - Trader",
    modulos: `
        Guia Inteligencia Artificial
        ;Inteligencia Artificial 
        `,
    cargahoraria: "16h",
    tempo: "2 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/22.jpg"
  },
  {
    titulo: "Sketchup",
    slug: "sketchup",
    sobre: "Dê vida às suas ideias com SketchUp: aprenda a criar projetos 3D incríveis de forma prática e profissional!",
    area: `Arquitetura - Design de Interiores - Engenharia Civil - Paisagismo - Urbanismo
        Cenografia e Eventos - Design de Produto e Mobiliário - Apresentações Profissionais`,
    modulos: `
        `,
    cargahoraria: "22h",
    tempo: "2 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/23.jpg"
  },
  {
    titulo: "Atendimento pré-hospitalar",
    slug: "atendimento-pre-hospitalar",
    sobre: "Capacitação para atuar como socorrista no SAMU, bombeiros e áreas de saúde.",
    area: "A atuação no mercado de trabalho inclui os setores de saúde e prestação de serviço. São eles, hospitais, centros de saúde, órgãos do governo, SAMU, ambulâncias de transporte e outros.",
    modulos: `
        Anatomia e Fisiologia
        ;Cinemática do Trauma
        ;Abordagem ao Paciente
        ;Manejo de Vias Aéreas
        ;Ressuscitação Cardiopulmonar
        ;Biossegurança
        ;Ferimentos
        ;Hemorragia
        ;Bandagem
        ;Choque
        ;Trauma Músculo-Esquelético e Imobilizações
        ;Traumatismos Específicos
        ;Urgências Clínicas Na Criança e No Paciente Adulto
        ;Remoção de Vítima
        ;Urgências Traumáticas no Paciente Adulto e Na Criança
        ;Intervenção em Crises e Atendimentos de Pacientes Especiais
        ;Afogamento
        ;Acidentes com Múltiplas Vítimas e Catástrofes
        ;Acidentes com Produtos Perigosos
        ;Urgências Psiquiátricas e Obstétricas
        `,
    cargahoraria: "60h",
    tempo: "5 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/25.jpg"
  },
  {
    titulo: "Auxiliar de laboratório em análises clínicas",
    slug: "auxiliar-de-laboratorio-em-analises-clinicas",
    sobre: "Qualificação para rotinas de trabalho em laboratórios de análises clínicas.",
    area: "A atuação no mercado de trabalho inclui auxiliar na organização do ambiente de trabalho, recepção de pacientes, orientações sobre exames e entrega dos resultado, auxiliar em coletas de amostras e no preparo de bancadas laboratoriais e desenvolver práticas e auxiliar o laboratório nas suas rotinas",
    modulos: `
        O Laboratório Clínico e as Análises Clínicas
        ;Biossegurança
        ;Conhecimentos Biológicos para Uso em Laboratório e Boas Práticas de Laboratório
        ;Vidrarias, Equipamentos, Esterilização e Lavagem de Vidrarias
        ;Microscopia
        ;Setores Técnicos
        ;Coletas e Processamento de Amostras Biológicas
        ;Hematologia
        ;Bioquímica
        ;Imunologia
        ;Hormonologia
        ;Virologia
        ;Urinálise e Fluidos Corporais
        ;Microbiologia e Micologia
        ;Parasitologia
        `,
    cargahoraria: "72h",
    tempo: "6 meses",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/26.jpg"
  },
  {
    titulo: "Ensino fundamental",
    slug: "ensino-fundamental",
    sobre: "Excelência acadêmica unida ao desenvolvimento socioemocional e tecnológico.",
    area: "Fundamental I (1º ao 5º ano) e fundamental II (6º ao 9º ano).",
    modulos: `
        Metodologia Ativa
        ;Projetos de Vida
        ;Inglês Intensivo
        ;Laboratório de Robótica
        `,
    cargahoraria: "Integral/Parcial",
    tempo: "Anual",
    categoria: "Ensino fundamental",
    img: "/img/home/fundamental.png"
  },
  {
    titulo: "Ensino médio",
    slug: "ensino-medio",
    sobre: "Preparação completa para o ENEM e vestibulares com formação profissionalizante.",
    area: "1ª, 2ª e 3ª séries do ensino médio.",
    modulos: `
        Foco no ENEM e Vestibulares
        ;Itinerários Formativos
        ;Orientação Profissional
        ;Projetos de Empreendedorismo
        `,
    cargahoraria: "Matutino",
    tempo: "Anual",
    categoria: "Ensino médio",
    img: "/img/home/medio.png"
  },
  {
    titulo: "Técnico em enfermagem",
    slug: "tecnico-em-enfermagem",
    sobre: "Formação técnica em cuidado humanizado com práticas em laboratórios modernos.",
    area: "O mercado da saúde está em plena expansão, e o técnico em enfermagem é hoje um dos profissionais mais procurados no Brasil. \n\tCom a formação do ITEC, você conquista oportunidades em hospitais, clínicas, laboratórios, home care e programas de saúde pública. \n\tAlém da estabilidade e das boas remunerações, você terá a satisfação de exercer uma profissão que salva e transforma vidas todos os dias.",
    modulos: `
        1º SEMESTRE
        ;MÓDULO 1
        ;Ética e Desenvolvimento humano
        ;Empreendedorismo
        ;Português Instrumental e Produção Técnica
        ;Saúde do Trabalhador
        ;MÓDULO 2
        ;Anatomia e Fisiologia Humana
        ;Biossegurança e Controle de Infecção
        ;Políticas Públicas de Saúde e SUS
        
        ;2º SEMESTRE
        ;MÓDULO 3
        ;Noções de Farmacologia
        ;Enfermagem em Clínica Médica
        ;MÓDULO 4
        ;Enfermagem Coletiva
        ;Fundamento e técnicas em Enfermagem
    
        ;3º SEMESTRE
        ;MÓDULO 5
        ;Microbiologia e Parasitologia
        ;Saúde do Homem
        ;Práticas de Cuidado em Enfermagem
        ;MÓDULO 6
        ;Saúde da Mulher
        ;Saúde da Criança e do Adolescente
        ;Saúde do idoso
        ;INTEGRA ESTÁGIO
        ;ESTÁGIO SUPERVISIONADO I
    
        ;4º SEMESTRE
        ;MÓDULO 7
        ;Enfermagem em Urgência e Emergência
        ;Enfermagem Cirúrgica
        ;Nutrição e dietética
        ;ESTÁGIO SUPERVISIONADO II
        ;MÓDULO 8
        ;Enfermagem em Terapia Intensiva
        ;Saúde Mental
        ;Administração em Enfermagem
        ;ESTÁGIO SUPERVISIONADO III
        `,
    cargahoraria: "1200h",
    tempo: "24 meses",
    categoria: "Cursos técnicos",
    turnos: `
        Manhã
        ;Tarde
        ;Noite
        ;Integral
        `,
    obs: `Início Semanal: 02/02/2026 e Sábado: 07/02/2026.
    Diferenciais ITEC: Infraestrutura premium com laboratórios equipados (simuladores, anatomia), monitoramento 24h, acompanhamento psicopedagógico (TEA) e App do aluno.`,
    img: "/img/fotos/27.jpg"
  },
  {
    titulo: "Técnico em radiologia",
    slug: "tecnico-em-radiologia",
    sobre: "Domine tecnologias de diagnóstico por imagem e equipamentos de alta precisão.",
    area: "O profissional técnico em radiologia é essencial em qualquer instituição de saúde moderna. \n\tCom a formação do ITEC, você estará pronto(a) para atuar em hospitais, clínicas, laboratórios e centros de diagnóstico por imagem, \n\tem um dos setores que mais cresce no país. Além das excelentes oportunidades e valorização profissional, \n\ta radiologia oferece um campo de atuação tecnológica e humana, ideal para quem busca estabilidade e propósito.",
    modulos: `
        1º SEMESTRE
        ;MÓDULO 1
        ;Ética e Desenvolvimento humano
        ;Empreendedorismo
        ;Português Instrumental e Produção Técnica
        ;Saúde do Trabalhador
        ;MÓDULO 2
        ;Anatomia e Fisiologia Humana
        ;Biossegurança e Controle de Infecção
        ;Políticas Públicas de Saúde e SUS
    
        ;2º SEMESTRE
        ;MÓDULO 3
        ;Anatomia e Patologias Radiológicas
        ;Técnicas de Posicionamento Radiológico
        ;MÓDULO 4
        ;Práticas de Posicionamento Radiológico
        ;Equipamentos Radiológicos
        ;Radioproteção e Dosimetria
    
        ;3º SEMESTRE
        ;MÓDULO 5
        ;Técnicas do Diagnóstico por Imagem
        ;Exames Contrastados
        ;Tomografia e Ressonância Magnética
        ;MÓDULO 6
        ;Mamografia e Densitometria Óssea
        ;Gestão na Radiologia
        ;Práticas do Diagnóstico por Imagem
        ;INTEGRA ESTÁGIO
        ;ESTÁGIO SUPERVISIONADO I
    
        ;4º SEMESTRE
        ;MÓDULO 7
        ;Medicina Nuclear, Hemodinâmica e Radioterapia
        ;Radiologia Industrial
        ;ESTÁGIO SUPERVISIONADO II
        ;MÓDULO 8
        ;Radiologia Digital e qualidade de imagem
        ;Radiologia Odontológica
        ;Radiologia Veterinária
        ;ESTÁGIO SUPERVISIONADO III
        `,
    cargahoraria: "1200h",
    tempo: "24 meses",
    categoria: "Cursos técnicos",
    turnos: `
        Noite
        `,
    obs: `Início: 02/02/2026 (Somente com Ensino Médio completo).
    Estágio: 400h.
    Diferenciais ITEC: Laboratórios com equipamentos de alta precisão, ambiente monitorado 24h, equipe de professores especialistas e suporte psicopedagógico.`,
    img: "/img/fotos/29.jpg"
  },
  {
    titulo: "Técnico em análises clínicas",
    slug: "tecnico-em-analises-clinicas",
    sobre: "Prática em exames laboratoriais, bioquímica e microbiologia com foco no mercado.",
    area: "O mercado para o técnico em análises clínicas está em constante crescimento, impulsionado pela expansão dos serviços de saúde e pela importância do diagnóstico laboratorial. \n\tCom o diploma do ITEC, você poderá atuar em laboratórios, hospitais, clínicas, bancos de sangue e centros de pesquisa, sendo um elo fundamental entre a ciência e o cuidado com o paciente. \n\tUma carreira estável, tecnológica e com alta demanda espera por você.",
    modulos: `
        1º SEMESTRE
        ;MÓDULO 1
        ;Ética e Desenvolvimento humano
        ;Empreendedorismo
        ;Português Instrumental e Produção Técnica
        ;Saúde do Trabalhador
        ;MÓDULO 2
        ;Anatomia e Fisiologia Humana
        ;Biossegurança e Controle de Infecção
        ;Políticas Públicas de Saúde e SUS
    
        ;2º SEMESTRE
        ;MÓDULO 3
        ;Fundamentos de Laboratório
        ;Urinálise e Fluidos Corporais
        ;Hormonologia
        ;Citologia e Histologia
        ;MÓDULO 4
        ;Bioquímica Clínica
        ;Fundamentos de Genética
        ;Biologia Molecular
        ;Técnicas de Coleta, Triagem e Esterilização
        ;INTEGRA ESTÁGIO
    
        ;3º SEMESTRE
        ;MÓDULO 5
        ;Parasitologia Clínica
        ;Microbiologia e Micologia
        ;Controle de qualidade
        ;ESTÁGIO SUPERVISIONADO I
        ;MÓDULO 6
        ;Patologia Clínica
        ;Hematologia Clínica
        ;Imunologia Clínica
        ;ESTÁGIO SUPERVISIONADO II
        `,
    cargahoraria: "1200h",
    tempo: "18 meses",
    categoria: "Cursos técnicos",
    turnos: `
        Noite
        `,
    obs: `Estágio: 150h.
    Diferenciais ITEC: Formação moderna e prática, laboratórios de última geração, acompanhamento especializado e foco na inserção no mercado.`,
    img: "/img/fotos/28.jpg"
  },
];
