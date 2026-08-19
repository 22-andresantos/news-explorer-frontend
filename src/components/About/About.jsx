import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__image-wrapper'>
          <img
            className='about__image'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
            alt='Retrato do autor'
          />
        </div>

        <div className='about__content'>
          <h2 className='about__title'>Sobre o autor</h2>

          <p className='about__text'>
            Esta seção apresenta informações sobre o autor do projeto News
            Explorer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
