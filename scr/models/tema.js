const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const TemaSchema = new Schema({
    tema: String
});

module.exports = mongoose.model( 'Tema', TemaSchema );