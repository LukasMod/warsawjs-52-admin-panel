import React, { useState, useEffect } from 'react';
import api from '../../api';
import { Box } from '@chakra-ui/react';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.getUsers().then(result => setUsers(result.data));
  }, []);

  return (
    <Box>
      {users.map(user => (
        <Box key={user.id}>
          {' '}
          {user.firstName} {user.lastName}
        </Box>
      ))}
    </Box>
  );
};

export default Users;
