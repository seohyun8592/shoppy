import React from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import { BsPencilSquare } from 'react-icons/bs';
import { useAuthContext } from '../context/AuthenicationContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  return (
    <header>
      <Link to="/" className="logo">
        Shoppy
      </Link>
      <ul className="user">
        <li>
          {!user ? (
            <button className="btn__log" onClick={login}>
              Login
            </button>
          ) : (
            <button className="btn__log" onClick={logout}>
              Logout
            </button>
          )}
        </li>
        {!user && (
          <li>
            {' '}
            <button>Join</button>
          </li>
        )}
        {user && (
          <li>
            Cart(<span>0</span>)
          </li>
        )}

        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsPencilSquare className="admin__write" />
          </Link>
        )}
        {user && (
          <li>
            <User user={user} />
          </li>
        )}
      </ul>
    </header>
  );
}
