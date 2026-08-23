import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch, initialKeyword = '' }) {
  const [keyword, setKeyword] = useState(initialKeyword);

  const [error, setError] = useState('');

  function handleChange(event) {
    setKeyword(event.target.value);

    if (error) {
      setError('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      setError('Por favor, insira uma palavra-chave');
      return;
    }

    setError('');
    onSearch(trimmedKeyword);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <label className='search-form__label' htmlFor='search-input'>
        Pesquisa
      </label>

      <div className='search-form__controls'>
        <input
          className='search-form__input'
          id='search-input'
          name='keyword'
          type='search'
          placeholder='Insira um tema'
          autoComplete='off'
          value={keyword}
          onChange={handleChange}
        />

        {error && <span className='search-form__error'>{error}</span>}

        <button className='search-form__button' type='submit'>
          Procurar
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
