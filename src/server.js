/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port:5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes:{
        cors: {
            origin: ['*'],
        },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
// http://notesapp-v1.dicodingacademy.com/
// ada mekanisme yang dapat membuat mereka saling berinteraksi. 
// Mekanisme tersebut disebut Cross-origin resource sharing (CORS). 
// tips --> chrome://flags/#block-insecure-private-network-requests (disabled)