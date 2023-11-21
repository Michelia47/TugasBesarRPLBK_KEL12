// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './main/AuthContext';
import TentangKami from './TentangKami';
import Drama from './pages/Drama/Drama';
import Sinopsis from './pages/Drama/Sinopsis';
import Cast from './pages/Drama/Cast';
import Quotes from './pages/Drama/Quotes';
import Soundtrack from './pages/Drama/Soundtrack';
import RekomendasiDrama from './RekomendasiDrama';
import QuotesSoundtrackDrama from './QuotesSoundtrackDrama';
import Login from './main/Login';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <TentangKami /> : <Login />} />
        <Route path="/RekomendasiDrama" element={isAuthenticated ? <RekomendasiDrama /> : <Login />} />
        <Route path="/QuotesSoundtrackDrama" element={isAuthenticated ? <QuotesSoundtrackDrama /> : <Login />} />
        <Route path="/RekomendasiDrama/Drama" element={isAuthenticated ? <Drama /> : <Login />} />
        <Route path="/RekomendasiDrama/Sinopsis" element={isAuthenticated ? <Sinopsis /> : <Login />} />
        <Route path="/RekomendasiDrama/Cast" element={isAuthenticated ? <Cast /> : <Login />} />
        <Route path="/QuotesSoundtrackDrama/Quotes" element={isAuthenticated ? <Quotes /> : <Login />} />
        <Route path="/QuotesSoundtrackDrama/Soundtrack" element={isAuthenticated ? <Soundtrack /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;