require('dotenv').config();
const express = require('express') //import express
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express() // tạo express application
const port = process.env.PORT || 8008 ;// init port
const hostname = process.env.HOST_NAME;

// config template 

configViewEngine(app);

//khai báo routes
app.use('/',webRoutes);

app.listen(port, hostname,() => {
    console.log(`Example app listening on port ${port}`)
})