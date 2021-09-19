import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/projects' activeClassName='selected'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/about-me'>About Me</NavLink>
          </li>
          <li>
            <NavLink to='/languages'>Langueges</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
