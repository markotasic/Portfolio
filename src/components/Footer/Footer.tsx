import './Footer.scss';
const Footer = () => {
  return (
    <footer className='centered'>
      <div>
        <a
          className='hover-underline-animation'
          href='https://github.com/markotasic'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <a
          className='hover-underline-animation'
          href='https://www.linkedin.com/in/markotasicc/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
        <a
          className='hover-underline-animation'
          href='https://codepen.io/markotasic'
          target='_blank'
          rel='noreferrer'
        >
          CodePen
        </a>
      </div>
      <p>© All rights reserved Marko Tasić - 0611106779 - Contact</p>
    </footer>
  );
};

export default Footer;
