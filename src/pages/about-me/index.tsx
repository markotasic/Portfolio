import classes from './about-me.module.scss';
import Glass from '../../components/Layout/Glass';
import {
  CssIcon,
  HtmlIcon,
  JSIcon,
  ReactIcon,
  SassIcon,
  TSIcon,
} from '../../components/icons';
import GlassSmall from '../../components/Layout/GlassSmall';

const AboutMe = () => {
  const language = (img: any, text: string) => {
    return (
      <GlassSmall>
        {img}
        <p>{text}</p>
      </GlassSmall>
    );
  };

  return (
    <div className={classes.about}>
      <Glass>
        <h1>Marko Tasić</h1>
        <h4>I'm a Front End Developer from Niš, Serbia</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          accusamus incidunt quidem labore? Veniam excepturi fugiat minus
          similique eum consequuntur ipsa magnam delectus, officia tenetur
          eveniet animi ratione quae saepe?
        </p>
        <div className={classes['about-img']}>
          {language(<HtmlIcon />, 'helllllloo')}
          {language(<CssIcon />, 'lalala')}
          {language(<JSIcon />, 'lalala')}
          {language(<ReactIcon />, 'lalala')}
          {language(<SassIcon />, 'lalala')}
          {language(<TSIcon />, 'lalala')}
        </div>
      </Glass>
    </div>
  );
};

export default AboutMe;
