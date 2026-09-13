export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: "Início",
      languages: "Idiomas",
      skills: "Habilidades",
      projects: "Projetos",
    },

    home: {
      title: "Olá, seja bem-vindo(a)!",
      description:
        "Sou um desenvolvedor apaixonado por tecnologia e criação de soluções digitais. Gosto de transformar ideias em aplicações modernas, funcionais e eficientes, sempre buscando evoluir minhas habilidades e explorar novas tecnologias. Neste portfólio, você encontrará alguns dos meus principais projetos, conhecimentos e ferramentas. Fique à vontade para conhecer meu trabalho!",
    },

    sections: {
      languagesTitle: "Idiomas",
      skillsTitle: "Linguagens de Programação",
      toolsTitle: "Ferramentas & Tecnologias",
      projectsTitle: "Projetos em Destaque",
    },

    skillsLabels: {
      portuguese: "Português - Nativo",
      english: "Inglês - Intermediário",
      html: "HTML - Intermediário",
      css: "CSS - Intermediário",
      js: "JavaScript - Intermediário",
      lua: "Lua - Intermediário",
      ts: "TypeScript - Iniciante",
    },

    projects: {
      pokedex: {
        title: "Pokédex Interativa",
        description:
          "Aplicação web desenvolvida para consultar informações sobre Pokémon através do consumo de uma API. Permite realizar buscas por nome ou ID e apresenta dados como estatísticas, tipos e imagens de forma dinâmica e intuitiva.",
      },

      calculator: {
        title: "Calculadora Avançada",
        description:
          "Aplicação desenvolvida em TypeScript com foco em tipagem, lógica de programação e implementação de algoritmos. A ferramenta realiza diferentes operações matemáticas, apresenta o passo a passo dos cálculos e gera gráficos para facilitar a visualização das funções.",
      },

      snake: {
        title: "Clássico Snake Game",
        description:
          "Recriação do clássico Jogo da Cobrinha utilizando HTML5 Canvas e JavaScript. O projeto foi desenvolvido para praticar conceitos fundamentais de desenvolvimento de jogos, como loops de renderização, controle de entrada, gerenciamento de estado e detecção de colisões.",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      languages: "Languages",
      skills: "Skills",
      projects: "Projects",
    },

    home: {
      title: "Hello, welcome!",
      description:
        "I'm a technology enthusiast and developer focused on creating modern, functional, and efficient digital solutions. I enjoy turning ideas into applications while continuously improving my skills and exploring new technologies. In this portfolio, you'll find some of my main projects, skills, and tools. Feel free to explore my work!",
    },

    sections: {
      languagesTitle: "Languages",
      skillsTitle: "Programming Languages",
      toolsTitle: "Tools & Technologies",
      projectsTitle: "Featured Projects",
    },

    skillsLabels: {
      portuguese: "Portuguese - Native",
      english: "English - Intermediate",
      html: "HTML - Intermediate",
      css: "CSS - Intermediate",
      js: "JavaScript - Intermediate",
      lua: "Lua - Intermediate",
      ts: "TypeScript - Beginner",
    },

    projects: {
      pokedex: {
        title: "Interactive Pokédex",
        description:
          "A web application built to explore Pokémon information through API integration. It allows users to search by name or ID and dynamically displays stats, types, and images in an intuitive interface.",
      },

      calculator: {
        title: "Advanced Calculator",
        description:
          "A TypeScript application focused on typing, programming logic, and algorithm implementation. It performs various mathematical operations, provides step-by-step calculations, and generates graphs to make functions easier to visualize.",
      },

      snake: {
        title: "Classic Snake Game",
        description:
          "A recreation of the classic Snake Game built with HTML5 Canvas and JavaScript. The project was developed to practice core game development concepts such as rendering loops, input handling, state management, and collision detection.",
      },
    },
  },
};