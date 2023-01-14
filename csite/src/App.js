import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Paginas/footer';
import Header from './Paginas/Header';
import Home from './Paginas/Home';
import Adproduto from './Paginas/Adproduto';
import Roupas from './Paginas/Roupas'
import Joias from './Paginas/Joias'
import Moveis from './Paginas/Moveis'
import Automoveis from './Paginas/Automoveis'
import Computadores from './Paginas/Computadores'
import Celulares from './Paginas/Celulares'
import Eletronicos from './Paginas/Eletronicos'
import Pets from './Paginas/Pets'
import Ferrament_constru from './Paginas/Ferram-constru'

import ProdutoDetalhes from './Paginas/ProdutoDetalhes'


import './App.css';

function App() {
  return (
    <Router>
      
      <Header/>
  
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Adproduto' element={<Adproduto/>}/>
        <Route exact path='/Roupas' element={<Roupas/>}/>
        <Route exact path='/Computadores' element={<Computadores/>}/>
        <Route exact path='/Joias' element={<Joias/>}/>
        <Route exact path='/Moveis' element={<Moveis/>}/>
        <Route exact path='/Automoveis' element={<Automoveis/>}/>
        <Route exact path='/Celulares' element={<Celulares/>}/>
        <Route exact path='/Eletronicos' element={<Eletronicos/>}/>
        <Route exact path='/Pets' element={<Pets/>}/>
        <Route exact path='/Ferrament_constru' element={<Ferrament_constru/>}/>
        <Route exact path='/ProdutoDetalhes/:catego/:id' element={<ProdutoDetalhes/>}/>
      </Routes>

      <Footer/>
      
    </Router>
  );
}

export default App;
