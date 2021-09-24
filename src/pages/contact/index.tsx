import classes from './contact.module.scss';
import Glass from '../../components/Layout/Glass';

const Contact = () => {
  return (
    <div className={classes.contact}>
      <Glass>
        <input type='mail' id='mail' placeholder='yourmail@gmail.com' />
        <input type='text' id='subject' placeholder='Subject' />
        <textarea name='content' id='content' />
      </Glass>
    </div>
  );
};

export default Contact;
