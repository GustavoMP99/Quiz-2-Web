const mongoose = require('mongoose');
const{ Schema }= mongoose;

const UsuarioSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);