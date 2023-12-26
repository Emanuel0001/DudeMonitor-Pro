import React, { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile'
function App () {
    return (
        //rotas
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/profile" element={<Profile />}/>
            </Routes>
        </Router>
    )
} export default App;