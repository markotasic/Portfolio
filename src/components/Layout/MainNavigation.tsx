import classes from './MainNavigation.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggle } from '../../store/modal/modalReducer';

//@ts-ignore
import { Link } from 'react-scroll';

const Nav = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  return !isOpen ? (
    <header className={classes.nav}>
      <nav>
        <div />
        <ul>
          <li>
            <Link
              to='projects'
              smooth={true}
              duration={1000}
              className='hover-underline-animation'
            >
              Projects
            </Link>
          </li>
          <li>
            <p
              onClick={() => dispatch(toggle())}
              className='hover-underline-animation p-tag'
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </header>
  ) : null;
};

export default Nav;
