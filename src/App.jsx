import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FloatingContact from './components/FloatingContact';
import Preloader from './components/Preloader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.body.classList.add('loaded');
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader />}
      <div className={`main-content-wrapper ${isLoading ? 'loading' : 'loaded'}`}>
          <Header />
          <HomePage />
          <FloatingContact />
      </div>
    </>
  );
}
export default App;