import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useState } from 'react';
import { NavBar}  from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
  <>
  <NavBar/>
  <ItemListContainer greeting="Bienvenidos al e-commerce de salud mas grande del mundo!"/>
  </>
  );
}

export default App;
