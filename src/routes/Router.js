import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterUser from "../pages/UserRegister"
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRouter";

function App() {
  return (
    //rotas
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
