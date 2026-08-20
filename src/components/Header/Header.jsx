import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__logo' href='/'>
          NewsExplorer
        </a>

        <nav className='header__navigation' aria-label='Navegação principal'>
          <a className='header__link header__link_active' href='/'>
            Início
          </a>

          <a className='header__link' href='/saved-news'>
            Artigos salvos
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
