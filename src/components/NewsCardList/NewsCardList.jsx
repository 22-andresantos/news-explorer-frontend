import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { CARDS_PER_PAGE } from '../../utils/constants';
import './NewsCardList.css';

function NewsCardList({ articles }) {
  const [visibleCards, setVisibleCards] = useState(CARDS_PER_PAGE);

  const visibleArticles = articles.slice(0, visibleCards);

  function handleShowMore() {
    setVisibleCards((currentValue) => currentValue + CARDS_PER_PAGE);
  }

  return (
    <section className='news-card-list'>
      <div className='news-card-list__container'>
        <h2 className='news-card-list__title'>Resultados da pesquisa</h2>

        <div className='news-card-list__grid'>
          {visibleArticles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>

        {visibleCards < articles.length && (
          <button
            className='news-card-list__button'
            type='button'
            onClick={handleShowMore}
          >
            Mostrar mais
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
