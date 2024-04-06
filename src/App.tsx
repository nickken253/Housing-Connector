import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './feature/page/HomePage/HomePage.tsx';
import handleSubmit from './handles/handles';
import { useRef } from 'react';
import { useState } from 'react'



import { SearchForm } from './components/searchForm/SearchForm'

import Headers from './components/header/Header'
import { Card } from './components/card/Card'
import { RealEstateList } from './feature/page/RealEstateList/RealEstateList.tsx';
import { DetailCard } from './components/card/DetailCard.tsx';
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
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;