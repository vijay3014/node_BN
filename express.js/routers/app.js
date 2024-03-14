require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const mongoose = require('mongoose');
// Database Connection
async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/vijay');
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
.then(()=>console.log('DB is Connected SuccessFully.......'))
.catch( err =>{console.log(err)});

// Middlware
app.use(express.json());
app.use(morgan('dev'));

// Product Server
// const productRoutes = require('./routers/product.routes');
// app.use('/products', productRoutes);

// User Server
// const userRoutes = require('./routers/user.routes');
// app.use('/users',userRoutes)

// User Server (mongoosh)
const userRoutes = require('./Routers/users.routes');
const productRoutes = require('./Routers/product.routes');
const cartRoutes = require('./routers/cart.routes');
const orderRoutes = require('./routers/order.routes');
app.use('/api/user',userRoutes);
app.use('/api/product',productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/order',orderRoutes);

app.listen(port,()=>{
    console.log(`Server Start at http://localhost:${port}`);
}); 