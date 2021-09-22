const express = require('express');
const path = require('path')
// const { join } = require('path');
const app = express()

//console.log(__dirname);


app.use('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "public/hello.txt"), 'test.txt');
    res
        .status(201)
        .cookie("toke", "test", {
            expire: new Date(Date.now() + 8 * 3600000)
        })
        .cookie("hello", "hello")
        .redirect(301, "/admin")
})
app.listen(5000)