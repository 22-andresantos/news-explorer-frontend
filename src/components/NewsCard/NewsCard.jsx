import './NewsCard.css';

function NewsCard({ article }) {
  const { source, title, publishedAt, description, urlToImage } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className='news-card'>
      {urlToImage && (
        <img
          className='news-card__image'
          src={urlToImage}
          alt={title || 'Imagem da notícia'}
        />
      )}

      <div className='news-card__content'>
        <p className='news-card__date'>{formattedDate}</p>

        <h3 className='news-card__title'>{title || 'Notícia sem título'}</h3>

        {description && <p className='news-card__description'>{description}</p>}

        <p className='news-card__source'>
          {source?.name || 'Fonte desconhecida'}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
