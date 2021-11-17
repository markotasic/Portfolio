// //@ts-ignore
// import CV from '../components/CV/arg.pdf';
//  <a href={CV} download='Marko Tasic CV' className='cv'>
//   CV
//  </a>

import { Fragment } from 'react';
import { CodePenIcon, GitHubIcon, LinkedInIcon } from '../components/icons';
import classes from './HomePage.module.scss';
import { ProjectData } from '../components/Slider/ProjectsData';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === true) {
    document.getElementById('root')?.classList.add('hidden');
  } else {
    document.getElementById('root')?.classList.remove('hidden');
  }

  if (isOpen)
    return (
      <Fragment>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </Fragment>
    );

  return (
    <Fragment>
      <div className={classes.social}>
        <a
          href='https://github.com/markotasic'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/markotasicc/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon />
        </a>
        <a
          href='https://codepen.io/markotasic'
          target='_blank'
          rel='noreferrer'
        >
          <CodePenIcon />
        </a>
      </div>
      <section className='centered'>
        <div className={classes.about}>
          <h1>Marko Tasić</h1>
          <h4>Front-End Developer</h4>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            About Me
          </button>
          <a href='#projects'>
            <p>projects</p>
            <span />
          </a>
        </div>
      </section>
      <section id='projects' className={classes.projects}>
        <h2>Latest Projects</h2>
        {ProjectData.map((slide, index) => {
          return (
            <Fragment>
              <div className={classes.lines}></div>
              <div className={`${classes.overlay} ${slide.link}`}>
                <h2>{slide.title}</h2>
                <a href={slide.link}>Details</a>
                <img src={slide.image} alt={slide.title} />
                <div />
              </div>
            </Fragment>
          );
        })}
      </section>
      <footer className='centered'>
        <div>
          <a
            href='https://github.com/markotasic'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/markotasicc/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          <a
            href='https://codepen.io/markotasic'
            target='_blank'
            rel='noreferrer'
          >
            CodePen
          </a>
        </div>
        <p>© All rights reserved Marko Tasić - 0611106779 - Contact</p>
      </footer>
    </Fragment>
  );
};

export default HomePage;
