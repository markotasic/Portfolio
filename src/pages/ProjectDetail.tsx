import Glass from '../components/Ui/Glass';
import { ProjectDetailData } from '../components/Slider/SliderData';

const ProjectDetail = () => {
  return (
    <Glass>
      {ProjectDetailData.map((slide, index) => {
        return <h1>slide.title</h1>;
      })}
    </Glass>
  );
};

export default ProjectDetail;
