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
        <Route path="/RekomendasiDrama" element={<RekomendasiDrama />} />
        <Route path="/QuotesSoundtrackDrama" element={<QuotesSoundtrackDrama />} />
        <Route path="/RekomendasiDrama/Drama" element={<Drama />} />
        <Route path="/RekomendasiDrama/Sinopsis" element={<Sinopsis />} />
        <Route path="/RekomendasiDrama/Cast" element={<Cast />} />
        <Route path="/QuotesSoundtrackDrama/Quotes" element={<Quotes />} />
        <Route path="/QuotesSoundtrackDrama/Soundtrack" element={<Soundtrack />} />
      </Routes>
    </Router>
  );
}

export default App;