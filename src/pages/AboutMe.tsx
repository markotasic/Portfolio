import './AboutMe.scss';
import Glass from '../components/Ui/Glass';
import {
  CssIcon,
  HtmlIcon,
  JSIcon,
  ReactIcon,
  SassIcon,
  TSIcon,
} from '../components/icons';
import Language from '../components/Ui/Language';

const AboutMe = () => {
  return (
    <div className='about'>
      <Glass>
        <a href='path_to_file' download='proposed_file_name'>
          Download
        </a>
        <h1>Marko Tasić</h1>
        <h4>I'm a Front End Developer from Niš, Serbia</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          accusamus incidunt quidem labore? Veniam excepturi fugiat minus
          similique eum consequuntur ipsa magnam delectus, officia tenetur
          eveniet animi ratione quae saepe?
        </p>
        <div className='about-img'>
          <Language img={HtmlIcon} text='poiuhkjhjg' />
          <Language img={CssIcon} text='gadgdsgdas' />
          <Language img={JSIcon} text='gadsgfdhfd' />
          <Language img={ReactIcon} text='bcvxbvxb' />
          <Language img={SassIcon} text='qwerweqi' />
          <Language img={TSIcon} text='dsazxcxgfj' />
        </div>
        <button className='cv'>CV</button>
      </Glass>
    </div>
  );
};

export default AboutMe;
