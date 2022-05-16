const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const CursoSchema = new Schema({
    id_profesor: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' },
    materia: String,
    ano: Number,
    division: String,
    carrera: String,
    horas_semanales: Number
});

module.exports = mongoose.model( 'Curso', CursoSchema );