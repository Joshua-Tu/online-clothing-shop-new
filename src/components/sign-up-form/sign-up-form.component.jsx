// @ts-nocheck
import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPaswrod,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const [formFeilds, setFormFields] = useState(defaultFormFields);
  const [disableInput, setDisableInput] = useState(false);
  const { displayName, email, password, confirmPassword } = formFeilds;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisableInput(true);

    try {
      if (!displayName || !email || !password || !confirmPassword) {
        alert('Missing required field');
        return;
      }
      if (password !== confirmPassword) {
        alert("password doesn't match!");
        return;
      }

      const { user } = await createAuthUserWithEmailAndPaswrod(email, password);
      if (user) {
        await createUserDocumentFromAuth(user, {
          displayName
        });
      }
      resetFormFields();
      setDisableInput(false);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user. Email already in use!');
        return;
      }
      console.log('User creation encoutnered an error: ', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFeilds,
      [name]: value
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          name='displayName'
          value={displayName}
          type='text'
          onChange={handleChange}
          disabled={disableInput}
          required
        />

        <FormInput
          label='Email'
          name='email'
          value={email}
          type='email'
          onChange={handleChange}
          disabled={disableInput}
          required
        />

        <FormInput
          label='Password'
          name='password'
          value={password}
          type='password'
          onChange={handleChange}
          disabled={disableInput}
          required
        />

        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          value={confirmPassword}
          type='password'
          onChange={handleChange}
          disabled={disableInput}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
