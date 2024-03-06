// const express = require('express')
// const server = express();         // server create

// server.get('/', (req, res) => {
//       res.append('welcome to express.js');
// });


// server.listen(4488,()=>{
//     console.log('server is running on port 4488');
// })

//-----------EXPRESS.JS-----------//

// const express = require('express')
// const server = express();         // server create
// const path = require('path')

// server.post('/', (req, res) => {
//       res.send('post method');
// });

// server.get('/', (req, res) => {
//       res.end('welcome to express.js');
// });

// server.put('/', (req, res) => {
//     res.status(400).json({Message:'put method'});
// });

// server.delete('/', (req, res) => {
//     res.sendStatus(201);
// });

// server.patch('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'vijy.txt'));
// });


// server.listen(5600,()=>{
//     console.log('server is running on http://localhost:4488');
// })


//-----------second.JS-----------//

const express =  require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');

// middleware
let myFun = (req, res, next) => {
    if((req.query.age) >=18){
        next();
     }
     else{
        res.send('you are not 18 years old');
     }
}

//  app.use(myFun);   // Application level middleware 
 app.use(express.json());    // built-in
 app.use(morgan('dev'));

 app.get('/', (req, res, next)=> {
    res.send('Welcome to express js');
 });
 
 app.post('/',(req, res, next)=> {
    res.send('post method');
 })

 app.listen(port, () => {
   console.log('server start at http://localhost:7070');
 })