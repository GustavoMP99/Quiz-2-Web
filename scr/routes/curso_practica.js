const express = require('express');

const router = express.Router();
const Curso_Practica = require('../models/curso_practica');

router.get('/', async (req, res) =>{
    const cursos_practicas =  await Curso_Practica.find();
    res.json(cursos_practicas);
});

router.post('/create', async (req, res) =>{
    const newCurso_Practica = new Curso_Practica( req.body );
    await newCurso_Practica.save();
    
    res.json({
        message: 'Curso practica guardado'
    });
});

router.delete('/delete', async (req, res)=>{
    await Curso_Practica.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Curso practica borrado'
    });
});

router.post('/edit', async (req, res) =>{
    await Curso_Practica.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Curso practica editado'
    });
});

module.exports = router;