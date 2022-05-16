const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const jwt = require( 'jsonwebtoken');
const bodyParser = require( 'body-parser');
require('dotenv/config');
const app= express();
mongoose.connect('mongodb://localhost/homework')
    .then(db => console.log('database connected'))
    .catch(err => console.log(err));

//Setings express
app.set('port', process.env.PORT || 3000);

//Midlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/usuario',require('./routes/usuario'));
app.use('/tema',require('./routes/tema'));
app.use('/profesor',require('./routes/profesor'));
app.use('/practicas',require('./routes/practicas'));
app.use('/curso',require('./routes/curso'));
app.use('/curso_practica',require('./routes/curso_practica'));

//Static files
const route_=__dirname;
app.use(express.static(route_+'/public'));

//Server is listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'))
});
