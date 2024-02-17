// http Module
// making server

const http  = require('http');

const server = http.createServer((req, res) => {
   res.end('welcome to the great vijays server');
});
 

  server.listen(8472, () => {
   console.log('server is running on port 8472');
});


const server_2 = http.createServer((req, res) => {
   res.end('welcome to the great vijays second server');
});
 

  server_2.listen(4488, () => {
   console.log('server is running on port 4488');
});


const server_3 = http.createServer((req, res) => {
   res.end('welcome to the great vijays third server');
});
 

  server_3.listen(8844, () => {
   console.log('server is running on port 8844');
});


const server_4 = http.createServer((req, res) => {
   res.end('welcome to the great vijays fourth server');
});
 

  server_4.listen(4444, () => {
   console.log('server is running on port 4444');
});


const server_5 = http.createServer((req, res) => {
   res.end('welcome to the great vijays fifth server');
});
 

  server_5.listen(8888, () => {
   console.log('server is running on port 8888');
});
