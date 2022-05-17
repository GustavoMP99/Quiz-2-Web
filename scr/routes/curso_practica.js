const express = require('express');

const router = express.Router();
const Curso_Practica = require('../models/curso_practica');//get the model of the table

router.get('/', async (req, res) =>{//code to get all the cursos_practica
    const cursos_practicas =  await Curso_Practica.find();
    res.json(cursos_practicas);
});

router.post('/create', async (req, res) =>{//code to create a curso_practica
    const newCurso_Practica = new Curso_Practica( req.body );
    await newCurso_Practica.save();
    
    res.json({
        message: 'Curso practica guardado'
    });
});

router.delete('/delete', async (req, res)=>{//function to delete a curso_practica with the id
    await Curso_Practica.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Curso practica borrado'
    });
});

router.post('/edit', async (req, res) =>{//funtion to edit some curso_practica with the id
    await Curso_Practica.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Curso practica editado'
    });
});

module.exports = router;