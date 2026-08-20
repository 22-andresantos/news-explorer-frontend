import githubIcon from '../../images/github-icon.png';
import facebookIcon from '../../images/facebook-icon.png';
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
              href='https://github.com/22-andresantos/'
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub'
            >
              <img
                className='footer__social-icon'
                src={githubIcon}
                alt='GitHub'
                aria-hidden='true'
              />
            </a>

            <a
              className='footer__social-link'
              href='https://facebook.com/'
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <img
                className='footer__social-icon'
                src={facebookIcon}
                alt='Facebook'
                aria-hidden='true'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
