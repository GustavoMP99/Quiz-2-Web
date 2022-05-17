const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
//mongodb automatically puts an id for all the items 
const TemaSchema = new Schema({//all the schemas have the items that are saved in an object in the corresponding table.
    tema: String
});

module.exports = mongoose.model( 'Tema', TemaSchema );