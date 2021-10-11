import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import { BookIcon, MailIcon, PersonIcon } from '../icons';

const Nav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={`${classes.neon} ${classes['neon-button']}`}
              to='/about-me'
              activeClassName={classes.active}
            >
              About Me
              <PersonIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes.neon} ${classes['neon-button']}`}
              to='/projects'
              activeClassName={classes.active}
            >
              Projects
              <BookIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes.neon} ${classes['neon-button']}`}
              to='/contact'
              activeClassName={classes.active}
            >
              Contact
              <MailIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
