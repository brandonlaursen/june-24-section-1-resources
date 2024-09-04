const express = require('express');
const app = express();

// npm install dotenv
require('dotenv').config();

// console.log(process.env)

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
