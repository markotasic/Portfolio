import {
  ReactIcon,
  MongoDBIcon,
  NodeJSIcon,
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
        <span>Front-end developer</span>. My studying was mostly through{' '}
        <span>Udemy</span>. I like to <span>resolve</span> complex problems,{' '}
        <span>create</span> beautiful looking websites and <span>make</span>{' '}
        code cleaner. Most of my time is spent <span>practicing</span> what I've
        learned and searching for a job. Actually for hire :)
      </p>
      <div className={classes.languages}>
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
        <div className={classes.nodejs}>
          <NodeJSIcon />
        </div>
        <div className={classes.mongodb}>
          <MongoDBIcon />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
