const express = require('express');

const router = express.Router();
const Tema = require('../models/tema');

router.get('/', async (req, res) =>{
    const temas =  await Tema.find();
    res.json(temas);
});

router.post('/create', async (req, res) =>{
    const newTema = new Tema( req.body );
    await newTema.save();
    
    res.json({
        message: 'Tema guardado'
    });
});

router.delete('/delete', async (req, res)=>{
    await Tema.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Tema borrado'
    });
});

router.post('/edit', async (req, res) =>{
    await Tema.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Tema editado'
    });
});

module.exports = router;