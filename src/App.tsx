import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import FirstTimeline from './components/FirstTimeline/FirstTimeline';

const App = () => (
  <Container
    style={{
      padding: 0,
      margin: 0,
      width: '100vw',
      maxWidth: '100%',
    }}
  >
    <LandingPage />
    <FirstTimeline />
    <NavBar />
  </Container>
);

export default App;
