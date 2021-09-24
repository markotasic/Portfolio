import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import projects from '../../images/book.svg';
import aboutMe from '../../images/person.svg';
import email from '../../images/email.svg';

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
              <img src={aboutMe} alt='about-me' />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes.neon} ${classes['neon-button']}`}
              to='/projects'
              activeClassName={classes.active}
            >
              Projects
              <img src={projects} alt='projects' />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes.neon} ${classes['neon-button']}`}
              to='/contact'
              activeClassName={classes.active}
            >
              Contact
              <img src={email} alt='email' />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
