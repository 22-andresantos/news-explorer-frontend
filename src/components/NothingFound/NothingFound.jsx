import notFoundIcon from '../../images/not-found_v1.png';
import './NothingFound.css';

function NothingFound() {
  return (
    <section className='nothing-found'>
      <img
        className='nothing-found__icon'
        src={notFoundIcon}
        alt='Ícone de nada encontrado'
        aria-hidden='true'
      />

      <h2 className='nothing-found__title'>Nada encontrado</h2>

      <p className='nothing-found__text'>
        Desculpe, mas nada corresponde aos seus termos de pesquisa.
      </p>
    </section>
  );
}

export default NothingFound;
