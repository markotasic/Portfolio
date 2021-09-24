import classes from './about-me.module.scss';
import Glass from '../../components/Layout/Glass';
import htmlSvg from '../../images/html.svg';
import cssSvg from '../../images/css.svg';
import javascriptSvg from '../../images/javascript.svg';
import reactSvg from '../../images/react.svg';
import sassSvg from '../../images/sass.svg';
import typescriptSvg from '../../images/typescript.svg';

const AboutMe = () => {
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
          <div>
            <img src={htmlSvg} alt='html' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              nulla temporibus veniam
            </p>
          </div>
          <div>
            <img src={cssSvg} alt='css' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              nulla temporibus veniam
            </p>
          </div>
          <div>
            <img src={javascriptSvg} alt='javascript' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              nulla temporibus veniam
            </p>
          </div>
          <div>
            <img src={reactSvg} alt='react' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              nulla temporibus veniam
            </p>
          </div>
          <div>
            <img src={sassSvg} alt='sass' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              nulla temporibus veniam
            </p>
          </div>
          <div>
            <img src={typescriptSvg} alt='typescript' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              nulla temporibus veniam
            </p>
          </div>
        </div>
      </Glass>
    </div>
  );
};

export default AboutMe;
