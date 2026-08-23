import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { CARDS_PER_PAGE } from '../../utils/constants';
import './NewsCardList.css';

function NewsCardList({
  articles,
  isSavedPage = false,
  onDelete,
  savedArticles = [],
  setSavedArticles,
  isLoggedIn = false,
  keyword = '',
}) {
  const [visibleCards, setVisibleCards] = useState(CARDS_PER_PAGE);

  const visibleArticles = articles.slice(0, visibleCards);

  function handleShowMore() {
    setVisibleCards((currentValue) => currentValue + CARDS_PER_PAGE);
  }

  function handleSaveArticle(articleToSave) {
    if (!setSavedArticles) {
      return;
    }

    setSavedArticles((currentArticles) => {
      const alreadySaved = currentArticles.some(
        (savedArticle) => savedArticle.url === articleToSave.url,
      );

      if (alreadySaved) {
        return currentArticles.filter(
          (savedArticle) => savedArticle.url !== articleToSave.url,
        );
      }

      return [
        ...currentArticles,
        {
          ...articleToSave,
          _id: crypto.randomUUID(),
          keyword,
        },
      ];
    });
  }

  return (
    <section className='news-card-list'>
      <div className='news-card-list__container'>
        {!isSavedPage && (
          <h2 className='news-card-list__title'>Resultados da pesquisa</h2>
        )}

        <div className='news-card-list__grid'>
          {visibleArticles.map((article) => {
            const isSaved = savedArticles.some(
              (savedArticle) => savedArticle.url === article.url,
            );

            return (
              <NewsCard
                key={article.url || article._id}
                article={article}
                isSavedPage={isSavedPage}
                onDelete={onDelete}
                isLoggedIn={isLoggedIn}
                isSaved={isSaved}
                onSave={handleSaveArticle}
              />
            );
          })}
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
