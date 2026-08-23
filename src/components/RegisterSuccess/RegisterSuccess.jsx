import './RegisterSuccess.css';

function RegisterSuccess({ isOpen, onClose, onLoginClick }) {
  if (!isOpen) {
    return null;
  }

  function handleOverlayClose(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className='register-success' onMouseDown={handleOverlayClose}>
      <div className='register-success__container'>
        <button
          className='register-success__close'
          type='button'
          aria-label='Fechar'
          onClick={onClose}
        />

        <h2 className='register-success__title'>
          Cadastro concluído com sucesso!
        </h2>

        <button
          className='register-success__login'
          type='button'
          onClick={onLoginClick}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default RegisterSuccess;
