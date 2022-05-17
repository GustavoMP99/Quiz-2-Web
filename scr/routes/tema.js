const express = require('express');

const router = express.Router();
const Tema = require('../models/tema');//get the model of the table

router.get('/', async (req, res) =>{//code to get all temas
    const temas =  await Tema.find();
    res.json(temas);
});

router.post('/create', async (req, res) =>{//function to create a tema
    const newTema = new Tema( req.body );
    await newTema.save();
    
    res.json({
        message: 'Tema guardado'
    });
});

router.delete('/delete', async (req, res)=>{//funtion to delete a tema with the id
    await Tema.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Tema borrado'
    });
});

router.post('/edit', async (req, res) =>{//funtion to edit a tema with the id
    await Tema.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Tema editado'
    });
});

module.exports = router;