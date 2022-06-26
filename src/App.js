
import React from 'react';
import './App.css';
import MainRoute from './routes/MainRoute';
import Currency from './routes/Currency';

//import {BrowserRouter as Routes,Route} from 'react-router-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom';






function App() {  
  return (


    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<MainRoute />}/>
          <Route path="/currency/:id" element={<Currency />}/>
        </Routes>

      </BrowserRouter>

    </div>

    
  
   
    
  );
}

export default App;
