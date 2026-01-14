# ITEC Ensino - Website Institucional

Bem-vindo ao repositório do novo website do **ITEC Ensino**. Este projeto é uma aplicação web moderna desenvolvida para apresentar a instituição, seus cursos e facilitar o processo de matrícula de novos alunos.

O site foi construído com foco em **design premium**, **velocidade** e **experiência do usuário (UX)**.

![Status do Projeto](https://img.shields.io/badge/status-em_desenvolvimento-orange)
![Versão](https://img.shields.io/badge/versão-1.0.0-blue)

## 🚀 Tecnologias Utilizadas

Este projeto utiliza as tecnologias mais recentes do ecossistema React:

-   **[React](https://reactjs.org/)** (v18+) - Biblioteca para construção de interfaces.
-   **[Vite](https://vitejs.dev/)** - Build tool ultrarrápida para desenvolvimento frontend.
-   **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript para maior segurança e tipagem.
-   **[Tailwind CSS](https://tailwindcss.com/)** (v3.4+) - Framework CSS para estilização ágil e responsiva.
-   **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas e navegação.
-   **[React Slick](https://react-slick.neostack.com/)** - Carrosséis e sliders dinâmicos.

## ✨ Funcionalidades Principais

*   **Design Premium & Responsivo**: Layout moderno adaptado para desktops, tablets e smartphones.
*   **Navegação Dinâmica**: Sistema de rotas client-side para transições instantâneas entre páginas.
*   **Páginas Institucionais**:
    *   **Home**: Apresentação da escola, diferenciais, depoimentos e CTA de matrícula.
    *   **Sobre Nós**: História, Missão, Visão e Valores com design sofisticado.
    *   **Cursos**: Listagem completa com filtros por categoria (Técnico, Fundamental/Médio, Profissionalizante).
    *   **Contato**: Informações de localização, formulário e links sociais.
*   **Matrícula Online**: Página dedicada com formulário inteligente que redireciona para atendimento via WhatsApp já com os dados preenchidos.
*   **Área do Aluno**: Integração via links externos para os portais acadêmicos.

## 📁 Estrutura do Projeto

A organização de pastas segue as melhores práticas para escalabilidade:

```bash
itec-ensino/
├── public/              # Arquivos estáticos (imagens, ícones)
├── src/
│   ├── components/      # Componentes reutilizáveis (Header, Footer, Cards)
│   ├── data/            # Dados estáticos (lista de cursos, depoimentos)
│   ├── pages/           # Componentes de página (Views completas)
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Courses.tsx
│   │   ├── Enrollment.tsx
│   │   └── Home.tsx
│   ├── styles/          # Estilos globais e configurações do Tailwind
│   ├── App.tsx          # Componente raiz e configuração de rotas
│   └── main.tsx         # Ponto de entrada da aplicação
├── index.html           # Template HTML principal
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind CSS
└── tsconfig.json        # Configuração do TypeScript
```

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
*   Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

1.  **Clone o repositório** (se aplicável) ou navegue até a pasta do projeto.
2.  **Instale as dependências**:

```bash
npm install
# ou
yarn
```

3.  **Inicie o servidor de desenvolvimento**:

```bash
npm run dev
# ou
yarn dev
```

4.  O projeto estará acessível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 📦 Build para Produção

Para gerar a versão otimizada para deploy:

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`. Você pode testar o build localmente com:

```bash
npm run preview
```

## 🎨 Design System

O projeto utiliza a fonte **Outfit** (do Google Fonts) e uma paleta de cores personalizada definida no `tailwind.config.js`.

*   **Primary Color**: Verde Institucional (`#...`)
*   **Secondary Color**: Azul/Dourado de destaque (`#...`)
*   **Backgrounds**: Uso extensivo de brancos, cinzas claros e efeitos de *glassmorphism*.

## 📞 Suporte

Para dúvidas sobre o desenvolvimento ou manutenção do site, entre em contato com a equipe de TI do ITEC Ensino.

---

Desenvolvido com ❤️ pelo time de tecnologia.
