const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const PracticaSchema = new Schema({
    id_tema: { type: mongoose.Schema.Types.ObjectId, ref: 'Tema' },
    descrpcion: String,
    nombre: String
});

module.exports = mongoose.model( 'Practicas', PracticaSchema );