import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Register'
import Login from './Login'
function App () {
    return (
        //rotas
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </Router>
    )
} export default App;