import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Footer from './Paginas/footer';
import Navbar from './Paginas/Navbar';
import Home from './Paginas/Home';
import Adproduto from './Paginas/Adproduto';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path='/Home' element={<Home/>}></Route>
        <Route exact path='/Adproduto' element={<Adproduto/>}></Route>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
