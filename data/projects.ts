export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'AI Website Builder',
    description:
      'AI tool that generates and deploys websites automatically with authentication and payment integration.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/piyushraj8235/Website_Builder_Using_AI',
    slug: 'ai-website-builder',
  },

  {
    title: 'AI Customer Support Chatbot',
    description:
      'Embeddable AI chatbot that can be integrated into websites for automated customer support.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/piyushraj8235/ChatBot_AI',
    slug: 'ai-chatbot',
  },

  {
    title: 'AI React UI Library',
    description:
      'Custom React component library published to NPM with authentication and subscription system.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/piyushraj8235/React_UI',
    slug: 'ai-react-ui-library',
  },

  {
    title: 'AI UGC Ads Generator',
    description:
      'AI application that generates marketing video and image content using modern web technologies.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/piyushraj8235/AI_UGC_Generator',
    slug: 'ai-ugc-generator',
  },
];