import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SavedNews from './components/SavedNews/SavedNews';
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess';

import './App.css';

function App() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);

  function handleLoginClick() {
    setActiveModal('login');
  }

  function handleRegisterClick() {
    setActiveModal('register');
  }

  function handleRegisterSuccess() {
    setActiveModal('success');
  }

  function handleCloseModal() {
    setActiveModal(null);
  }

  function handleLoginSuccess(email) {
    setIsLoggedIn(true);
    setUserName(email.split('@')[0]);
    setActiveModal(null);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserName('');
    setSavedArticles([]);
    setActiveModal(null);

    navigate('/');
  }

  function handleDeleteArticle(articleToDelete) {
    setSavedArticles((currentArticles) =>
      currentArticles.filter((article) => article._id !== articleToDelete._id),
    );
  }

  return (
    <div className='page'>
      <Header
        onLoginClick={handleLoginClick}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Main
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route
          path='/saved-news'
          element={
            <SavedNews
              savedArticles={savedArticles}
              onDeleteArticle={handleDeleteArticle}
            />
          }
        />
      </Routes>

      <Footer />

      <Login
        isOpen={activeModal === 'login'}
        onClose={handleCloseModal}
        onRegisterClick={handleRegisterClick}
        onLoginSuccess={handleLoginSuccess}
      />

      <Register
        isOpen={activeModal === 'register'}
        onClose={handleCloseModal}
        onLoginClick={handleLoginClick}
        onSuccess={handleRegisterSuccess}
      />

      <RegisterSuccess
        isOpen={activeModal === 'success'}
        onClose={handleCloseModal}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
