import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './Login.css'; 

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (username === validUsername && password === validPassword) {
      const user = { username: validUsername };
      login(user);
      setError('');
    } else {
      setError('Username atau Password Salah');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className='j'>
            <j>Selamat Datang di K-LIST</j>
        </div>
        <div className='l'>
            <l>Silahkan masukkan username dan password</l>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;