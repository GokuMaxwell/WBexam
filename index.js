const express = require('express');
const mongoose = require('mongoose');


// Mongodb connection setup
mongoose.connect('mongodb://localhost/goodhealthDb', { useNewUrlParser: true, useUnifiedTopology: true })
.then(results => { console.log('Database connected successfully ..')})
.catch(error => { console.log(` Sorry ${error.message} ...`)});

const index = express();
const port = 3000 || proccess.env.PORT;
index.set('view engine','ejs');
index.use(express.static(__dirname + '/stray'));
index.use(express.json());
index.use(express.urlencoded({ extended: true}));


// Defined paths to the various endpoint
index.use('/', require('./routes/'));

index.use('/material', require('./routes/Material'));
index.use('/todo', require('./routes/todo'))

index.listen(port, ()=>{
    console.log(`Server started on port ${port} ...`)
});
