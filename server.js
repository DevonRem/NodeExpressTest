const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("h");
    //res.status(500).json({ message: "Error" });
    res.render('index', { text: 'world' });
    
});

const userRouter = require('./routes/users')

app.use('/users', userRouter)


app.listen(3000);