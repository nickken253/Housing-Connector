import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './feature/page/HomePage/HomePage.tsx';
import handleSubmit from './handles/handles';
import { useRef } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Img } from './assets/index.ts'

import { SearchForm } from './components/searchForm/SearchForm'

import { Header } from './components/header/Header'
import { Card } from './components/card/Card'
import { Footer } from './components/footer/Footer'
function App() {
  const dataRef = useRef<HTMLInputElement>(null);

  const submithandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(dataRef.current!.value);

    handleSubmit(dataRef.current!.value);
    dataRef.current!.value = "";
  }
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;