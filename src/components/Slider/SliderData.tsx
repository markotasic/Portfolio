import image1 from '../../images/img1.jpg';
import image2 from '../../images/img2.jpg';
import image3 from '../../images/img3.jpg';
import image4 from '../../images/img4-v1.jpg';

export type sliderItem = {
  link: string;
  title: string;
  image: string;
  live: string;
  code?: string;
};

export const SliderData: sliderItem[] = [
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

export const ProjectDetailData = [
  {
    title: 'Experience The World',
    image: image1,
    live: 'https://traveling-marko.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
  },
  {
    title: 'Nish Nocu',
    image: image2,
    live: 'https://nis-nocu-view.netlify.app/',
  },
  {
    title: 'App Lab',
    image: image3,
    live: 'https://app-labs.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
  },
  {
    title: 'iConnect',
    image: image4,
    live: 'https://i-connect.netlify.app/',
    code: 'https://github.com/markotasic/Traveling',
  },
];
