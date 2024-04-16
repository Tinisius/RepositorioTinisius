// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let messages = [];

app.post('/submit-message', (req, res) => {
    const { message } = req.body;
    messages.push(message);
    res.json({ message });
});

app.get('/messages', (req, res) => {
    res.json({ messages });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
