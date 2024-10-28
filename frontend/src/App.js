import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/login'; 
import Signup from './components/signup'; 

function App() { 
    return ( 
        <Router> 
            <div className="App"> 
                <Routes> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} /> 
                </Routes> 
            </div> 
        </Router> 
    ); 
}

export default App;