const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Receiving data from the server');
    console.log('Receiving data from the server');
});

app.post('/', (req, res) => {
    res.send('Saving data on the server');
    console.log('Saving data on the server');
});

app.put('/', (req, res) => {
    res.send('Updating data on the server');
    console.log('Updating data on the server');
});

app.delete('/', (req, res) => {
    res.send('Deleting data on the server');
    console.log('Deleting data on the server');
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});