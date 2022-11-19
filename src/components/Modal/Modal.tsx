import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';
import Contact from '../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';
import ParticleBackground from '../particleBackground/ParticleBackground';

interface ModalProps {
  onClose: () => void;
  isOpen?: boolean;
}

const Backdrop = ({ onClose }: ModalProps) => {
  return (
    <Fragment>
      <div onClick={onClose} className={classes.backdrop} />
      <ParticleBackground />
    </Fragment>
  );
};

const ModalOverlay = ({ onClose }: ModalProps) => {
  return (
    <div className={classes.modal}>
      <AboutMe />
      <Contact onClose={onClose} />
    </div>
  );
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} />,
        document.getElementById('overlay-root')!
      )}
    </Fragment>
  );
};

export default Modal;
