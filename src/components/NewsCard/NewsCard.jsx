import './NewsCard.css';

function NewsCard() {
  return (
    <article className='news-card'>
      <img
        className='news-card__image'
        src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
        alt='Imagem ilustrativa da notícia'
      />

      <div className='news-card__content'>
        <p className='news-card__date'>2 de agosto de 2026</p>

        <h3 className='news-card__title'>
          Um exemplo de notícia para o projeto
        </h3>

        <p className='news-card__description'>
          Este é um texto temporário que vamos substituir pelos dados reais
          recebidos da API.
        </p>

        <p className='news-card__source'>Fonte da notícia</p>
      </div>
    </article>
  );
}

export default NewsCard;
