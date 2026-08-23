import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews({ savedArticles, onDeleteArticle }) {
  return (
    <main className='saved-news'>
      <SavedNewsHeader articles={savedArticles} />

      <NewsCardList
        articles={savedArticles}
        isSavedPage
        onDelete={onDeleteArticle}
      />
    </main>
  );
}

export default SavedNews;
