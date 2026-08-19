import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import './Main.css';

function Main() {
  return (
    <main className='main'>
      <section className='main__hero'>
        <div className='main__container'>
          <h1 className='main__title'>O que está acontecendo no mundo?</h1>

          <p className='main__description'>
            Encontre as últimas notícias sobre qualquer tema e salve elas em sua
            conta pessoal
          </p>

          <SearchForm />
        </div>
      </section>

      <NewsCardList />

      <About />
    </main>
  );
}

export default Main;
