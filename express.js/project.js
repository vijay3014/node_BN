require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const mongoose = require('mongoose');

async function main(){
    // await mongoose.connect('mongodb://127.0.0.1:27017/vijay');
    await mongoose.connect(process.env.ONDATABASE);
};

main()
.then(()=> console.log('Db is connected'))

.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const ProjectRoutes = require('./routers/project.routes');
app.use('/Project',ProjectRoutes)

app.listen(port,() => {
    console.log(`Server Start At http://localhost:${port}`);
});