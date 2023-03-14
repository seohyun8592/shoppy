import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { AuthenficationProvider } from './context/AuthenicationContext';

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="App">
      <div className="wrap">
        <QueryClientProvider client={queryClient}>
          {/* <AuthenficationProvider> */}
          <Header />
          {/* </AuthenficationProvider> */}
          <Menu />
          <Outlet />
        </QueryClientProvider>
      </div>
    </div>
  );
}
