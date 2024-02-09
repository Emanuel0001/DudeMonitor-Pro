import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import isAuthenticated from "../components/Auth";

 const PrivateRoute = ({ children }) => {
 
  const [logado, setLogado] = useState(undefined);

  isAuthenticated().then(isAuth => {
    setLogado(isAuth);
  });

  if (logado === undefined) {
    // Pode adicionar um componente de carregamento aqui se necessário
    return null;
  }

  return logado ? children : <Navigate to="/" />;
};

export default PrivateRoute;