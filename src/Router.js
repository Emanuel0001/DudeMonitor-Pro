import React, { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Pages/Register/Register';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Profile/Profile'

function App () {
    return (
        //rotas
        <Router>
            <Routes>
                <Route path="/"  element={<LoginPage />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </Router>
    )
} export default App;