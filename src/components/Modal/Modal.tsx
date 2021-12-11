import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import Contact from '../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';
import ParticleBackground from '../particleBackground/ParticleBackground';

const Backdrop = (props: { onClose: () => void }) => {
  return (
    <Fragment>
      <div onClick={props.onClose} className={classes.backdrop} />
      <ParticleBackground />
    </Fragment>
  );
};

const ModalOverlay = (props: { onClose: () => void }) => {
  return (
    <div className={classes.modal}>
      <AboutMe />
      <Contact onClose={props.onClose} />
    </div>
  );
};

const Modal = (props: { isOpen: boolean; onClose: () => void }) => {
  if (!props.isOpen) return null;

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
