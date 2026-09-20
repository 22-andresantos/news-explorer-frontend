import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ onLoginClick, onLogout, isLoggedIn = false, userName = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isSavedNewsPage = location.pathname === '/saved-news';

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`header ${
        isSavedNewsPage ? 'header_theme_light' : 'header_theme_dark'
      } ${isMenuOpen ? 'header_menu-open' : ''}`}
    >
      <div className='header__container'>
        <NavLink className='header__logo' to='/' onClick={handleMenuClose}>
          NewsExplorer
        </NavLink>

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
          <NavLink
            className={({ isActive }) =>
              `header__link ${isActive ? 'header__link_active' : ''}`
            }
            to='/'
            end
            onClick={handleMenuClose}
          >
            Início
          </NavLink>

          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                `header__link ${isActive ? 'header__link_active' : ''}`
              }
              to='/saved-news'
              onClick={handleMenuClose}
            >
              Artigos salvos
            </NavLink>
          )}

          {!isLoggedIn ? (
            <button
              className='header__button'
              type='button'
              onClick={onLoginClick}
            >
              Entrar
            </button>
          ) : (
            <button className='header__button' type='button' onClick={onLogout}>
              {userName || 'Usuário'}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
