import { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './Login.css';

function Login({ isOpen, onClose, onRegisterClick, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 6;

  const isFormValid = isEmailValid && isPasswordValid;

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

    onLoginSuccess(email);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title='Entrar'
      name='login'
      buttonText='Entrar'
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid}
      footer={
        <p className='login__footer-text'>
          ou{' '}
          <button
            className='login__register-button'
            type='button'
            onClick={onRegisterClick}
          >
            Inscreva-se
          </button>
        </p>
      }
    >
      <label className='login__label' htmlFor='login-email'>
        E-mail
      </label>

      <input
        className='login__input'
        id='login-email'
        name='email'
        type='email'
        placeholder='Insira seu e-mail'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={handleBlur}
        required
      />

      {touched.email && !isEmailValid && (
        <span className='login__error'>E-mail inválido</span>
      )}

      <label className='login__label' htmlFor='login-password'>
        Senha
      </label>

      <input
        className='login__input'
        id='login-password'
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
        <span className='login__error'>
          A senha deve ter pelo menos 6 caracteres
        </span>
      )}
    </PopupWithForm>
  );
}

export default Login;
