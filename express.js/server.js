// const express = require('express')
// const server = express();         // server create

// server.get('/', (req, res) => {
//       res.append('welcome to express.js');
// });


// server.listen(4488,()=>{
//     console.log('server is running on port 4488');
// })

//-----------EXPRESS.JS-----------//

const express = require('express')
const server = express();         // server create
const path = require('path')

server.post('/', (req, res) => {
      res.send('post method');
});

server.get('/', (req, res) => {
      res.end('welcome to express.js');
});

server.put('/', (req, res) => {
    res.status(400).json({Message:'put method'});
});

server.delete('/', (req, res) => {
    res.sendStatus(201);
});

server.patch('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'vijy.txt'));
});


server.listen(5600,()=>{
    console.log('server is running on http://localhost:4488');
})

