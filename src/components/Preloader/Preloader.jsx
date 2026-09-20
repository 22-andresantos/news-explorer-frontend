import './Preloader.css';

function Preloader() {
  return (
    <section className='preloader'>
      <div
        className='preloader__circle'
        role='status'
        aria-label='Procurando notícias'
      ></div>

      <p className='preloader__text'>Procurando notícias...</p>
    </section>
  );
}

export default Preloader;
