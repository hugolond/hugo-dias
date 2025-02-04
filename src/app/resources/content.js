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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hugolond",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "www.linkedin.com/in/hugoviniciusdias",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "s",
  },
  {
    name: "E-mail",
    icon: "email",
    link: "mailto:hugolond@gmail.com",
  },
  {
    name: "PDF",
    icon: "pdf",
    link: "mailto:hugolond@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}`,
  description: `Website para apresentações dos projetos de ${person.role}`,
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
        company: "Pernambucanas",
        timeframe: "Jan/2023 - Atual",
        role: "Tech Leader",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Pernambucanas",
        timeframe: "Out/2021 - Jan/2023",
        role: "Head Tecnologia - Ecommerce/Varejo",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Connect Parts",
        timeframe: "Mai/2020 - Out/2021",
        role: "Gerente de Desenvolvimento",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
      {
        company: "Conect Parts",
        timeframe: "Mai/2020 - Out/2021",
        role: "Gerente de Desenvolvimento",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
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
        name: "UTFPR - Universidade Federal Tecn. do Paraná",
        description: <>Mestrado em Engenharia Elétrica - 2023</>,
      },
      {
        name: "UTFPR - Universidade Federal Tecn. do Paraná",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Linguagens de Programação",
        description: <>JavaScript (Node.js, React, Angular, Vue.js ,),Java, Go (GoLang), TypeScript, C#. </>,
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
