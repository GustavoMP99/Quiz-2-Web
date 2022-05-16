const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const curso_practicaSchema = new Schema({
    id_curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
    id_practica: { type: mongoose.Schema.Types.ObjectId, ref: 'Practicas' },
    horas: Number,
    fecha: Date,
    ayudante: String,
    grupos: String,
    caracter: String
});

module.exports = mongoose.model( 'Curso_Practica', curso_practicaSchema );