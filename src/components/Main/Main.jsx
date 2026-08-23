import {
  LOCAL_STORAGE_ARTICLES_KEY,
  LOCAL_STORAGE_KEYWORD_KEY,
} from '../../utils/constants';
import { getNews } from '../../utils/NewsApi';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import './Main.css';

function Main({ savedArticles, setSavedArticles, isLoggedIn }) {
  const [articles, setArticles] = useState(() => {
    const storedArticles = localStorage.getItem(LOCAL_STORAGE_ARTICLES_KEY);

    if (!storedArticles) {
      return [];
    }

    try {
      return JSON.parse(storedArticles);
    } catch {
      return [];
    }
  });

  const [currentKeyword, setCurrentKeyword] = useState(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEYWORD_KEY) || '';
  });
  const [isLoading, setIsLoading] = useState(false);

  const [hasSearched, setHasSearched] = useState(() => {
    return Boolean(localStorage.getItem(LOCAL_STORAGE_ARTICLES_KEY));
  });

  const [error, setError] = useState('');
  const [searchId, setSearchId] = useState(0);

  function handleSearch(keyword) {
    setSearchId((currentId) => currentId + 1);
    setCurrentKeyword(keyword);

    setIsLoading(true);
    setHasSearched(true);
    setError('');

    getNews(keyword)
      .then((data) => {
        const receivedArticles = data.articles || [];

        setArticles(receivedArticles);

        localStorage.setItem(
          LOCAL_STORAGE_ARTICLES_KEY,
          JSON.stringify(receivedArticles),
        );

        localStorage.setItem(LOCAL_STORAGE_KEYWORD_KEY, keyword);
      })
      .catch((err) => {
        console.error(err);

        setArticles([]);

        setError(
          'Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.',
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <main className='main'>
      <section className='main__hero'>
        <div className='main__container'>
          <h1 className='main__title'>
            O que está
            <br />
            acontecendo no mundo?
          </h1>

          <p className='main__description'>
            Encontre as últimas notícias sobre qualquer tema e salve elas em sua
            conta pessoal
          </p>

          <SearchForm onSearch={handleSearch} initialKeyword={currentKeyword} />
        </div>
      </section>

      {isLoading && <Preloader />}

      {!isLoading && hasSearched && articles.length === 0 && !error && (
        <NothingFound />
      )}

      {/* renderizando os cards */}
      {!isLoading && articles.length > 0 && (
        <NewsCardList
          key={searchId}
          articles={articles}
          savedArticles={savedArticles}
          setSavedArticles={setSavedArticles}
          isLoggedIn={isLoggedIn}
          keyword={currentKeyword}
        />
      )}

      {!isLoading && error && (
        <section className='main__status'>
          <p>{error}</p>
        </section>
      )}
      <About />
    </main>
  );
}

export default Main;
