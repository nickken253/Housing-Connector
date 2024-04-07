import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { AppRoutes } from './routes/index.tsx';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>

  );
}

export default App;