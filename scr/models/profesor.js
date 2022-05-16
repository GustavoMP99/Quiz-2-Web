const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const ProfesorSchema = new Schema({
    nombre_profesor: String,
    apellido_profesor: String
});

module.exports = mongoose.model( 'Profesor', ProfesorSchema );