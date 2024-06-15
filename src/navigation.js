import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/'
    },
    {
      text: 'Clases',
      href: '#subjects'
    },
    {
      text: 'Tu instructor',
      href: '#instructor'
    },
  ],
  actions: [
    { 
      variant: 'primary',
      text: 'Registrarse', 
      href: 'https://tally.so/r/3XDpzY', 
      target: '_blank', 
      icon: 'tabler:writing-sign'
    }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/JesusDMedinaC' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/jesusdmedinac/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/jesusdmedinac' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jesusdmedinac' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://jesusdmedinac.com/"> JesusDMedinaC</a> · All rights reserved.
  `,
};
