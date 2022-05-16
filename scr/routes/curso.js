const express = require('express');

const router = express.Router();
const Curso = require('../models/curso');

router.get('/', async (req, res) =>{
    const cursos =  await Curso.find();
    res.json(cursos);
});

router.post('/create', async (req, res) =>{
    const newCurso = new Curso( req.body );
    await newCurso.save();
    
    res.json({
        message: 'Curso guardado'
    });
});

router.delete('/delete', async (req, res)=>{
    await Curso.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Curso borrado'
    });
});

router.post('/edit', async (req, res) =>{
    await Curso.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Curso editado'
    });
});

module.exports = router;