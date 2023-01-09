import React from "react";
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddMovie from "./components/AddMovie";


function App() {
  return (
    <div className="App">
    
       <Router>
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/add-movie" element={<AddMovie />}/>
         </Routes>
   
      </Router>
    </div>
  );
}

export default App;
