import { Github, Twitter, Figma, Instagram, Link, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoRefactory from '/public/images/logos/logo-refactory.svg';
import LogoCDI from '/public/images/logos/logo-cdi.svg';
import LogoGanesha from '/public/images/logos/logo-ganesha.svg';
import LogoGo from '/public/images/logos/logo-go.svg';
import LogoPython from '/public/images/logos/logo-python.svg';
import LogoDart from '/public/images/logos/logo-dart.svg';
import LogoC from '/public/images/logos/logo-c.svg';
import LogoDotnet from '/public/images/logos/logo-dotnet.svg';
import LogoVue from '/public/images/logos/logo-vue.svg';
import LogoSvelte from '/public/images/logos/logo-svelte.svg';
import LogoRobotFramework from '/public/images/logos/logo-robotframework.svg';
import LogoLaravel from '/public/images/logos/logo-laravel.svg';
import LogoSupabase from '/public/images/logos/logo-supabase.svg';
import LogoFlutter from '/public/images/logos/logo-flutter.svg';
import LogoMySql from '/public/images/logos/logo-mysql.svg';
import LogoOdoo from '/public/images/logos/logo-odoo.svg';
import LogoPostman from '/public/images/logos/logo-postman.svg';
import LogoRedis from '/public/images/logos/logo-redis.svg';
import LogoRabbitmq from '/public/images/logos/logo-rabbitmq.svg';
import LogoDocker from '/public/images/logos/logo-docker.svg';
import LogoJerivo from '/public/images/logos/logo-jerivo.svg';
import LogoJerivoLight from '/public/images/logos/logo-jerivo-light.svg';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/MuhAsmann',
  GITHUB_REPO: 'https://github.com/MuhAsmann',
  TWITTER: 'https://twitter.com/',
  FIGMA: 'https://www.figma.com/',
  FIGMA_FILE:
    '',
  INSTAGRAM: 'https://www.instagram.com/muh_asmann/',
  LINKEDIN: 'https://www.linkedin.com/in/muh-asmann/',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Blog',
    href: '#blog',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/MuhAsmann',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/muh_asmann/',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/muh-asmann/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Go',
    logo: LogoGo,
    url: 'https://golang.org/',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'C#',
    logo: LogoC,
    url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    label: '.NET',
    logo: LogoDotnet,
    url: 'https://dotnet.microsoft.com/',
  },
  {
    label: 'NestJS',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Vue.js',
    logo: LogoVue,
    url: 'https://vuejs.org/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MySQL',
    logo: LogoMySql,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'Redis',
    logo: LogoRedis,
    url: 'https://redis.io/',
  },
  {
    label: 'RabbitMQ',
    logo: LogoRabbitmq,
    url: 'https://www.rabbitmq.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Robot Framework',
    logo: LogoRobotFramework,
    url: 'https://robotframework.org/',
  },
];

