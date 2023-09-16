import './App.css';
import React , {useState} from 'react';
import { BrowserRouter, useNavigate , Routes , Route, HashRouter} from "react-router-dom";
import Home from './components/home';
import Main from './components/idx';

function App() {
  return (
    <HashRouter>
    <div className="App">
    <Routes>
    <Route path="/" index element={<Main/>}></Route> 
    <Route path="seodata" element={<Home/>}></Route> 
    
    </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
