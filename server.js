const express = require('express');
const app = express();
const path = require('path');

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,'dist','PAE-Movies-Client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'dist','PAE-Movies-Client', 'index.html'))
})

app.listen(port, () => {
    console.log("Listenning on port " + port)
})