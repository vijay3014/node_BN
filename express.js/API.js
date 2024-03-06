// const express = require('express');

// const app = express(); // create server
// const port = 4488;
// const morgan = require('morgan');
// const products =  require ('./products.json');

// //middleware
// app.use(express.json());
// app.use(morgan('dev'));

// //end-point -CRUD

// app.post('/products',(req,res)=>{
//     // console.log(req.body);
//     const product=req.body;
//     products.push(product);
//     //products.push({...req.body});
//     res.status(201).json({message:'product is add...'})
// });

// app.get('/products/single-product' ,(req,res)=>{
//    const id = +req.query.id;








   
// //    console.log(id);
//    let product=products.find((item)=>item.id===id)
//    res.status(200).json(product);
// });


// app.listen(port,()=>{
//     console.log(`server start at http://localhost:4488`);
// });