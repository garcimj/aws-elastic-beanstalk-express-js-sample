const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Just kidding, this is the Final test of AWS pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
