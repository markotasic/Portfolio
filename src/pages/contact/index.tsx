import classes from './contact.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Glass from '../../components/Layout/Glass';
import React, { useState, useRef } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';

toast.configure();

const Contact = () => {
  const form = useRef<null | HTMLFormElement>(null);

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const [enteredMail, setEnteredMail] = useState('');
  const [enteredMailTouched, setEnteredMailTouched] = useState(false);
  const enteredMailIsValid = enteredMail.includes('@');
  const mailInputIsInvalid = !enteredMailIsValid && enteredMailTouched;

  const [enteredSubject, setEnteredSubject] = useState('');
  const [enteredSubjectTouched, setEnteredSubjectTouched] = useState(false);
  const enteredSubjectIsValid = enteredSubject.trim() !== '';
  const subjectInputIsInvalid = !enteredSubjectIsValid && enteredSubjectTouched;

  const [enteredMessage, setEnteredMessage] = useState('');
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);
  const enteredMessageIsValid = enteredMessage.trim() !== '';
  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  const nameInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const mailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredMail(event.target.value);
  };
  const mailInputBlurHandler = () => {
    setEnteredMailTouched(true);
  };

  const subjectInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredSubject(event.target.value);
  };
  const subjectInputBlurHandler = () => {
    setEnteredSubjectTouched(true);
  };

  const messageInputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEnteredMessage(event.target.value);
  };
  const messageInputBlurHandler = () => {
    setEnteredMessageTouched(true);
  };

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredMailTouched(true);
    setEnteredSubjectTouched(true);
    setEnteredMessageTouched(true);

    if (
      enteredName.trim() === '' ||
      !enteredMail.includes('@') ||
      enteredSubject.trim() === '' ||
      enteredMessage.trim() === ''
    )
      return;

    if (!form.current) return;

    const id = toast.loading('Sending...', {
      position: toast.POSITION.TOP_CENTER,
    });

    emailjs
      .sendForm(
        'service_2fo7wlq',
        'template_tni32te',
        form.current,
        'user_yxlB9jsBIB4hr8akK898b'
      )
      .then(
        (resolve) => {
          toast.update(id, {
            render: 'Mail successfully sent!',
            type: 'success',
            isLoading: false,
            hideProgressBar: true,
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          toast.update(id, {
            render: 'An error occurred!',
            type: 'error',
            isLoading: false,
            hideProgressBar: true,
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredMail('');
    setEnteredMailTouched(false);
    setEnteredSubject('');
    setEnteredSubjectTouched(false);
    setEnteredMessage('');
    setEnteredMessageTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const mailInputClasses = mailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const subjectInputClasses = subjectInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const messageInputClasses = messageInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form
      ref={form}
      onSubmit={formSubmissionHandler}
      className={classes.contact}
    >
      <Glass>
        <div className={nameInputClasses}>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredName}
          />
          {nameInputIsInvalid && (
            <p className='error-text'>Name must not be empty.</p>
          )}
        </div>
        <div className={mailInputClasses}>
          <input
            className='input'
            type='email'
            name='email'
            placeholder='yourmail@gmail.com'
            onChange={mailInputChangeHandler}
            onBlur={mailInputBlurHandler}
            value={enteredMail}
          />
          {mailInputIsInvalid && (
            <p className='error-text'>Mail must not be empty.</p>
          )}
        </div>
        <div className={subjectInputClasses}>
          <input
            className='input'
            type='text'
            name='subject'
            placeholder='subject'
            onChange={subjectInputChangeHandler}
            onBlur={subjectInputBlurHandler}
            value={enteredSubject}
          />
          {subjectInputIsInvalid && (
            <p className='error-text'>Subject must not be empty.</p>
          )}
        </div>
        <div className={messageInputClasses}>
          <textarea
            className='input'
            name='message'
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            value={enteredMessage}
          />
          {messageInputIsInvalid && (
            <p className='error-text'>Message must not be empty.</p>
          )}
        </div>
        <input type='submit' value='Send' className={classes.sendBtn} />
      </Glass>
    </form>
  );
};

export default Contact;
