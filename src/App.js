import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import LoginPage from './pages/login';

if (process.env.NODE_ENV === 'development') {
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
