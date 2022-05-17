const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
//mongodb automatically puts an id for all the items 
const curso_practicaSchema = new Schema({//all the schemas have the items that are saved in an object in the corresponding table.
    id_curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
    id_practica: { type: mongoose.Schema.Types.ObjectId, ref: 'Practicas' },
    horas: Number,
    fecha: Date,
    ayudante: String,
    grupos: String,
    caracter: String
});

module.exports = mongoose.model( 'Curso_Practica', curso_practicaSchema );