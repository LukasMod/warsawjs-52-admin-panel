import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import LoginPage from './pages/login/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
    </ChakraProvider>
  );
}

export default App;
