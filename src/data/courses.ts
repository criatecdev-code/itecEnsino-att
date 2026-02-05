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
    titulo: "Assistente Administrativo",
    slug: "assistente-administrativo",
    sobre: "Atuação nos processos administrativos de empresas urbanas e rurais, executando atividades de apoio nas áreas de recursos humanos, finanças, produção, logística e vendas. Observando procedimentos operacionais e a legislação.",
    area: "Gestão de processos administrativos, controle de qualidade, informações, equipes e comunicações internas e externas. Exercer atividades de liderança, promovendo o desenvolvimento das equipes e facilitando o alcance dos objetivos. Prestar assessoria e consultoria estratégica, participando ativamente das decisões que impactam a rotina da empresa. Manter um atendimento de excelência para clientes e fornecedores. Além disso, será responsável pela organização e manutenção de arquivos e redação de documentos precisos e eficientes.",
    modulos: `
        Criatividade No Trabalho
        ;Dinamismo E Compromisso Com O Sucesso
        ;Empreendedor De Sucesso
        ;Excel - Essencial 365
        ;Excel - Intermediário 365
        ;Rotinas Administrativas
        ;Gestão De Pessoas
        `,
    cargahoraria: "48h",
    tempo: "6 meses",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/1.jpg"
  },
  {
    titulo: "Assistente De Contabilidade",
    slug: "assistente-de-contabilidade",
    sobre: "Preparar o aluno para organizar documentos e efetuar sua classificação contábil, gerar lançamentos contábeis, auxiliar na apuração dos impostos, conciliar contas e preenchimento de guias de recolhimento e de solicitações junto a órgãos do governo, emitir notas de venda e de transferência, entre outras; realizar o arquivo de documentos.",
    area: "Organizar documentos e efetuar sua classificação contábil, gerar lançamentos contábeis, auxiliar na apuração de impostos, conciliar contas e preenchimento de guias de recolhimento e solicitações junto a órgãos do governo, emitir notas de venda e de transferência, entre outras. Trabalhar em pequenas ou médias empresas ou escritórios de contabilidade, sempre sob supervisão de um contador.",
    modulos: `
        Excel - Essencial 365
        ;Matemática Financeira Na Hp 12c
        ;Assistente Contábil
        ;Departamento Pessoal
        `,
    cargahoraria: "69h",
    tempo: "8 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/2.jpg"
  },
  {
    titulo: "Atendente De Farmácia",
    slug: "atendente-de-farmacia",
    sobre: "Preparar o aluno para atuar em hospitais ou em farmácias, no comércio, no controle e dispersão de medicamentos e correlatos. Interpreta receitas médicas, esclarece pacientes no que se refere ao uso correto dos medicamentos. Trabalha sob supervisão do profissional farmacêutico.",
    area: "Atuar na área farmacêutica, na comercialização, dispersão de medicamentos e correlatos, bem como na gestão de estoque farmacêutico.",
    modulos: `
        Operador De Caixa
        ;Agente De Vendas
        ;Atendente De Farmácia 1.0
        `,
    cargahoraria: "41h",
    tempo: "5 meses e 1 semana",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/3.jpg"
  },
  {
    titulo: "Assistente de Cobrança",
    slug: "assistente-de-cobranca",
    sobre: "Capacitação de profissionais para lidar com inadimplência, desenvolvendo habilidades de comunicação, negociação e gerenciamento de conflitos. O objetivo é formar especialistas éticos, conscientes da legislação e capazes de buscar soluções para a recuperação de dívidas de forma responsável.",
    area: "Atuar na área de departamentos financeiros, setores de crédito e cobrança, ou empresas especializadas em recuperação de crédito.",
    modulos: `
        Dez Maneiras De Se Vender Uma Idéia
        ;Gestão De Conflitos
        ;Atendimento Ao Cliente
        ;Operador De Caixa
        ;Crédito E Cobrança
        ;Telemarketing
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/4.jpg"
  },
  {
    titulo: "Desenvolvimento de Apps",
    slug: "desenvolvimento-de-apps",
    sobre: "Preparação dos alunos a adquirirem habilidades técnicas e práticas para projetar, desenvolver e implementar aplicativos para dispositivos móveis e/ou web.",
    area: "Atuar em indústrias de tecnologia, em startups, empresas de desenvolvimento de software ou como empreendedores na criação de seus próprios aplicativos.",
    modulos: `
        Lógica De Programação
        ;Criando Aplicativos Com Angular
        ;Criando Aplicativos Com Ionic
        ;Criando Aplicativos Com Cordova
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/5.jpg"
  },
  {
    titulo: "Desenvolvimento de Sistemas",
    slug: "desenvolvimento-de-sistemas",
    sobre: "Preparação dos alunos para adquirirem habilidades técnicas e práticas para projetar, criar, implementar e manter sistemas de software eficientes e confiáveis. Além disso, ter o conhecimento das linguagens de programação, metodologias ágeis, banco de dados e outras ferramentas essenciais para a área de desenvolvimento de sistemas.",
    area: "Atuar na criação e manutenção de softwares personalizados para empresas, instituições e organizações em geral. Sua área de atuação inclui o desenvolvimento de sistemas de gestão, aplicativos empresariais, plataformas web e soluções tecnológicas sob medida para otimizar processos e melhorar a eficiência das operações.",
    modulos: `
        Banco De Dados SQL
        ;Programação C# Com Visual Studio - Essencial
        ;Programação C# Com Visual Studio - Intermediário
        ;Programação C# Com Visual Studio - Avançado I
        ;Programação C# Com Visual Studio - Avançado II
        `,
    cargahoraria: "76h",
    tempo: "9 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/6.jpg"
  },
  {
    titulo: "Design Para Mídias Sociais",
    slug: "design-para-midias-sociais",
    sobre: "Capacitação dos alunos para desenvolverem habilidades criativas e técnicas para criação de conteúdo visual atrativo e impactante, específico para as diferentes plataformas de mídias sociais. Visamos preparar profissionais para criar posts, imagens, vídeos e elementos gráficos que sejam relevantes, envolventes e que impulsionam o engajamento e o alcance nas redes sociais, atendendo às necessidades de marcas, empresas e influenciadores digitais.",
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/7.jpg"
  },
  {
    titulo: "Design Gráfico",
    slug: "design-grafico",
    sobre: "Preparação do aluno para edição de textos, imagens e figuras, gerar layouts e arte final para livros, revistas, folders e jornais para o mercado gráfico em geral, utilizando programas de computação, de acordo com as normas e procedimentos técnicos de qualidade e segurança.",
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/8.jpg"
  },
  {
    titulo: "Desenvolvimento de Games",
    slug: "desenvolvimento-de-games",
    sobre: "Capacitação dos alunos a adquirirem habilidades técnicas e criativas para criação de jogos eletrônicos, passando conceitos básicos da ferramenta, como criação de cenários, movimentação, colisão, uso de sons, criação de eventos, comandos de input e muito mais.",
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/9.jpg"
  },
  {
    titulo: "Desenvolvimento de Games II",
    slug: "desenvolvimento-de-games-ii",
    sobre: "Capacitação dos alunos a adquirirem habilidades técnicas e criativas para criação de jogos eletrônicos, passando conceitos básicos da ferramenta, como criação de cenários, movimentação, colisão, uso de sons, criação de eventos, comandos de input e muito mais.",
    area: "Atuação em diversas áreas da indústria de jogos eletrônicos, incluindo desenvolvimento de jogos para plataformas móveis e consoles, criação de jogos para realidade virtual e aumentada, produção de jogos educacionais e de treinamento, além de oportunidades em estúdios de desenvolvimento de games, empresas de tecnologia e até mesmo como empreendedor independente na criação de jogos autorais.",
    modulos: `
        Pixel Art
        ;Tinkercad
        ;Python
        ;Desenvolvimento De Games
        `,
    cargahoraria: "68h",
    tempo: "8 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/10.jpg"
  },
  {
    titulo: "Desenvolvimento de Games 3D",
    slug: "desenvolvimento-de-games-3d",
    sobre: "Capacitação dos alunos para adquirirem habilidades técnicas e criativas para criar jogos tridimensionais imersivos, permitindo a criação de experiências interativas e visualmente impactantes para diferentes plataformas e dispositivos.",
    area: "Atuação em estúdios de desenvolvimento de jogos, criando mundos e personagens para jogos em diversas plataformas. Além disso, podem encontrar oportunidades em empresas de realidade virtual e aumentada, produzindo conteúdo imersivo.",
    modulos: `
        Desenvolvimento De Games - 3d Módulo I
        ;Desenvolvimento De Games - 3d Módulo II
        `,
    cargahoraria: "40h",
    tempo: "5 meses",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/11.jpg"
  },
  {
    titulo: "Desenvolvimento de  Jogos Digitais",
    slug: "desenvolvimento-de-jogos-digitais",
    sobre: "Capacitação dos alunos para adquirirem habilidades técnicas e criativas para criação de jogos eletrônicos de forma completa e profissional. Ao final do curso, os participantes estarão aptos a conceber, projetar, programar e implementar jogos para diferentes plataformas, utilizando tecnologias e ferramentas relevantes para a indústria de desenvolvimento de games.",
    area: "Atuação em estúdios de desenvolvimento de games, criando jogos para consoles, PC e dispositivos móveis. Além disso, podem encontrar oportunidades em empresas de realidade virtual e aumentada, produzindo experiências imersivas. Outras áreas incluem gamificação, desenvolvimento de aplicativos interativos e simulações para treinamento.",
    modulos: `
        Lógica De Programação
        ;Kodu Game Lab
        ;Scratch
        ;Roblox
        ;Minecraft
        ;Pixel Art
        ;Tinkercad
        ;Python
        ;Desenvolvimento De Games
        ;Desenvolvimento De Games - 3d Módulo I
        ;Desenvolvimento De Games - 3d Módulo II
        `,
    cargahoraria: "172h",
    tempo: "21 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/12.jpg"
  },
  {
    titulo: "Gestão de RH",
    slug: "gestao-de-rh",
    sobre: "Capacitação dos alunos para adquirirem conhecimentos teóricos e práticos para atuar de forma estratégica na gestão de pessoas dentro das organizações.",
    area: "Atuação em diversas áreas, como: setores de Recursos Humanos de empresas, consultorias em RH para auxiliar em processos de recrutamento e seleção, desenvolvimento de treinamentos e políticas de retenção de talentos, e também em cargos de liderança e gestão de equipes dentro das organizações.",
    modulos: `
        Departamento Pessoal
        ;Recursos Humanos
        ;Gestão De Pessoas
        `,
    cargahoraria: "60h",
    tempo: "7 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/13.jpg"
  },
  {
    titulo: "Desenvolvimento Web",
    slug: "desenvolvimento-web",
    sobre: "Capacitação dos alunos para adquirirem habilidades técnicas para projetar, criar e implementar sites e aplicações web de forma eficiente e profissional. O curso visa preparar profissionais para atuarem no desenvolvimento de soluções web que atendam às necessidades e demandas do mercado digital atual.",
    area: "Atuação em agências de criação, empresas de tecnologia e startups, desenvolvendo e mantendo sites e aplicações web, em setores de comércio eletrônico, mídia digital e empreendendo projetos próprios na área de desenvolvimento web.",
    modulos: `
        Lógica De Programação
        ;Desenvolvimento Web - Html
        ;Desenvolvimento Web - Css
        ;Desenvolvimento Web - Javascript
        ;Desenvolvimento Web - Wordpress
        `,
    cargahoraria: "52h",
    tempo: "6 meses e 2 semanas",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/14.jpg"
  },
  {
    titulo: "Informática Completa",
    slug: "informatica-completa",
    sobre: "Capacitação dos alunos para adquirirem conhecimentos teóricos e práticos sobre o uso e aplicação de tecnologias da informação.",
    area: "Atuação em diversas áreas, como: suporte técnico em empresas de tecnologia, atendimento ao cliente em setores de informática, auxiliando na resolução de problemas e manutenção de equipamentos, e também em cargos administrativos e de escritório, utilizando softwares de escritório e sistemas de gestão.",
    modulos: `
        Introdução A Informática
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/15.jpg"
  },
  {
    titulo: "Liderança 4.0",
    slug: "lideranca-4-0",
    sobre: "Capacitação dos participantes para desenvolverem habilidades e competências essenciais para exercerem papéis de liderança de forma eficaz e inspiradora. Visando preparar os alunos para assumirem posições de liderança em suas carreiras, maximizando o potencial de suas equipes e contribuindo para o sucesso das organizações.",
    area: "Atuação em diversas áreas, como: gestão de equipes em empresas de diferentes setores, liderança em projetos e empreendimentos, cargos de supervisão e coordenação em organizações, além de oportunidades em consultorias e treinamentos em desenvolvimento de liderança.",
    modulos: `
        Desenvolvimento Profissional
        ;Dinamismo E Compromisso Com O Sucesso
        ;Empreendedor De Sucesso
        ;Criatividade No Trabalho
        ;Dez Maneiras De Se Vender Uma Idéia
        ;Gestão De Conflitos
        ;A'tendimento Ao Cliente
        ;Trabalho Em Equipe
        ;Liderança
        ;Gestão De Pessoas
        `,
    cargahoraria: "42h",
    tempo: "5 meses e 1 semana",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/16.jpg"
  },
  {
    titulo: "Gestão e Marketing Digital",
    slug: "gestao-e-marketing-digital",
    sobre: "Capacitação dos alunos para adquirirem habilidades estratégicas e técnicas para planejar, implementar e gerir campanhas de marketing digital de forma eficiente.",
    area: "Atuação em diversas áreas, como: gerência de marketing digital em empresas, agências de publicidade e marketing, consultorias para otimizar estratégias digitais de negócios, e empreendedorismo para impulsionar o crescimento de marcas e projetos online.",
    modulos: `
        Agente De Vendas
        ;Google Adwords
        ;Marketing Digital I
        ;Marketing Digital II
        `,
    cargahoraria: "50h",
    tempo: "6 meses e 1 semana",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/17.jpg"
  },
  {
    titulo: "Excel Profissional",
    slug: "excel-profissional",
    sobre: "Capacitação dos alunos para adquirirem habilidades avançadas e especializadas no uso do Microsoft Excel para fins profissionais. Visando preparar profissionais para lidarem com desafios complexos em suas áreas de atuação, usando o Excel como uma poderosa ferramenta de análise e tomada de decisões.",
    area: "A expertise em Excel é valorizada em diferentes setores profissionais, como em setores administrativos e financeiros de empresas, departamentos de recursos humanos para análise de dados e relatórios, em consultorias para auxiliar clientes com análises complexas de dados, e também em áreas de pesquisa e desenvolvimento para coletar e analisar informações relevantes.",
    modulos: `
        Excel - Essencial 365
        ;Excel - Intermediário 365
        ;Excel - Avançado 365
        `,
    cargahoraria: "24h",
    tempo: "3 meses",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/18.jpg"
  },
  {
    titulo: "Social Media 360",
    slug: "social-media-360",
    sobre: "Capacitação dos participantes a adquirirem conhecimentos e habilidades para gerir de forma estratégica as mídias sociais de empresas, marcas e projetos. Visando a qualificação dos profissionais para atuarem no crescente mercado de mídias sociais, tornando-se especialistas em impulsionar o alcance e o engajamento das marcas nas plataformas digitais.",
    area: "Atuação em diversas áreas como: agências de marketing digital, gerenciamento de redes sociais para empresas e marcas, criação de conteúdo para influenciadores digitais, estratégias de mídias sociais para e-commerce, além de oportunidades em setores de comunicação e publicidade.",
    modulos: `
        Desenvolvimento Profissional
        ;Dinamismo E Compromisso Com O Sucesso
        ;Empreendedor De Sucesso
        ;Criatividade No Trabalho
        ;Dez Maneiras De Se Vender Uma Idéia
        ;Adobe Photoshop - Módulo I
        ;Internet, Redes Sociais E Aplicativos
        ;Apresentações Google
        ;Google Adwords
        ;Marketing Digital I
        `,
    cargahoraria: "82h",
    tempo: "10 meses e 1 semana",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/19.jpg"
  },
  {
    titulo: "Google Business",
    slug: "google-business",
    sobre: "Capacitação dos participantes a dominarem as ferramentas e recursos oferecidos pela Google para otimizar a produtividade e a colaboração no ambiente corporativo.",
    area: "Atuação em diversas áreas, como: setores administrativos e de secretariado, gerenciamento de projetos e equipes, consultorias em produtividade e processos de negócios, e empreendedorismo para otimizar a gestão de empresas.",
    modulos: `
        Google: Ferramentas De Produtividade
        ;Documentos Google
        ;Planilhas Google
        ;Apresentações Google
        `,
    cargahoraria: "40h",
    tempo: "5 meses",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/20.jpg"
  },
  {
    titulo: "Power BI",
    slug: "power-bi",
    sobre: "Vivemos em um mundo em que muitas coisas que fazemos geram dados e, interpretar essas informações é algo essencial para ajudar a tomar as melhores decisões. O Power BI é uma ferramenta que possibilita essa análise de dados. Ao longo dos módulos o aluno aprenderá os conceitos necessários dessa ferramenta, desde conhecimentos simples até os mais avançados.",
    area: "Finanças e contabilidade - Marketing e vendas - Recursos humanos - Operações e logística Saúde e ciências da vida - Educação e pesquisa",
    modulos: `
        Microsoft Power Bi - Modulo I 
        ;Microsoft Power Bi - Modulo II
        ;Microsoft Power Bi - Modulo III 
        `,
    cargahoraria: "48h",
    tempo: "6 meses",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/24.jpg"
  },
  {
    titulo: "Redes e Infraestrutura",
    slug: "redes-e-infraestrutura",
    sobre: "Voltado para profissionais que desejam aprimorar seus conhecimentos e habilidades em projetos de infraestrutura de redes, bem como a implantação, configuração e administração de redes de computadores.",
    area: `Administração de redes - Análise de redes - Análise de segurança de redes
        Consultoria de tecnologia de redes - Engenharia de redes - Gerência de projetos de rede - Gerência de suporte de rede - Especialista em infraestrutura de TI
        Os profissionais que atuam nessas áreas são responsáveis por: Instalar, configurar e
        manter redes corporativas - Garantir o bom funcionamento de sistemas e servidores
        Implementar sistemas e redes - Gerenciar e manter a infraestrutura tecnológica de uma organização Planejar, implementar, suportar e otimizar sistemas e redes de computadores`,
    modulos: `
        Redes - Cabeamento E Infraestrutura 
        ;Redes - Lógicas E Estruturação 
        ;Redes - Tecnologia Wireless
        ;Montagem E Manutenção De Computadores
        `,
    cargahoraria: "49h",
    tempo: "6 meses e 1 semana",
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/21.jpg"
  },
  {
    titulo: "Finanças Essencial",
    slug: "financas-essencial",
    sobre: "Finanças Essencial é voltado para estudantes e profissionais que desejam aprender os conceitos fundamentais de finanças, desde a gestão de orçamento pessoal até a análise financeira de empresas.",
    area: "Planejamento financeiro - Controle financeiro - Monitoramento de recursos financeiros - Análise de custos e riscos - Gestão de fluxo de caixa - Alocação de recursos - Investimentos - Profissões na área financeira - Analista financeiro - Analista de risco - Analista de fundos de investimento - Analista de crédito - Analista de mercado de capitais - Economista financeiro - Consultor financeiro - Trader",
    modulos: `
        Operador De Caixa
        ;Credito E Cobranca 
        ;Matemática Financeira Hp 12c
        `,
    cargahoraria: "34h",
    tempo: "4 meses e 1 semana",
    categoria: "Cursos Profissionalizantes",
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/23.jpg"
  },
  {
    titulo: "Atendimento pré hospitalar",
    slug: "atendimento-pre-hospitalar",
    sobre: "O objetivo da capacitação em APH: Atendimento Pré-Hospitalar é capacitar os profissionais da área da saúde que desejam atuar como “Socorristas no SAMU“, Bombeiros civis e militares, Condutores de veículos de emergência, Comissários de voo, Voluntários da Defesa Civil, Técnicos em Segurança do Trabalho, Bombeiros Voluntários, Brigadistas, Socorristas de Resgate Rodoviário.",
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/25.jpg"
  },
  {
    titulo: "Auxiliar de Laboratório em Análises Clínicas",
    slug: "auxiliar-de-laboratorio-em-analises-clinicas",
    sobre: "O curso de Auxiliar de Laboratório em Análises Clínicas qualifica o aluno para desempenhar as atribuições das rotinas de trabalho em laboratórios de análises clínicas.",
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
    categoria: "Cursos Profissionalizantes",
    img: "/img/fotos/26.jpg"
  },
  {
    titulo: "Técnico em Enfermagem",
    slug: "tecnico-em-enfermagem",
    sobre: "Transforme sua vocação em profissão e faça a diferença na vida das pessoas! \n\t\tO Curso Técnico em Enfermagem do ITEC foi criado para quem deseja cuidar com técnica, empatia e propósito. \n\t\tNossa formação une teoria e prática em laboratórios modernos, com professores experientes e metodologia voltada \n\t\tpara o desenvolvimento de competências reais do mercado da saúde. \n\t\tEm apenas 24 meses, você estará preparado(a) para atuar com segurança em hospitais, clínicas e unidades de atenção básica.",
    area: "O mercado da saúde está em plena expansão, e o técnico em enfermagem é hoje um dos profissionais mais procurados no Brasil. \n\tCom a formação do ITEC, você conquista oportunidades em hospitais, clínicas, laboratórios, home care e programas de saúde pública. \n\tAlém da estabilidade e das boas remunerações, você terá a satisfação de exercer uma profissão que salva e transforma vidas todos os dias.",
    modulos: `
        1º SEMESTRE
        ;MÓDULO 1
        ;Ética e Desenvolvimento Humano
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
        ;Fundamentos e Técnicas em Enfermagem
    
        ;3º SEMESTRE
        ;MÓDULO 5
        ;Microbiologia e Parasitologia
        ;Saúde do Homem
        ;Práticas de Cuidado em Enfermagem
        ;MÓDULO 6
        ;Saúde da Mulher
        ;Saúde da Criança e do Adolescente
        ;Saúde do Idoso
        ;Integra Estágio + Estágio Supervisionado I
    
        ;4º SEMESTRE
        ;MÓDULO 7
        ;Enfermagem em Urgência e Emergência
        ;Enfermagem Cirúrgica
        ;Nutrição e Dietética
        ;Estágio Supervisionado II
        ;MÓDULO 8
        ;Enfermagem em Terapia Intensiva
        ;Saúde Mental
        ;Administração em Enfermagem
        ;Estágio Supervisionado III
        `,
    cargahoraria: "1200h",
    tempo: "24 meses",
    categoria: "Cursos Técnicos",
    turnos: `
        MANHÃ – Segunda e Quarta das 7:30h às 11:30h
        ;TARDE – Segunda e Quarta das 13:20h às 17:20h
        ;NOITE – Segunda e Quarta das 18:20h às 21:55h
        ;INTEGRAL – Sábado das 7:30h às 11:30h e das 12:30h às 16:30h
        `,
    obs: "Matriz Curricular 2026 (pode sofrer alterações até fev/2026)",
    img: "/img/fotos/27.jpg"
  },
  {
    titulo: "Técnico em Análises Clínicas",
    slug: "tecnico-em-analises-clinicas",
    sobre: "Transforme curiosidade científica em uma carreira promissora! \n\tO Curso Técnico em Análises Clínicas do ITEC prepara você para atuar com excelência nos bastidores da saúde, realizando exames laboratoriais que auxiliam no diagnóstico e na prevenção de doenças. \n\tCom uma formação moderna e prática, você aprenderá técnicas de coleta, análises bioquímicas, microbiológicas e hematológicas, utilizando equipamentos de última geração e metodologia orientada para o mercado. \n\tEm apenas 18 meses, você estará pronto(a) para atuar em laboratórios, hospitais e clínicas em todo o país.",
    area: "O mercado para o técnico em análises clínicas está em constante crescimento, impulsionado pela expansão dos serviços de saúde e pela importância do diagnóstico laboratorial. \n\tCom o diploma do ITEC, você poderá atuar em laboratórios, hospitais, clínicas, bancos de sangue e centros de pesquisa, sendo um elo fundamental entre a ciência e o cuidado com o paciente. \n\tUma carreira estável, tecnológica e com alta demanda espera por você.",
    modulos: `
        1º SEMESTRE
        ;MÓDULO 1
        ;Ética e Desenvolvimento Humano
        ;Empreendedorismo
        ;Português Instrumental e Produção Técnica
        ;Saúde do Trabalhador
        ;Primeiros Socorros
        ;Química
        ;MÓDULO 2
        ;Anatomia e Fisiologia Humana
        ;Biossegurança e Controle de Infecção
        ;Políticas Públicas de Saúde e SUS
        ;Biologia Molecular
        ;Citologia e Histologia
    
        ;2º SEMESTRE
        ;MÓDULO 3
        ;Fundamentos de Laboratório
        ;Urinálise e Fluidos Corporais
        ;Hormonologia
        ;Introdução à Bioquímica
        ;MÓDULO 4
        ;Bioquímica Clínica
        ;Fundamentos de Genética
        ;Fundamentos de Biofísica
        ;Técnicas de Coleta, Triagem e Esterilização
        ;Integra Estágio
    
        ;3º SEMESTRE
        ;MÓDULO 5
        ;Parasitologia Clínica – 72h
        ;Microbiologia e Micologia – 72h
        ;Controle de Qualidade – 72h
        ;Estágio Supervisionado I
        ;MÓDULO 6
        ;Patologia Clínica – 72h
        ;Hematologia Clínica – 72h
        ;Imunologia Clínica – 72h
        ;Estágio Supervisionado II
        `,
    cargahoraria: "1200h",
    tempo: "18 meses",
    categoria: "Cursos Técnicos",
    turnos: `
        NOITE – Segunda, Quarta e Quinta das 18:20h às 21:55h
        `,
    obs: "Matriz Curricular 2026 (pode sofrer alterações até fev/2026). Não disponível para unidade de Resende.",
    img: "/img/fotos/28.jpg"
  },
  {
    titulo: "Técnico em Radiologia",
    slug: "tecnico-em-radiologia",
    sobre: "Descubra o poder da tecnologia aplicada à saúde! \n\tO Curso Técnico em Radiologia do ITEC forma profissionais prontos para operar equipamentos de alta precisão e contribuir diretamente para o diagnóstico médico. \n\tCom aulas práticas em laboratórios equipados e professores experientes, você aprende desde os fundamentos da radiologia até o uso de tecnologias avançadas de imagem, como tomografia e ressonância magnética. \n\tEm 24 meses, você estará preparado(a) para atuar em clínicas, hospitais e centros de diagnóstico em todo o país.",
    area: "O profissional técnico em radiologia é essencial em qualquer instituição de saúde moderna. \n\tCom a formação do ITEC, você estará pronto(a) para atuar em hospitais, clínicas, laboratórios e centros de diagnóstico por imagem, \n\tem um dos setores que mais cresce no país. Além das excelentes oportunidades e valorização profissional, \n\ta radiologia oferece um campo de atuação tecnológica e humana, ideal para quem busca estabilidade e propósito.",
    modulos: `
        1º SEMESTRE
        ;MÓDULO 1
        ;Ética e Desenvolvimento Humano
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
        ;Integra Estágio + Estágio Supervisionado I
    
        ;4º SEMESTRE
        ;MÓDULO 7
        ;Medicina Nuclear, Hemodinâmica e Radioterapia
        ;Radiologia Odontológica
        ;Radiologia Veterinária
        ;Estágio Supervisionado II
        ;MÓDULO 8
        ;Radiologia Digital e Qualidade de Imagem
        ;Radiologia Industrial
        ;Estágio Supervisionado III
        `,
    cargahoraria: "1200h",
    tempo: "24 meses",
    categoria: "Cursos Técnicos",
    obs: "Matriz Curricular 2026 (pode sofrer alterações até fev/2026)",
    img: "/img/fotos/29.jpg"
  },
  {
    titulo: "Ensino Fundamental I (1º ao 5º Ano)",
    slug: "ensino-fundamental-1",
    sobre: "Uma base sólida para o futuro! Nos Anos Iniciais, o foco é a alfabetização plena, o desenvolvimento do raciocínio lógico e a socialização. Com o 'Contraturno ITEKids', oferecemos atividades extracurriculares como judô, balé, música e robótica, transformando a escola em um espaço de descoberta e alegria.",
    area: "Alfabetização e Letramento • Matemática Lúdica • Ciências e Descoberta • Artes e Movimento • Inglês Iniciante • Robótica Kids",
    modulos: `
        Aulas lúdicas e interativas
        ;Material didático atualizado
        ;Projetos multidisciplinares
        ;Acompanhamento individualizado
        ;Eventos culturais e datas comemorativas
        `,
    cargahoraria: "Manhã / Tarde",
    tempo: "Anual",
    categoria: "Ensino Fundamental",
    img: "/img/home/fundamental.png"
  },
  {
    titulo: "Ensino Fundamental II (6º ao 9º Ano)",
    slug: "ensino-fundamental-2",
    sobre: "Preparação para novos desafios. Nesta etapa, estimulamos a autonomia, o pensamento crítico e a responsabilidade. Os alunos aprofundam conhecimentos em todas as áreas e começam a desenhar seu Projeto de Vida, com suporte socioemocional e acadêmico de excelência.",
    area: "Língua Portuguesa e Produção Textual • Matemática Avançada • Ciências da Natureza • História e Geografia • Inglês Intermediário • Educação Financeira",
    modulos: `
        Laboratórios de Ciências e Informática
        ;Projetos de Pesquisa
        ;Simulados preparatórios
        ;Olimpíadas do Conhecimento
        ;Orientação de Estudos
        `,
    cargahoraria: "Manhã",
    tempo: "Anual",
    categoria: "Ensino Fundamental",
    img: "/img/fotos/31.png"
  },
  {
    titulo: "Ensino Médio Regular",
    slug: "ensino-medio-regular",
    sobre: "O caminho para a Universidade. Nosso Ensino Médio oferece uma formação robusta, focada nos principais vestibulares e no ENEM. Com professores especialistas e material de alto nível, preparamos o aluno para alcançar seus sonhos acadêmicos.",
    area: "Linguagens e Códigos • Ciências da Natureza • Ciências Humanas • Matemática • Redação Nota 1000",
    modulos: `
        Aulões de Véspera
        ;Simulados ENEM
        ;Orientação Vocacional
        ;Monitorias de Apoio
        ;Plataforma Digital de Estudos
        `,
    cargahoraria: "Manhã",
    tempo: "3 Anos",
    categoria: "Ensino Médio",
    img: "/img/fotos/30.jpg"
  },
  {
    titulo: "Novo Ensino Médio - Itinerários",
    slug: "novo-ensino-medio-itinerarios",
    sobre: "Protagonismo e escolha. No Novo Ensino Médio do ITEC, o aluno escolhe trilhas de aprofundamento (Itinerários Formativos) conectadas com seus interesses e carreira futura, focando em competências para o mundo moderno.",
    area: "Tecnologia e Inovação • Saúde e Bem-estar • Empreendedorismo e Gestão • Humanidades e Sociedade",
    modulos: `
        Projetos Integradores
        ;Eletivas Diversificadas
        ;Certificações Intermediárias
        ;Mentoria de Carreira
        `,
    cargahoraria: "Manhã / Tarde",
    tempo: "3 Anos",
    categoria: "Ensino Médio",
    img: "/img/home/medio.png"
  },
  {
    titulo: "Projeto de Vida e Socioemocional",
    slug: "projeto-de-vida-e-socioemocional",
    sobre: "Mais que conteúdo, formação humana. Desenvolvemos competências socioemocionais essenciais para o século XXI, como inteligência emocional, resiliência, empatia e liderança, preparando o aluno para a vida e para o convívio em sociedade.",
    area: "Autoconhecimento • Planejamento de Carreira • Inteligência Emocional • Cidadania e Ética",
    modulos: `
        Workshops Vivenciais
        ;Dinâmicas de Grupo
        ;Atendimento Psicopedagógico
        ;Palestras com Profissionais
        ;Ações Sociais
        `,
    cargahoraria: "Integrado",
    tempo: "Contínuo",
    categoria: "Ensino Médio",
    img: "/img/fotos/16.jpg"
  },
  {
    titulo: "Robótica e Tecnologia Educacional",
    slug: "robotica-e-tecnologia-educacional",
    sobre: "Inovação na prática. Desde cedo, nossos alunos têm contato com programação, robótica e cultura maker. Nossos laboratórios equipados permitem transformar teoria em projetos reais, estimulando a criatividade e a resolução de problemas.",
    area: "Lógica de Programação • Robótica LEGO • Impressão 3D • Cultura Maker • Pensamento Computacional",
    modulos: `
        Torneios de Robótica
        ;Feira de Ciências e Tecnologia
        ;Projetos Maker
        ;Programação de Games
        ;Automação Básica
        `,
    cargahoraria: "Integrado",
    tempo: "Contínuo",
    categoria: "Ensino Médio",
    img: "/img/fotos/21.jpg"
  }
];
