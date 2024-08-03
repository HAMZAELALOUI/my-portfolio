import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './utils/theme';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import AnimatedBackground from './components/BackgroundAnimation'; // Import the new component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AnimatedBackground theme={theme} /> {/* Add the AnimatedBackground here */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;