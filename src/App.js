import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import { AuthContextProvider } from './context/AuthenicationContext';

export default function App() {
  return (
    <div className="App">
      <div className="wrap">
        <AuthContextProvider>
          <Header />
          <Menu />
          <Outlet />
        </AuthContextProvider>
      </div>
    </div>
  );
}
