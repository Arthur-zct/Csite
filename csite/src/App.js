import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Paginas/footer';
import Header from './Paginas/Header';
import Home from './Paginas/Home';
import Adproduto from './Paginas/Adproduto';
import './App.css';

import Container from './Paginas/Container';

function App() {
  return (
    <Router>
      
      <Header/>
  
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Adproduto' element={<Adproduto/>}></Route>
      </Routes>

      <Footer/>
      
    </Router>
  );
}

export default App;
