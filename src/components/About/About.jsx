import './About.css';
import authorImage from '../../images/about-me.jpeg';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__image-wrapper'>
          <img
            className='about__image'
            src={authorImage}
            alt='Retrato do autor'
          />
        </div>

        <div className='about__content'>
          <h2 className='about__title'>Sobre o autor</h2>

          <p className='about__text'>
            Meu nome é André Santos. Sou estudante de desenvolvimento web com
            foco em desenvolvimento Full Stack. Neste projeto, apliquei
            conhecimentos de React, JavaScript, CSS responsivo, consumo de APIs,
            rotas e gerenciamento de estado.
          </p>

          <p className='about__text'>
            O News Explorer faz parte do meu Projeto Final na TripleTen e
            representa a aplicação prática dos conhecimentos adquiridos ao longo
            do curso.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
