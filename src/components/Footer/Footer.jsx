import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>
          © 2026 Supersite, desenvolvida pela News API
        </p>

        <div className='footer__content'>
          <nav className='footer__navigation' aria-label='Navegação do rodapé'>
            <a className='footer__link' href='/'>
              Início
            </a>

            <a
              className='footer__link'
              href='https://tripleten.com'
              target='_blank'
              rel='noreferrer'
            >
              TripleTen
            </a>
          </nav>

          <div className='footer__social'>
            <a
              className='footer__social-link'
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              GitHub
            </a>

            <a
              className='footer__social-link'
              href='https://facebook.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
