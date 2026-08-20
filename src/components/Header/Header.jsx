import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`header ${isMenuOpen ? 'header_menu-open' : ''}`}>
      <div className='header__container'>
        <a className='header__logo' href='/' onClick={handleMenuClose}>
          NewsExplorer
        </a>

        <button
          className='header__menu-button'
          type='button'
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className='header__menu-line'></span>
          <span className='header__menu-line'></span>
        </button>

        <nav
          className={`header__navigation ${
            isMenuOpen ? 'header__navigation_open' : ''
          }`}
          aria-label='Navegação principal'
        >
          <a
            className='header__link header__link_active'
            href='/'
            onClick={handleMenuClose}
          >
            Início
          </a>

          <button className='header__button' type='button'>
            Entrar
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
