import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Glass from '../components/Ui/Glass';
import React, { useRef } from 'react';
import useInput from '../hooks/use-input';
import './Contact.scss';
import emailjs from 'emailjs-com';

const isNotEmpty = (value: any) => value.trim() !== '';
const isEmail = (value: any) => value.includes('@') && value.includes('.');

toast.configure();

const Contact = () => {
  const form = useRef<null | HTMLFormElement>(null);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputIsInvalid,
    valueChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
    reset: resetMailInput,
  } = useInput(isEmail);

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputIsInvalid,
    valueChangeHandler: subjectInputChangeHandler,
    inputBlurHandler: subjectInputBlurHandler,
    reset: resetSubjectInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputIsInvalid,
    valueChangeHandler: messageInputChangeHandler,
    inputBlurHandler: messageInputBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    nameInputBlurHandler();
    mailInputBlurHandler();
    subjectInputBlurHandler();
    messageInputBlurHandler();

    if (
      !enteredNameIsValid ||
      !enteredMailIsValid ||
      !enteredSubjectIsValid ||
      !enteredMessageIsValid
    )
      return;

    if (!form.current) return;

    const id = toast.loading('Sending...', {
      position: toast.POSITION.TOP_CENTER,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      hideProgressBar: true,
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
          resetNameInput();
          resetMailInput();
          resetSubjectInput();
          resetMessageInput();

          toast.update(id, {
            render: 'Mail successfully sent!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
        },
        (error) => {
          toast.update(id, {
            render: 'An error occurred!',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
        }
      );
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
    <form ref={form} onSubmit={formSubmissionHandler} className='contact'>
      <Glass>
        <div className={nameInputClasses}>
          <input
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
            type='email'
            name='email'
            placeholder='yourmail@gmail.com'
            onChange={mailInputChangeHandler}
            onBlur={mailInputBlurHandler}
            value={enteredMail}
          />
          {mailInputIsInvalid && (
            <p className='error-text'>Please enter a valid format! (@, .)</p>
          )}
        </div>
        <div className={subjectInputClasses}>
          <input
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
            name='message'
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            value={enteredMessage}
          />
          {messageInputIsInvalid && (
            <p className='error-text'>Message must not be empty.</p>
          )}
        </div>
        <input type='submit' value='Send' className='sendBtn' />
      </Glass>
    </form>
  );
};

export default Contact;
