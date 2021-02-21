import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SecureRoute from './components/SecureRoute';
import LoginPage from './pages/login';
import UsersPage from './pages/users';

if (process.env.REACT_APP_ENABLE_MOCKS == 1) {
  const { worker } = require('./api/mocks/browser');
  worker.start();
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <SecureRoute path="/users" exact>
          <UsersPage />
        </SecureRoute>
        <Route path="/" exact>
          Hello <Link to="/users">Show me users</Link>
        </Route>
      </Router>
    </ChakraProvider>
  );
}

export default App;
