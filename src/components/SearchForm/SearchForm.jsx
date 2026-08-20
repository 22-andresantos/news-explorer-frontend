import { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      return;
    }

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

        <button className='search-form__button' type='submit'>
          Procurar
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
