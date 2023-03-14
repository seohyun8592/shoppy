import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/authentication';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  });
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header>
      <Link to="/" className="logo">
        Shoppy
      </Link>
      <div className="menu__bar">
        {!user && (
          <button className="log__in" onClick={handleLogin}>
            Login
          </button>
        )}
        {user && (
          <button className="log__in" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
