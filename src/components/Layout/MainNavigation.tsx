import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

const Nav = () => {
  return (
    <header className={classes.nav}>
      <nav>
        <ul>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Projects</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
