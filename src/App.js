import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import LoginPage from './pages/login';
import UsersPage from './pages/users';

if (process.env.REACT_APP_ENABLE_MOCKS == 1) {
  const { worker } = require('./api/mocks/browser');
  worker.start();
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginPage />
      <UsersPage />
    </ChakraProvider>
  );
}

export default App;
