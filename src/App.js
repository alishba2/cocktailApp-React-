import logo from './logo.svg';
import './App.css';
import Home from './HOME/home';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import DrinksDetail from '../src/DRINKS/drinksDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    
      <Route path='/desc/:id' element={<DrinksDetail/>}></Route>
      

    </Routes>
    </BrowserRouter>
  );
} 

export default App;
