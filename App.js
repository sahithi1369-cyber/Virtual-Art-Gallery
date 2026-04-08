import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import VirtualTours from './pages/VirtualTours';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PurchaseHistory from './pages/PurchaseHistory';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'tours':
        return <VirtualTours />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard />;
      case 'purchase-history':
        return <PurchaseHistory />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div style={styles.app}>
        <Header setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </AuthProvider>
  );
}

const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
};

export default App;
