import './SavedNewsHeader.css';

function SavedNewsHeader({ articles }) {
  const articleCount = articles.length;

  const keywords = [
    ...new Set(articles.map((article) => article.keyword).filter(Boolean)),
  ];

  let keywordsText = 'Nenhuma';

  if (keywords.length === 1) {
    keywordsText = keywords[0];
  }

  if (keywords.length === 2) {
    keywordsText = `${keywords[0]} e ${keywords[1]}`;
  }

  if (keywords.length > 2) {
    keywordsText = `${keywords[0]}, ${keywords[1]} e ${
      keywords.length - 2
    } outras`;
  }

  return (
    <section className='saved-news-header'>
      <div className='saved-news-header__container'>
        <p className='saved-news-header__subtitle'>Artigos salvos</p>

        <h1 className='saved-news-header__title'>
          Você tem {articleCount} artigos salvos
        </h1>

        <p className='saved-news-header__keywords'>
          Por palavras-chave: <strong>{keywordsText}</strong>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
