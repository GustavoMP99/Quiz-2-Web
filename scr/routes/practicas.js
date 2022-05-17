const express = require('express');

const router = express.Router();
const Practicas = require('../models/practicas');//get the model of the table

router.get('/', async (req, res) =>{//code to get all the practicas
    const practicas =  await Practicas.find();
    res.json(practicas);
});

router.post('/create', async (req, res) =>{//code to create practica
    const newPractica = new Practicas( req.body );
    await newPractica.save();
    
    res.json({
        message: 'Practica guardado'
    });
});

router.delete('/delete', async (req, res)=>{//function to delete a practica with the id
    await Practicas.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Practica borrado'
    });
});

router.post('/edit', async (req, res) =>{//funtion to edit some practica with the id
    await Practicas.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Practica editado'
    });
});

module.exports = router;