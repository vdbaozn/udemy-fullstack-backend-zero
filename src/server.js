const express = require('express') //import express
const path = require('path');

const app = express() // tạo express application
const port = 8080  // init port
// config template 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    // res.send('Check ABC')
    res.render('sample.ejs')
})

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})