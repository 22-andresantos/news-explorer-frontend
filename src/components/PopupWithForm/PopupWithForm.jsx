import { useEffect } from 'react';
import './PopupWithForm.css';

function PopupWithForm({
  isOpen,
  onClose,
  title,
  name,
  children,
  buttonText,
  onSubmit,
  footer,
  isSubmitDisabled,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleEscClose(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  function handleOverlayClose(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className='popup' onMouseDown={handleOverlayClose}>
      <div
        className='popup__container'
        role='dialog'
        aria-modal='true'
        aria-labelledby={`popup-title-${name}`}
      >
        <button
          className='popup__close'
          type='button'
          aria-label='Fechar'
          onClick={onClose}
        />
        <h2 className='popup__title' id={`popup-title-${name}`}>
          {title}
        </h2>
        <form className='popup__form' name={name} onSubmit={onSubmit}>
          {children}

          <button
            className='popup__submit'
            type='submit'
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
        {footer && <div className='popup__footer'>{footer}</div>}
      </div>
    </div>
  );
}

export default PopupWithForm;
