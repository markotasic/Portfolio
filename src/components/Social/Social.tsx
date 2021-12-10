import classes from './Social.module.scss';
import { CodePenIcon, GitHubIcon, LinkedInIcon } from '../icons';

const Social = () => {
  return (
    <div className={classes.social}>
      <a href='https://github.com/markotasic' target='_blank' rel='noreferrer'>
        <GitHubIcon />
      </a>
      <a
        href='https://www.linkedin.com/in/markotasicc/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedInIcon />
      </a>
      <a href='https://codepen.io/markotasic' target='_blank' rel='noreferrer'>
        <CodePenIcon />
      </a>
    </div>
  );
};

export default Social;
