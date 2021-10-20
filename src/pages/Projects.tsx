import ImageSlider from '../components/Slider/ImageSlider';
import { SliderData } from '../components/Slider/SliderData';
import Glass from '../components/Ui/Glass';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='asd'>
      <Glass>
        <ImageSlider slides={SliderData} />
      </Glass>
    </div>
  );
};

export default Projects;
