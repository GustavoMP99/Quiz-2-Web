const express = require('express');

const router = express.Router();
const Profesor = require('../models/profesor');//get the model of the table

router.get('/', async (req, res) =>{//code to get all professors
    const temas =  await Profesor.find();
    res.json(temas);
});

router.post('/create', async (req, res) =>{//code to create a profesor
    const newProfesor = new Profesor( req.body );
    await newProfesor.save();
    
    res.json({
        message: 'Profesor guardado'
    });
});

router.delete('/delete', async (req, res)=>{//function to delete a profesor with an id
    await Profesor.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Profesor borrado'
    });
});

router.post('/edit', async (req, res) =>{//function to edit a profesor with the id
    await Profesor.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Profesor editado'
    });
});

module.exports = router;