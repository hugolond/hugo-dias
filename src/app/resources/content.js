import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Hugo",
  lastName: "Dias",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Brasil/São Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Inglês", "Espanhol"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/hugoviniciusdias",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/551340424748",
  },
  {
    name: "E-mail",
    icon: "email",
    link: "mailto:hugolond@gmail.com",
  },
  {
    name: "PDF",
    icon: "pdf",
    link: "https://www.hugodias.tech/static/media/profile.pdf",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hugolond",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Website para apresentação de projetos realizados de ${person.role}`,
  headline: <>Hugo Dias</>,
  subline: (
    <>
    Olá, atualmente sou Software Engineer na <InlineCode>Pernambucanas</InlineCode> onde sou responsável por projetos de Varejo.
    </>
  ),
};

const about = {
  label: "Sobre mim",
  title: "Sobre Mim",
  description: `Olá, ${person.name}, ${person.role} sou de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Profissional com sólida experiência na área de tecnologia, atuando como Engenharia de Software e Desenvolvedor Full Stack. 
        Com um perfil dinâmico e proativo, possuo ampla expertise no desenvolvimento de soluções tecnológicas inovadoras, desde a concepção até a implementação, garantindo alta performance e escalabilidade. 
        Seu perfil é marcado pela capacidade de resolver problemas complexos, aliando conhecimentos técnicos avançados a uma visão estratégica de negócios.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencias Profissionais",
    experiences: [
      {
        company: "Pernambucanas - São Paulo",
        timeframe: "Jan/2023 - Atual",
        role: "Tech Leader",
        achievements: [
          <>
            Líder técnico para as áreas de Ecommerce e suas integrações, CRM, aplicações RFID e IA.  
          </>,
          <>
            Atuação em novos projetos de varejo para as áreas com foco em rentabilidade e perfarmace. 
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Pernambucanas - São Paulo",
        timeframe: "Out/2021 - Jan/2023",
        role: "Head Tecnologia - Ecommerce/Varejo",
        achievements: [
          <>
            Implantação/Acompanhamento técnico de novos projetos e das operações do ecommerce, garantindo a melhor estratégia visando otimizações e reduções de custos. 
          </>,
          <>
            Responsável técnico dos canais digitais de venda (APP e Site). Acompanhamento das vendas, acesso site, integrações, politicas de entrega e sellers.
          </>,
        ],
        images: [
          
        ],
      },
      {
        company: "Connect Parts - Marília",
        timeframe: "Mai/2020 - Out/2021",
        role: "Gerente de Desenvolvimento/Gestor Marketing",
        achievements: [
          <>
            Responsável pelo time de desenvolvimento Front/End e Back-end. Com atribuição de manter o fluxo operacional do ecommerce. 
          </>,
          <>
            Elaborar estrátegias e realizar a gestão dos investimentos de Marketing (mídia on-line). 
          </>,
        ],
        images: [],
      },
      {
        company: "UNOPAR - Univ. Norte do Paraná - Londrina/PR",
        timeframe: "Jan/2016 - Ago/2018",
        role: "Professor de Pós Graduação",
        achievements: [
          <>
            Docente do curso de Pós Graduação em Automação Industrial e Sistemas Inteligentes.
          </>
        ],
        images: [],
      },
      {
        company: "UNOPAR - Univ. Norte do Paraná - Londrina/PR",
        timeframe: "Jun/2013 - Ago/2018",
        role: "Coordenador de Curso Superior",
        achievements: [
          <>
            Eng. da Computação, Eng. Elétrica e CST em Análise e Desenvolvimento de Sistemas.
          </>
        ],
        images: [],
      },
      {
        company: "UNOPAR - Univ. Norte do Paraná - Londrina/PR",
        timeframe: "Fev/2013 - Ago/2018",
        role: "Professor de Ensino Superior",
        achievements: [
          <>
            Docente das disciplinas de Microcontroladores, Modelagem Matemática, Automação Industrial, Sistemas Inteligentes, Instrumentação entre outras.
          </>
        ],
        images: [],
      },
      {
        company: "UTFPR - Univ. Tecnológica Federal do Paraná - Cornélio Procópio/PR",
        timeframe: "Jan/2011 - Abr/2012",
        role: "Bolsista/Pesquisador CAPES",
        achievements: [
          <>
            Estudante de Mestrados na UTFPR - Campus Cornélio Procópio e bolsista CAPES em tempo integral.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formações Acadêmicas",
    institutions: [
      {
        name: "UTFPR - Universidade Tecnológica Federal do Paraná",
        description: <>Mestrado em Engenharia Elétrica, Engenharia Elétrica · (2011 - 2013)</>,
      },
      {
        name: "UTFPR - Universidade Tecnológica Federal do Paraná",
        description: <>Especialização, Automação e Controle de Processos Industriais (2010 - 2011)</>,
      },
      {
        name: "UNOPAR - Universidade Norte do Paraná",
        description: <>Engenheiro, Engenharia da Computação (2005 - 2009)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Linguagens de Programação",
        description: <>JavaScript (Node.js, React, Angular, Vue.js), Java, Go (GoLang), TypeScript, C#. </>,
        images: [
        ],
      },
      {
        title: "Frameworks e Bibliotecas",
        description: <>React, Vue.js, Angular, Node.js, Next.js, Spring Boot, Hibernate, .NET Core, ASP.NET </>,
        images: [
        ],
      },
      {
        title: "Cloud Computing",
        description: <>AWS, GCP.</>,
        images: [
        ],
      },
      {
        title: "Apoio Desenv./Dashboard/Versionamento/Validação Codigo",
        description: <> Docker, Kubernetes, Argo, DataDog, PowerBI, SuperSet, Grafana, Git, GitHub, Bitbucket, SonarQube.</>,
        images: [
        ],
      },
      {
        title: "Banco de Dados",
        description: <>SQL (MySQL, PostgreSQL, SQL Server), NoSQL (MongoDB, Cassandra, Firebase), Redis.</>,
        images: [
        ],
      },
      {
        title: "APIs/Integrações/Autenticações",
        description: <>RESTful APIs, GraphQL, WebSockets, SOAP, OAuth 2.0, JWT, SSO.</>,
        images: [
        ],
      },
      {
        title: "Métodos Ágeis/Projetos",
        description: <>Scrum, Kanban, Jira, Confluence, Trello.</>,
        images: [
        ],
      },
      {
        title: "Gestão ",
        description: <>Vtex, Salesforce, Google Analitcs (GA4).  </>,
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projetos",
  title: "Projetos",
  description: `Projetos de ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    }
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
