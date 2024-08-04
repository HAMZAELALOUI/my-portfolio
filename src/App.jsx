import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './utils/theme';
import Home from './pages/Home';
import Footer from './components/Sections/footer-section/Footer';
import GlobalBackground from './components/common/GlobalBackground';
import Navigation from './components/Sections/navigation-section/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <GlobalBackground theme={theme} />
        <Navigation />
        <Home />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;