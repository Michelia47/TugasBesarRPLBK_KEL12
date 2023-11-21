import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    return <Navigate to="/Login" />;
  };

  return (
    <div className='body2'>
      <header>
        <nav>
          <ul>
            <div className='teks1'>
              <li>
                K-LIST
              </li>
            </div>
            <div className='teks2'>
            <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                  TENTANG KAMI
                </Link>
              </li>
              <li>
                <Link to="/RekomendasiDrama" className={location.pathname === '/RekomendasiDrama' ? 'active' : ''}>
                  REKOMENDASI DRAMA
                </Link>
              </li>
              <li>
                <Link to="/QuotesSoundtrackDrama" className={location.pathname === '/QuotesSoundtrackDrama' ? 'active' : ''}>
                  QUOTES & SOUNDTRACK DRAMA
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link to="/" onClick={handleLogout} className="logout-link">
                    LOGOUT
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;