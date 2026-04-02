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
        Criatividade no trabalho
        ;Dinamismo e compromisso com o sucesso
        ;Empreendedor de sucesso
        ;Excel - essencial 365
        ;Excel - intermediário 365
        ;Rotinas administrativas
        ;Gestão de pessoas
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
        Excel - essencial 365
        ;Matemática financeira na HP 12C
        ;Assistente contábil
        ;Departamento pessoal
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
    area: "Atuar na área farmacêutica, na comercialização, dispensação de medicamentos e correlatos, bem como na gestão de estoque farmacêutico.",
    modulos: `
        Operador de caixa
        ;Agente de vendas
        ;Atendente de farmácia 1.0
        `,
    cargahoraria: "41h",
    tempo: "5 meses e 1 semana",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/3.jpg"
  },
  {
    titulo: "Assistente de cobrança",
    slug: "assistente-de-cobranca",
    sobre: "Aprenda técnicas de negociação e gestão para recuperação de crédito e cobrança.",
    area: "Atuar na área de departamentos financeiros, setores de crédito e cobrança, ou empresas especializadas em recuperação de crédito.",
    modulos: `
        Dez maneiras de se vender uma ideia
        ;Gestão de conflitos
        ;Atendimento ao cliente
        ;Operador de caixa
        ;Crédito e cobrança
        ;Telemarketing
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/4.jpg"
  },
  {
    titulo: "Desenvolvimento de apps",
    slug: "desenvolvimento-de-apps",
    sobre: "Desenvolva habilidades para projetar e criar aplicativos móveis e web.",
    area: "Atuar em indústrias de tecnologia, em startups, empresas de desenvolvimento de software ou como empreendedores na criação de seus próprios aplicativos.",
    modulos: `
        Lógica de programação
        ;Criando aplicativos com Angular
        ;Criando aplicativos com Ionic
        ;Criando aplicativos com Cordova
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos profissionalizantes",
    img: "/img/fotos/5.jpg"
  },
  {
    titulo: "Desenvolvimento de sistemas",
    slug: "desenvolvimento-de-sistemas",
    sobre: "Crie e mantenha sistemas de software eficientes com as melhores tecnologias.",
    area: "Atuar na criação e manutenção de softwares personalizados para empresas, instituições e organizações em geral. Sua área de atuação inclui o desenvolvimento de sistemas de gestão, aplicativos empresariais, plataformas web e soluções tecnológicas sob medida para otimizar processos e melhorar a eficiência das operações.",
    modulos: `
        Banco de dados SQL
        ;Programação C# com Visual Studio - essencial
        ;Programação C# com Visual Studio - intermediário
        ;Programação C# com Visual Studio - avançado I
        ;Programação C# com Visual Studio - avançado II
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
        ;Photoshop essencial
        ;Photoshop avançado
        ;Illustrator        `,
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
        Adobe Photoshop - módulo I
        ;Adobe Photoshop - módulo II
        ;Adobe Photoshop - módulo III
        ;Adobe Illustrator - Creative Cloud
        ;CorelDraw - Graphics Suite - módulo I
        ;CorelDraw - Graphics Suite - módulo II
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
        Lógica de programação
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
        ;Desenvolvimento de games
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
        Desenvolvimento de games - 3D módulo I
        ;Desenvolvimento de games - 3D módulo II
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
        Lógica de programação
        ;Kodu Game Lab
        ;Scratch
        ;Roblox
        ;Minecraft
        ;Pixel Art
        ;Tinkercad
        ;Python
        ;Desenvolvimento de games
        ;Desenvolvimento de games - 3D módulo I
        ;Desenvolvimento de games - 3D módulo II
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
        Departamento pessoal
        ;Recursos humanos
        ;Gestão de pessoas
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
        Lógica de programação
        ;Desenvolvimento web - HTML
        ;Desenvolvimento web - CSS
        ;Desenvolvimento web - JavaScript
        ;Desenvolvimento web - WordPress
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
        Introdução à informática
        ;Windows 11 essencial
        ;Windows 11 avançado
        ;Word essencial 365
        ;Word avançado 365
        ;PowerPoint essencial 365
        ;PowerPoint avançado 365
        ;Excel - essencial 365
        ;Excel - intermediário 365
        ;Outlook essencial 365
        ;Outlook avançado 365
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
        Desenvolvimento profissional
        ;Dinamismo e compromisso com o sucesso
        ;Empreendedor de sucesso
        ;Criatividade no trabalho
        ;Dez maneiras de se vender uma ideia
        ;Gestão de conflitos
        ;Atendimento ao cliente
        ;Trabalho em equipe
        ;Liderança
        ;Gestão de pessoas
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
        Agente de vendas
        ;Google AdWords
        ;Marketing digital I
        ;Marketing digital II
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
        Excel - essencial 365
        ;Excel - intermediário 365
        ;Excel - avançado 365
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
        Desenvolvimento profissional
        ;Dinamismo e compromisso com o sucesso
        ;Empreendedor de sucesso
        ;Criatividade no trabalho
        ;Dez maneiras de se vender uma ideia
        ;Adobe Photoshop - módulo I
        ;Internet, redes sociais e aplicativos
        ;Apresentações Google
        ;Google AdWords
        ;Marketing digital I
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
        Google: ferramentas de produtividade
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
        Microsoft Power BI - módulo I 
        ;Microsoft Power BI - módulo II
        ;Microsoft Power BI - módulo III
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
        Redes - cabeamento e infraestrutura
        ;Redes - lógicas e estruturação 
        ;Redes - tecnologia wireless
        ;Montagem e manutenção de computadores
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
        Guia inteligência artificial
        ;Inteligência artificial`,
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
        Anatomia e fisiologia
        ;Cinemática do trauma
        ;Abordagem ao paciente
        ;Manejo de vias aéreas
        ;Ressuscitação cardiopulmonar
        ;Biossegurança
        ;Ferimentos
        ;Hemorragia
        ;Bandagem
        ;Choque
        ;Trauma musculoesquelético e imobilizações
        ;Traumatismos específicos
        ;Urgências clínicas na criança e no paciente adulto
        ;Remoção de vítima
        ;Urgências traumáticas no paciente adulto e na criança
        ;Intervenção em crises e atendimentos de pacientes especiais
        ;Afogamento
        ;Acidentes com múltiplas vítimas e catástrofes
        ;Acidentes com produtos perigosos
        ;Urgências psiquiátricas e obstétricas`,
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
        O laboratório clínico e as análises clínicas
        ;Biossegurança
        ;Conhecimentos biológicos para uso em laboratório e boas práticas de laboratório
        ;Vidrarias, equipamentos, esterilização e lavagem de vidrarias
        ;Microscopia
        ;Setores técnicos
        ;Coletas e processamento de amostras biológicas
        ;Hematologia
        ;Bioquímica
        ;Imunologia
        ;Hormonologia
        ;Virologia
        ;Urinálise e fluidos corporais
        ;Microbiologia e micologia
        ;Parasitologia`,
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
        Foco no ENEM e vestibulares
        ;Itinerários formativos
        ;Orientação profissional
        ;Projetos de empreendedorismo`,
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
        1º semestre
        ;Módulo 1
        ;Ética e desenvolvimento humano
        ;Empreendedorismo
        ;Português instrumental e produção técnica
        ;Saúde do trabalhador
        ;Módulo 2
        ;Anatomia e fisiologia humana
        ;Biossegurança e controle de infecção
        ;Políticas públicas de saúde e SUS
        
        ;2º semestre
        ;Módulo 3
        ;Noções de farmacologia
        ;Enfermagem em clínica médica
        ;Módulo 4
        ;Enfermagem coletiva
        ;Fundamentos e técnicas em enfermagem
    
        ;3º semestre
        ;Módulo 5
        ;Microbiologia e parasitologia
        ;Saúde do homem
        ;Práticas de cuidado em enfermagem
        ;Módulo 6
        ;Saúde da mulher
        ;Saúde da criança e do adolescente
        ;Saúde do idoso
        ;Integra estágio
        ;Estágio supervisionado I
    
        ;4º semestre
        ;Módulo 7
        ;Enfermagem em urgência e emergência
        ;Enfermagem cirúrgica
        ;Nutrição e dietética
        ;Estágio supervisionado II
        ;Módulo 8
        ;Enfermagem em terapia intensiva
        ;Saúde mental
        ;Administração em enfermagem
        ;Estágio supervisionado III`,
    cargahoraria: "1800h",
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
        1º semestre
        ;Módulo 1
        ;Ética e desenvolvimento humano
        ;Empreendedorismo
        ;Português instrumental e produção técnica
        ;Saúde do trabalhador
        ;Módulo 2
        ;Anatomia e fisiologia humana
        ;Biossegurança e controle de infecção
        ;Políticas públicas de saúde e SUS
    
        ;2º semestre
        ;Módulo 3
        ;Anatomia e patologias radiológicas
        ;Técnicas de posicionamento radiológico
        ;Módulo 4
        ;Práticas de posicionamento radiológico
        ;Equipamentos radiológicos
        ;Radioproteção e dosimetria
    
        ;3º semestre
        ;Módulo 5
        ;Técnicas do diagnóstico por imagem
        ;Exames contrastados
        ;Tomografia computadorizada e ressonância magnética
        ;Módulo 6
        ;Mamografia e densitometria óssea
        ;Gestão na radiologia
        ;Práticas do diagnóstico por imagem
        ;Integra estágio
        ;Estágio supervisionado I
    
        ;4º semestre
        ;Módulo 7
        ;Medicina nuclear, hemodinâmica e radioterapia
        ;Radiologia industrial
        ;Estágio supervisionado II
        ;Módulo 8
        ;Radiologia digital e qualidade de imagem
        ;Radiologia odontológica
        ;Radiologia veterinária
        ;Estágio supervisionado III`,
    cargahoraria: "1600h",
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
        1º semestre
        ;Módulo 1
        ;Ética e desenvolvimento humano
        ;Empreendedorismo
        ;Português instrumental e produção técnica
        ;Saúde do trabalhador
        ;Módulo 2
        ;Anatomia e fisiologia humana
        ;Biossegurança e controle de infecção
        ;Políticas públicas de saúde e SUS
    
        ;2º semestre
        ;Módulo 3
        ;Fundamentos de laboratório
        ;Urinálise e fluidos corporais
        ;Hormonologia
        ;Citologia e histologia
        ;Módulo 4
        ;Bioquímica clínica
        ;Fundamentos de genética
        ;Biologia molecular
        ;Técnicas de coleta, triagem e esterilização
        ;Integra estágio
    
        ;3º semestre
        ;Módulo 5
        ;Parasitologia clínica
        ;Microbiologia e micologia
        ;Controle de qualidade
        ;Estágio supervisionado I
        ;Módulo 6
        ;Patologia clínica
        ;Hematologia clínica
        ;Imunologia clínica
        ;Estágio supervisionado II`,
    cargahoraria: "1350h",
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
