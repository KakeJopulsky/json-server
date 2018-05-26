const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const path = require('path');

server.use(middlewares);

// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use(router);

server.get('/', (req, res) => {
  res.jsonp('hello')
})


// server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running at port 3000')
});
