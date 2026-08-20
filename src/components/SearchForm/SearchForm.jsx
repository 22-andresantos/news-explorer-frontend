import './SearchForm.css';

function SearchForm() {
  function handleSubmit(event) {
    event.preventDefault();
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
        />

        <button className='search-form__button' type='submit'>
          Procurar
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
