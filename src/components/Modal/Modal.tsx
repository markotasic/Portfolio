import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import Contact from '../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';
import ParticleBackground from '../ParticleBackground';

const Backdrop = (props: any) => {
  return (
    <Fragment>
      <div onClick={props.onClose} className={classes.backdrop} />
      <ParticleBackground />
    </Fragment>
  );
};

const ModalOverlay = (props: any) => {
  return (
    <div className={classes.modal}>
      <AboutMe />
      <Contact />
    </div>
  );
};

const Modal = (props: any) => {
  if (!props.open) return null;

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById('overlay-root')!
      )}
    </Fragment>
  );
};

export default Modal;
