const http  = require('http');

const server = http.createServer((req, res) => {
   res.end('welcome to the great vijays server');
});
 

  server.listen(8472, () => {
   console.log('server is running on port 8472');
});