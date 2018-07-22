const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Index');
});

app.get('/ramdom/:firstNumber/:secondNumber', (req, res) => {
    const firt = parseInt(req.params.firstNumber) ;
    const second = parseInt(req.params.secondNumber);

    console.log(typeof firt);
    console.log(typeof second);

    if (isNaN(firt) || isNaN(second)) {
        res.status(404);
        res.json({"error:  ": "Bad resquest"})
        return 
    }

    const result = Math.floor(Math.random() * (second - firt) + firt);
    //res.send('Data received');
    console.log('Data received');
    console.log(result);

    res.json({"Lucky Number: ":result});

});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});