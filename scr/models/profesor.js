const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
//mongodb automatically puts an id for all the items 
const ProfesorSchema = new Schema({//all the schemas have the items that are saved in an object in the corresponding table.
    nombre_profesor: String,
    apellido_profesor: String
});

module.exports = mongoose.model( 'Profesor', ProfesorSchema );