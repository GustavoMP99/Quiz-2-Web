const mongoose = require( 'mongoose' );

const { Schema } = mongoose;
//mongodb automatically puts an id for all the items 
const PracticaSchema = new Schema({//all the schemas have the items that are saved in an object in the corresponding table.
    id_tema: { type: mongoose.Schema.Types.ObjectId, ref: 'Tema' },
    descrpcion: String,
    nombre: String
});

module.exports = mongoose.model( 'Practicas', PracticaSchema );