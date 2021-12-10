import experienceTheWorld from '../../images/experience-the-world.jpg';
import nishNocu from '../../images/nish-nocu.jpg';
import iConnect from '../../images/iConnect.jpg';
import {
  CssIcon,
  HtmlIcon,
  JSIcon,
  SassIcon,
  FirebaseIcon,
} from '../icons/index';

export type projectItem = {
  link: string;
  title: string;
  image: string;
  live: string;
  code?: string;
  language: JSX.Element;
};

export const ProjectData: projectItem[] = [
  {
    link: 'experience-the-world',
    title: 'Experience The World',
    image: experienceTheWorld,
    live: 'https://traveling-marko.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
      </div>
    ),
  },
  {
    link: 'nish-nocu',
    title: 'Nish Nocu',
    image: nishNocu,
    live: 'https://nis-nocu-view.netlify.app/',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
        <FirebaseIcon />
      </div>
    ),
  },
  {
    link: 'iConnect',
    title: 'iConnect',
    image: iConnect,
    live: 'https://i-connect.netlify.app/',
    code: 'https://github.com/markotasic/iConnect',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
        <FirebaseIcon />
      </div>
    ),
  },
];
