import classes from './HomePage.module.scss';
import { ProjectData } from '../components/ProjectData/ProjectsData';
import Modal from '../components/Modal/Modal';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { toggle } from '../store/modal/modalReducer';
import Footer from '../components/Footer/Footer';
//@ts-ignore
import { Link } from 'react-scroll';
import Social from '../components/Social/Social';
import Layout from '../components/Layout/Layout';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  return !isOpen ? (
    <Layout>
      <Social />
      <section className='centered'>
        <div className={classes.about}>
          <h1>Marko Tasić</h1>
          <h4>Front-End Developer</h4>

          <button
            onClick={() => dispatch(toggle())}
            className='hover-btn-animation'
          >
            <span>About Me</span>
          </button>

          <Link to='projects' smooth={true} duration={1000}>
            <p>projects</p>
            <span />
          </Link>
        </div>
      </section>

      <section id='projects' className={classes.projects}>
        <h2>Latest Projects</h2>
        <div className={classes.lines}></div>
        <ul>
          {ProjectData.map((slide, index) => {
            return (
              <li key={index} className='container'>
                <div className='text'>
                  <div className='content'>
                    <div className={classes.language}>{slide.language}</div>
                  </div>
                  <div className='card-content'>
                    <h2>{slide.title}</h2>
                    <div className='buttons'>
                      {slide.live && (
                        <a
                          className='hover-btn-animation'
                          href={slide.live}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <span>Live</span>
                        </a>
                      )}
                      {slide.code && (
                        <a
                          className='hover-btn-animation margin-left'
                          href={slide.code}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <span>Code</span>
                        </a>
                      )}
                      {slide.gallery && (
                        <a
                          className='hover-btn-animation margin-left'
                          href={slide.gallery}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <span>Gallery</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <img src={slide.image} alt='Avatar' className='image' />
                <div className='overlay'></div>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </Layout>
  ) : (
    <Modal onClose={() => dispatch(toggle())} isOpen={isOpen} />
  );
};

export default HomePage;
