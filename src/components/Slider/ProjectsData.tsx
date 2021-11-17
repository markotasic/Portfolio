import image1 from '../../images/img1.jpg';
import image2 from '../../images/img2.jpg';
import image3 from '../../images/img3.jpg';
import image4 from '../../images/img4-v1.jpg';
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
};

export type projectDetailItem = {
  link: string;
  title: string;
  language: JSX.Element;
  detail: string;
};

export const ProjectData: projectItem[] = [
  {
    link: 'experience-the-world',
    title: 'Experience The World',
    image: image1,
    live: 'https://traveling-marko.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
  },
  {
    link: 'nish-nocu',
    title: 'Nish Nocu',
    image: image2,
    live: 'https://nis-nocu-view.netlify.app/',
  },
  {
    link: 'app-lab',
    title: 'App Lab',
    image: image3,
    live: 'https://app-labs.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
  },
  {
    link: 'iConnect',
    title: 'iConnect',
    image: image4,
    live: 'https://i-connect.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
  },
];

export const ProjectDetailData: projectDetailItem[] = [
  {
    link: 'experience-the-world',
    title: 'Experience The World',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
      </div>
    ),
    detail:
      'I made this project mostly for CSS practice from a photoshop design, it is fully responsive and interactive. This project challenged my knowledge to its max, had to stop quite a few times and look at some courses on Udemy to be able to complete it, was a fun experience building it and learned a lot doing it!',
  },
  {
    link: 'nish-nocu',
    title: 'Nish Nocu',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
        <FirebaseIcon />
      </div>
    ),
    detail:
      "This is my first freelance project, I did this project with a friend who is also studying in FE dev this was way more complicated than we expected, this is an admin website made for owners and employees of restaurants, there are 3 parts to it: 1)Being able to add restaurant details (logo, name, number, available seats and min, max guest able to make reservations on those types of seats); 2)Being able to add events happening in the future and being able to accept/decline reservations coming from their mobile app or add them manually, editing events, deleting etc...; 3)Image gallery with folders for events for restaurant images or past event highlights, I know this doesn't sound like a lot at first, but making it work with their application was not easy and learned the limits of vanilla JavaScript making it '-_-",
  },
  {
    link: 'app-lab',
    title: 'App Lab',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
      </div>
    ),
    detail:
      "AppLab was probably the simplest project i have done, it was a test from an interview finished it in under 3h out of 8h without any library's just plain HTML Sass and vanilla JS.",
  },
  {
    link: 'iConnect',
    title: 'iConnect',
    language: (
      <div>
        <HtmlIcon />
        <CssIcon />
        <SassIcon />
        <JSIcon />
        <FirebaseIcon />
      </div>
    ),
    detail:
      'This project is supposed to be a simple social media website, made this with a friend for practice, this was the first time we used JavaScript after learning it, and also first time using Firebase, This project has a login page, image adding and post creating, dark/light mode and is fully responsive, also added an api to practice with which we created dummy online users and some dummy posts.',
  },
];
