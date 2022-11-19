import { Link } from 'react-router-dom';
import classes from './NotFound.module.scss';

const Error404 = () => {
  return (
    <div className={classes['not-found']}>
      <h2>Page not found!</h2>
      <Link to='/' className='hover-btn-animation'>
        <span>BACK TO HOME</span>
      </Link>
    </div>
  );
};

export default Error404;
