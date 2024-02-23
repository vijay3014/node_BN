const express = require('express')
const server = express();         // server create

server.get('/', (req, res) => {
      res.append('welcome to express.js');
});


server.listen(5600,()=>{
    console.log('server is running on port 5600');
})