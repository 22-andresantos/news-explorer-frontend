import bookmarkIcon from '../../images/bookmark.svg';
import bookmarkHoverIcon from '../../images/bookmark-hover.svg';
import bookmarkSavedIcon from '../../images/bookmark-salvar.svg';
import trashIcon from '../../images/trash.svg';
import './NewsCard.css';

function NewsCard({
  article,
  isLoggedIn = false,
  isSaved = false,
  isSavedPage = false,
  onSave,
  onDelete,
}) {
  const { source, title, publishedAt, description, urlToImage, keyword } =
    article;

  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  function handleSaveClick() {
    if (!isLoggedIn) {
      return;
    }

    onSave?.(article);
  }

  return (
    <article className='news-card'>
      <div className='news-card__image-wrapper'>
        {urlToImage && (
          <img
            className='news-card__image'
            src={urlToImage}
            alt={title || 'Imagem da notícia'}
          />
        )}

        {isSavedPage ? (
          <>
            {keyword && <span className='news-card__keyword'>{keyword}</span>}

            <div className='news-card__delete-container'>
              <span className='news-card__delete-tooltip'>
                Remover dos salvos
              </span>

              <button
                className='news-card__delete-button'
                type='button'
                aria-label='Remover artigo salvo'
                onClick={() => onDelete?.(article)}
              >
                <img
                  className='news-card__delete-icon'
                  src={trashIcon}
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </div>
          </>
        ) : (
          <div className='news-card__save-container'>
            {!isLoggedIn && (
              <span className='news-card__tooltip'>
                Faça o login para salvar os artigos.
              </span>
            )}

            <button
              className={`news-card__save-button ${
                isSaved ? 'news-card__save-button_saved' : ''
              }`}
              type='button'
              aria-label={isSaved ? 'Remover artigo salvo' : 'Salvar artigo'}
              onClick={handleSaveClick}
            >
              <img
                className='news-card__save-icon news-card__save-icon_default'
                src={isSaved ? bookmarkSavedIcon : bookmarkIcon}
                alt=''
                aria-hidden='true'
              />

              {!isSaved && (
                <img
                  className='news-card__save-icon news-card__save-icon_hover'
                  src={bookmarkHoverIcon}
                  alt=''
                  aria-hidden='true'
                />
              )}
            </button>
          </div>
        )}
      </div>

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
