const express = require('express');

const router = express.Router();
const { generateAccesToken } = require( '../helpers/auth' );
const Usuario = require('../models/usuario');

router.get('/', async (req, res) =>{
    const usuarios =  await Usuario.find();
    res.json(usuarios);
});

router.post('/create', async (req, res) =>{
    const {username, password } = req.body;

    const Old = await Usuario.findOne( { username } );

    if (Old) {
        return res.status(409).json({
            message: "Username already exist"
        });
    }

    const newUser = new Usuario( req.body );
    await newUser.save();
    
    res.json({
        message: 'Usuario guardado'
    });
});

router.delete('/delete', async (req, res)=>{
    await Usuario.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Usuario borrado'
    });
});

router.post('/edit', async (req, res) =>{
    const { username, password } = req.body;
    const Old = await Usuario.findOne( { username } );

    if (Old) {
        return res.status(409).json({
            message: "Username already exist"
        });
    }
    await Usuario.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Usuario editado'
    });
});

router.post('/login', async (req, res) =>{
    const { username, password } = req.body;

    const user = await Usuario.findOne( { username } );

    if(user && user.password === password) {
        const accesToken = generateAccesToken( user );

        return res.json({
            accesToken
        });

    } else {

        return res.status(401).json({
            message: "Username or password incorrect"
        })

    }
});

module.exports = router;