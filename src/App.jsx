import { useState } from 'react'
import './App.css'
import { Routes,Route} from 'react-router-dom';
import Layout from "./pages/layout";
import PaginaUno from './pages/PaginaUno';
import PaginaDos from './pages/PaginaDos';
import PaginaTres from './pages/PginaTres';
import Footer from './Footer';
import Header from './Header';



function App() {

  return (
    <>
      <Header>Header</Header>
     <Routes>
        <Route path='/' element={<Layout />} > 
          <Route path='/' element={<PaginaUno />} />
          <Route path='/PaginaDos' element={<PaginaDos />} />
          <Route path='/PaginaTres' element={<PaginaTres />} />
          <Route path='*' element={<PaginaUno />} />
        </Route>
     </Routes>
     <Footer>Footer</Footer>
    </>
  );
}

export default App
