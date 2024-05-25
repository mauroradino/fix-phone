import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import RepararPage from './pages/RepararPage';
import HomePage from './pages/HomePage/HomePage';
import AccesoriosPage from './pages/AccesoriosPage/AccesoriosPage';
import ContactoPage from './pages/ContactoPage/ContactoPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Reparaciones' element={<RepararPage />} />
          <Route path='/Accesorios' element={<AccesoriosPage />} />
          <Route path='/Contacto' element={<ContactoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
