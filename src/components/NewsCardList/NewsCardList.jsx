import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList() {
  return (
    <section className='news-card-list'>
      <div className='news-card-list__container'>
        <h2 className='news-card-list__title'>Resultados da pesquisa</h2>

        <div className='news-card-list__grid'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>

        <button className='news-card-list__button' type='button'>
          Mostrar mais
        </button>
      </div>
    </section>
  );
}

export default NewsCardList;
