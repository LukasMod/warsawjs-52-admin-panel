import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import LoginPage from './pages/login';

if (process.env.REACT_APP_ENABLE_MOCKS == 1) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
