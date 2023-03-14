import { createContext, useContext } from 'react';
import authenticationClient from '../api/authenticationClient';

export const AuthenficationCtxt = createContext();

const value = new authenticationClient();

export function AuthenficationProvider({ children }) {
  return (
    <AuthenficationCtxt.Provider value={{ value }}>
      {children}
    </AuthenficationCtxt.Provider>
  );
}

export function useAuthenficationApi() {
  return useContext(AuthenficationCtxt);
}
