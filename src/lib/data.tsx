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
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Go',
    logo: LogoGo,
    url: 'https://golang.org/',
  },
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Dart',
    logo: LogoDart,
    url: 'https://dart.dev/',
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
    label: 'Vue.js',
    logo: LogoVue,
    url: 'https://vuejs.org/',
  },
  {
    label: 'Svelte',
    logo: LogoSvelte,
    url: 'https://svelte.dev/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  // {
  //   label: 'Socket.io',
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: 'https://socket.io/',
  // },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
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
  {
    label: 'Laravel',
    logo: LogoLaravel,
    url: 'https://laravel.com/',
  },
  {
    label: 'Supabase',
    logo: LogoSupabase,
    url: 'https://supabase.io/',
  },
  {
    label: 'MySql',
    logo: LogoMySql,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'Odoo',
    logo: LogoOdoo,
    url: 'https://www.odoo.com/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
  {
    label: 'Postman',
    logo: LogoPostman,
    url: 'https://www.postman.com/',
  }
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoGanesha,
    logoAlt: 'Ganesha Operation Logo',
    position: 'Staf Pusat Backend Developer',
    startDate: new Date(2024, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked as a backend developer.',
      'Worked with a variety of technologies, including Node.js, Nest.js, PostgreSQL, and others.',
      'Make a REST API, GRPC for the Ganesha Operation website and app.',
    ],
  },
  {
    logo: LogoCDI,
    darkModeLogo: LogoCDI,
    logoAlt: 'CDI Logo',
    position: 'Front End Developer Freelancer',
    startDate: new Date(2024, 8),
    endDate: new Date(2024, 9),
    summary: [
      'Worked as a front end developer.',
      'Worked with a variety of technologies, including React, Typescript, Tailwindcss, Mui, Storybook, Cypress, and others.',
      'Worked on a project called "Dinkes Dashboard Kematian".',
    ],
  },
  {
    logo: LogoRefactory,
    darkModeLogo: LogoRefactory,
    logoAlt: 'Refactory Logo',
    position: 'Software Engineer',
    startDate: new Date(2023, 10),
    endDate: new Date(2024, 8),
    summary: [
      'Worked as a full stack developer (Frontend / Backend).',
      'Mobile app development using Flutter.',
      'Odoo ERP customization.',
      'QA Testing And QA Automation.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Ganseha Operation - Back End Developer',
    description:
      'Make Api Rest or GRPc for Ganseha Operation website and app',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'GO Lang',
      'Nest JS',
      'PostgreSQL',
      'REST API',
      'GRPC',
    ],
  },
  {
    name: 'Calestium Digital - Dashboard Satu Sehat - Front End Developer',
    description:
    'A platform for managing the Dashboard Satu Sehat website, such as managing death data, with chart',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'React',
      'Postman',
    ],
  },
  {
    name: 'Refactory - GT Virtuz - Odoo Developer',
    description:
      'A platform for managing the GT Virtuz ERP website, managing Procurement data, and managing company data.',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'Odoo',
      'Python',
    ],
  },
  {
    name: 'Refactory - Portal Vendor MPM - Fullstack Developer',
    description:
      'A platform for managing the Portal Vendor MPM website, such as managing data vendor, managing Procurement data, and managing company data.',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
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
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'Flutter',
      'Bloc',
    ],
  },
  {
    name: 'Refactory - Mytok MPM HRIS - QA Engineer',
    description:
    'A platform for managing the Mytok mobile, such as managing employee data, managing project data, and managing company data.',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'Robot Framework',
      'Postman',
    ],
  },
  {
    name: 'Refactory - Sev 2 - Fullstack Developer',
    description:
      'A platform for managing the Sev2 website and mobile, such as managing task data and project',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'Supabase',
      'Go',
      'Flutter',
      'PostgreSQL'
    ],
  },
  {
    name: 'Refactory - BSI Ktb Portal - Backend Developer',
    description:
      'A platform for managing the BSI Ktb Portal website, such as managing data vendor, managing Procurement data, and managing company data.',
    url: 'https://www.bsi.id/',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      '.NET',
      'C#',
      'Sql Server',
    ],
  },
  {
    name: 'Refactory - Tempo.co - Fullstack Developer',
    description:
      'A platform for managing the Tempo.co website, such as managing articles, managing user data, and managing company data.',
    url: 'https://www.tempo.co/',
    previewImage: 'https://picsum.photos/969/727',
    technologies: [
      'Vue.js',
      'Go',
      'PostgreSQL',
    ],
  },
  {
    name: 'Refactory - FrontDesk - Fullstack Developer',
    description:
      'A platform for managing the Events, such as managing employee data, managing project data, and managing company data.',
    url: '#',
    previewImage: 'https://picsum.photos/969/727',
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
    previewImage: 'https://picsum.photos/969/727',
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
    previewImage: 'https://picsum.photos/969/727',
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
    previewImage: 'https://picsum.photos/969/727',
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
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend asman and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Muhammad Rosyad',
    personAvatar: AvatarDummy,
    title: 'Founder - JokoJoki',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
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
