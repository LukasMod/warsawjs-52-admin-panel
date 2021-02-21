import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.delay(1000),
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.get('/users', (req, res, ctx) => {
    return res(
      // ctx.delay(1000),
      ctx.json([
        {
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
          firstName: 'John',
          lastName: 'Maverick',
        },
        {
          id: 'xzdfsdfasdf24134124a',
          firstName: 'Andrzej',
          lastName: 'Kowalski',
        },
        {
          id: '1231fds313rfs',
          firstName: 'Ania',
          lastName: 'Maliniak',
        },
      ])
    );
  }),
];
