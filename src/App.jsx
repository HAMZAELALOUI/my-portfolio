import React from 'react';
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
      <GlobalBackground theme={theme} />
      <Navigation />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;