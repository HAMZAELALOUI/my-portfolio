import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './utils/theme';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <GlobalBackground theme={theme} />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;