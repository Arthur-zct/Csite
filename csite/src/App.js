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

import './App.css';



function App() {
  return (
    <Router>
      
      <Header/>
  
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Adproduto' element={<Adproduto/>}></Route>
        <Route exact path='/Roupas' element={<Roupas/>}></Route>
        <Route exact path='/Computadores' element={<Computadores/>}></Route>
        <Route exact path='/Joias' element={<Joias/>}></Route>
        <Route exact path='/Moveis' element={<Moveis/>}></Route>
        <Route exact path='/Automoveis' element={<Automoveis/>}></Route>
        <Route exact path='/Celulares' element={<Celulares/>}></Route>
        <Route exact path='/Eletronicos' element={<Eletronicos/>}></Route>
        <Route exact path='/Pets' element={<Pets/>}></Route>
        <Route exact path='/Ferrament_constru' element={<Ferrament_constru/>}></Route>
      </Routes>

      <Footer/>
      
    </Router>
  );
}

export default App;
