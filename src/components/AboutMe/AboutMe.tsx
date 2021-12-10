import {
  ReactIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  JSIcon,
  TSIcon,
} from '../icons/Icons';
import 'react-toastify/dist/ReactToastify.css';
import classes from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={classes.about}>
      <h2>About Me.</h2>
      <p className={classes.who}>Front-end developer.</p>
      <p>
        I'm Marko Tasic, a 20-year-old Serbian "self-taught"{' '}
        <span>Front-end developer</span>. My studying was mostly true{' '}
        <span>Udemy</span>. I like to <span>resolve</span> complex problems,{' '}
        <span>create</span> beautiful looking websites and <span>make</span>{' '}
        code cleaner. Most of my time is spent <span>practicing</span> what I've
        learned and searching for a job. Actually for hire :)
      </p>
      <div className={classes.languages}>
        <div className={classes.html}>
          <HtmlIcon />
        </div>
        <div className={classes.css}>
          <CssIcon />
        </div>
        <div className={classes.js}>
          <JSIcon />
        </div>
        <div className={classes.sass}>
          <SassIcon />
        </div>
        <div className={classes.react}>
          <ReactIcon />
        </div>
        <div className={classes.ts}>
          <TSIcon />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
