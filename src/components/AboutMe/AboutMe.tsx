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
      <h2
        onClick={() => {
          console.log('hi');
        }}
      >
        About Me.
      </h2>
      <p className={classes.who}>Front-end developer.</p>
      <p>
        I'm Marko Tasic, a 20-year-old Serbian "self-taught" Front-end
        developer. My studying was mostly true Udemy where i found 2 great
        teachers, Jonas Schmedtmann from whom i learned HTML, CSS, JS, SASS and
        Maximilian Schwarzmüller from whom i learned about TS and ReactJS. Most
        of my time is spent practicing what I've learned and searching for a
        job. Actually for hire :)
      </p>
      <span>
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
      </span>
    </div>
  );
};

export default AboutMe;