export const FAMILIAR_TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Laravel',
    logo: LogoLaravel,
    url: 'https://laravel.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Supabase',
    logo: LogoSupabase,
    url: 'https://supabase.io/',
  },
  {
    label: 'Odoo',
    logo: LogoOdoo,
    url: 'https://www.odoo.com/',
  },
  {
    label: 'Svelte',
    logo: LogoSvelte,
    url: 'https://svelte.dev/',
  },
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoGanesha,
    logoAlt: 'Ganesha Operation Logo',
    position: 'Head of Backend Development Section',
    startDate: new Date(2026, 4),
    currentlyWorkHere: true,
    summary: [
      'Set technical direction for backend development across dozens of microservices (Go, NestJS) backed by PostgreSQL, Redis, and RabbitMQ, while staying hands-on with major features and critical production issues.',
      'Consolidated two real-time game services (Socket.IO and native socket) into a single, high-performance service using native WebSocket.',
      'Built Go-based scheduled jobs to process large, non-real-time datasets spanning multiple services.',
      'Design and maintain REST and gRPC APIs, asynchronous workflows, and real-time services used by Ganesha Operation web and mobile applications.',
      'Work with engineering, business, and management stakeholders to translate business processes into scalable technical solutions.',
    ],
  },
  {
    logo: LogoGanesha,
    logoAlt: 'Ganesha Operation Logo',
    position: 'Backend Developer',
    startDate: new Date(2024, 10),
    endDate: new Date(2026, 4),
    summary: [
      'Developed backend services in Go and NestJS within a microservices architecture, integrating services over REST and gRPC.',
      'Delivered modules for leave management, student management and progress reporting, marketing and sales data, and payments.',
      'Contributed to API design, database integration, and architecture decisions; investigated and resolved issues in development and production.',
    ],
  },
  {
    logo: LogoCDI,
    darkModeLogo: LogoCDI,
    logoAlt: 'Castellum Digital Indonesia Logo',
    position: 'Frontend Developer (Freelance)',
    startDate: new Date(2024, 8),
    endDate: new Date(2024, 9),
    summary: [
      'Built a responsive React.js dashboard with interactive data charts for the SATUSEHAT program.',
      'Reduced page load time by 40% and increased user engagement by 25% through frontend optimizations.',
    ],
  },
  {
    logo: LogoRefactory,
    darkModeLogo: LogoRefactory,
    logoAlt: 'Refactory Logo',
    position: 'Software Engineer',
    startDate: new Date(2023, 8),
    endDate: new Date(2024, 8),
    summary: [
      'Developed Vue.js and Razor web interfaces and a Flutter mobile app (BLoC).',
      'Built middleware services and APIs in .NET to integrate enterprise procurement systems (BSI KTB).',
      'Built Go backend APIs for high-performance web applications, including the Tempo news portal.',
      'Contributed to the design and integration of microservices-based enterprise systems (procurement, finance, vendor management).',
      'Wrote automated tests with Robot Framework.',
    ],
  },
  {
    logo: LogoJerivo,
    darkModeLogo: LogoJerivoLight,
    logoAlt: 'Jerivo Logo',
    position: 'Freelance Software Engineer',
    startDate: new Date(2023, 0),
    currentlyWorkHere: true,
    summary: [
      'Design and deliver software solutions to client requirements across backend, web, and application development.',
      'Handle end-to-end implementation, debugging, performance tuning, and maintenance of production applications.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Tempo.co - Full Stack Developer',
    description:
      'A platform for managing the Tempo.co news portal, such as managing articles, multimedia content, and company data. Built high-performance backend APIs with Go and interactive frontend views with Vue.js.',
    url: 'https://www.tempo.co/',
    previewImage: '/images/projects/project-tempo.svg',
    technologies: [
      'Go',
      'Vue.js',
      'PostgreSQL',
      'REST API',
    ],
  },
  {
    name: 'Castellum Digital - SATUSEHAT Dashboard - Frontend Developer',
    description:
      'A responsive health analytics dashboard for the national SATUSEHAT program with interactive data charts, delivering 40% faster page load time and 25% higher user engagement.',
    url: '#',
    previewImage: '/images/projects/project-satusehat.svg',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Chart.js',
      'Postman',
    ],
  },
  {
    name: 'Ganesha Operation - Backend Developer',
    description:
      'Microservices architecture serving web and mobile applications for Indonesia\'s leading tutoring institution. Developed high-throughput REST, gRPC, and real-time WebSocket services, consolidated game engines, and built large-scale batch processing pipelines.',
    url: 'https://ganeshaoperation.com/',
    previewImage: '/images/projects/project-ganesha.svg',
    technologies: [
      'Go',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
      'REST API',
      'gRPC',
      'WebSocket',
    ],
  },
  {
    name: 'Enterprise Procurement BSI KTB - Backend Developer',
    description:
      'Enterprise procurement integration and middleware platform built with Clean Architecture, integrating vendors, purchasing workflows, and enterprise data.',
    url: 'https://www.bsi.id/',
    previewImage: '/images/projects/project-bsi.svg',
    technologies: [
      '.NET',
      'C#',
      'SQL Server',
      'Clean Architecture',
      'Microservices',
    ],
  },
  {
    name: 'Refactory - Portal Vendor MPM - Fullstack Developer',
    description:
      'A platform for managing the Portal Vendor MPM website, such as managing data vendor, managing Procurement data, and managing company data.',
    url: '#',
    previewImage: '/images/project-pepehousing.png',
    technologies: [
      'Vue.js',
      '.Net',
      'Microservices',
      'PostgreSQL',
    ],
  },
  {
    name: 'Refactory - Mytok MPM HRIS - Mobile Developer',
    description:
      'A mobile application for managing the Mytok mobile, which is a platform for managing the company\'s internal affairs.',
    url: '#',
    previewImage: '/images/project-wingie.png',
    technologies: [
      'Flutter',
      'Bloc',
    ],
  },
  {
    name: 'Refactory - Sev 2 - Fullstack Developer',
    description:
      'A platform for managing the Sev2 website and mobile, such as managing task data and project',
    url: '#',
    previewImage: '/images/project-fiskil.png',
    technologies: [
      'Supabase',
      'Go',
      'Flutter',
      'PostgreSQL'
    ],
  },
  {
    name: 'Refactory - GT Virtuz - Odoo Developer',
    description:
      'A platform for managing the GT Virtuz ERP website, managing Procurement data, and managing company data.',
    url: '#',
    previewImage: '/images/project-pepehousing.png',
    technologies: [
      'Odoo',
      'Python',
    ],
  },
  {
    name: 'Refactory - Mytok MPM HRIS - QA Engineer',
    description:
      'A platform for managing the Mytok mobile, such as managing employee data, managing project data, and managing company data.',
    url: '#',
    previewImage: '/images/project-wingie.png',
    technologies: [
      'Robot Framework',
      'Postman',
    ],
  },
  {
    name: 'Refactory - FrontDesk - Fullstack Developer',
    description:
      'A platform for managing the Events, such as managing employee data, managing project data, and managing company data.',
    url: '#',
    previewImage: '/images/project-fiskil.png',
    technologies: [
      'Vue.js',
      'Go',
      'PostgreSQL',
    ],
  },
  {
    name: 'Refactory - Hanoman - Mobile Developer',
    description:
      'A mobile application for managing the Hanoman web and app mobile, which is a platform for managing the company\'s internal affairs.',
    url: '#',
    previewImage: '/images/project-pepehousing.png',
    technologies: [
      'CI 3',
      'Flutter',
      'Mysql',
    ],
  },
  {
    name: 'Refactory - MPM BTL Finance - Frontend Developer',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: '#',
    previewImage: '/images/project-wingie.png',
    technologies: [
      'C#',
      '.NET',
      'Azure'
    ],
  },
  {
    name: 'System Prediction Stock Mask',
    description:
      'A platform for predicting stock prices using machine learning algorithms Fuzzy Mamdani, as well as providing a mask detection system to prevent the spread of COVID-19.',
    url: '#',
    previewImage: '/images/project-fiskil.png',
    technologies: [
      'Python',
      'Flask',
      'No Sql Database',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Faiz Abidin',
    personAvatar: AvatarDummy,
    title: 'Founder - JokoJoki',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Asman and will rehire in the future for Full Stack & Web development.',
  },
  {
    personName: 'Muhammad Rosyad',
    personAvatar: AvatarDummy,
    title: 'Founder - JokoJoki',
    testimonial:
      'Great guy, highly recommended for any COMPLEX web & full-stack development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  // {
  //   personName: 'Alaikal Fajri',
  //   personAvatar: AvatarDummy,
  //   title: 'Freelancer',
  //   testimonial:
  //     'Asman was extremely easy and pleasant to work with and he truly cares about the project being a success. Asman has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  // },
  {
    personName: 'Muisma',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Asman is a great developer. He is very professional and has a great work ethic. He is very knowledgeable and has a great understanding of the project requirements. I would highly recommend him to anyone looking for a great developer.',
  },
];
