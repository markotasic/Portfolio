import { projectDetailItem } from '../components/Slider/ProjectsData';
import { useParams } from 'react-router-dom';

interface ImageDetailProps {
  slides: projectDetailItem[];
}

const ProjectDetail: React.FC<ImageDetailProps> = ({ slides }) => {
  const params = useParams() as { detail: string };
  const detailName = params.detail;
  const slide = slides.find((slide) => slide.link === detailName);

  return (
    <div>
      {slide && (
        <div>
          <h1>{slide.title}</h1>
          <div>
            <h3>Languages used:</h3>
            {slide.language}
          </div>
          <p>{slide.detail}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
