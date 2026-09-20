import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Register.css';

function Register({ isOpen, onClose, onLoginClick, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    name: false,
  });

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isNameValid = name.trim().length >= 2;

  const isFormValid = isEmailValid && isPasswordValid && isNameValid;

  function handleBlur(event) {
    const { name: fieldName } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [fieldName]: true,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    onSuccess();
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Inscrever-se'
      name='register'
      buttonText='Inscrever-se'
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid}
      footer={
        <p className='register__footer-text'>
          ou{' '}
          <button
            className='register__login-button'
            type='button'
            onClick={onLoginClick}
          >
            Entrar
          </button>
        </p>
      }
    >
      <label className='register__label' htmlFor='register-email'>
        E-mail
      </label>

      <input
        className='register__input'
        id='register-email'
        name='email'
        type='email'
        placeholder='Insira seu e-mail'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={handleBlur}
        required
      />

      {touched.email && !isEmailValid && (
        <span className='register__error'>E-mail inválido</span>
      )}

      <label className='register__label' htmlFor='register-password'>
        Senha
      </label>

      <input
        className='register__input'
        id='register-password'
        name='password'
        type='password'
        placeholder='Insira sua senha'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        onBlur={handleBlur}
        minLength='6'
        required
      />

      {touched.password && !isPasswordValid && (
        <span className='register__error'>
          A senha deve ter pelo menos 6 caracteres
        </span>
      )}

      <label className='register__label' htmlFor='register-name'>
        Nome de usuário
      </label>

      <input
        className='register__input'
        id='register-name'
        name='name'
        type='text'
        placeholder='Insira seu nome de usuário'
        value={name}
        onChange={(event) => setName(event.target.value)}
        onBlur={handleBlur}
        minLength='2'
        required
      />

      {touched.name && !isNameValid && (
        <span className='register__error'>
          O nome deve ter pelo menos 2 caracteres
        </span>
      )}
    </PopupWithForm>
  );
}

export default Register;
