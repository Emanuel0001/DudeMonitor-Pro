import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App () {
    return (
        //rotas
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/" element={<Dashboard />}/>
            </Routes>
        </Router>
    )
} export default App;