const express = require('express');

const router = express.Router();
const Profesor = require('../models/profesor');

router.get('/', async (req, res) =>{
    const temas =  await Profesor.find();
    res.json(temas);
});

router.post('/create', async (req, res) =>{
    const newProfesor = new Profesor( req.body );
    await newProfesor.save();
    
    res.json({
        message: 'Profesor guardado'
    });
});

router.delete('/delete', async (req, res)=>{
    await Profesor.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Profesor borrado'
    });
});

router.post('/edit', async (req, res) =>{
    await Profesor.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Profesor editado'
    });
});

module.exports = router;