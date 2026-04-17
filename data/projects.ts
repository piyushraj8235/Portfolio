export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A full-stack web application built using modern technologies.',
    logo: '/logos/vsc.svg',
    link: '#',
    slug: 'project-one',
  },

  {
    title: 'Project Two',
    description:
      'A responsive web application demonstrating frontend and backend integration.',
    logo: '/logos/vsc.svg',
    link: '#',
    slug: 'project-two',
  },

  {
    title: 'Project Three',
    description:
      'A project showcasing API integration and database management.',
    logo: '/logos/vsc.svg',
    link: '#',
    slug: 'project-three',
  },

  {
    title: 'Project Four',
    description:
      'A modern web project demonstrating problem-solving and development skills.',
    logo: '/logos/vsc.svg',
    link: '#',
    slug: 'project-four',
  },
];