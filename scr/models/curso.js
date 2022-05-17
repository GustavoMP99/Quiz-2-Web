const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
//mongodb automatically puts an id for all the items 
const CursoSchema = new Schema({//all the schemas have the items that are saved in an object in the corresponding table.
    id_profesor: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' },
    materia: String,
    ano: Number,
    division: String,
    carrera: String,
    horas_semanales: Number
});

module.exports = mongoose.model( 'Curso', CursoSchema );