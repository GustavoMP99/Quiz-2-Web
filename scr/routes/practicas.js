const express = require('express');

const router = express.Router();
const Practicas = require('../models/practicas');

router.get('/', async (req, res) =>{
    const practicas =  await Practicas.find();
    res.json(practicas);
});

router.post('/create', async (req, res) =>{
    const newPractica = new Practicas( req.body );
    await newPractica.save();
    
    res.json({
        message: 'Practica guardado'
    });
});

router.delete('/delete', async (req, res)=>{
    await Practicas.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Practica borrado'
    });
});

router.post('/edit', async (req, res) =>{
    await Practicas.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Practica editado'
    });
});

module.exports = router;