const mongoose = require('mongoose');
const{ Schema }= mongoose;
//mongodb automatically puts an id for all the items 
const UsuarioSchema = new Schema({//all the schemas have the items that are saved in an object in the corresponding table.
    username: String,
    password: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);