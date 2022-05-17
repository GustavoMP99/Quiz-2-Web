const express = require('express');

const router = express.Router();
const Curso = require('../models/curso');//get the model of the table

router.get('/', async (req, res) =>{//code to get all the cursos
    const cursos =  await Curso.find();
    res.json(cursos);
});

router.post('/create', async (req, res) =>{//code to create a curso
    const newCurso = new Curso( req.body );
    await newCurso.save();
    
    res.json({
        message: 'Curso guardado'
    });
});

router.delete('/delete', async (req, res)=>{//function to delete a curso with the id
    await Curso.findByIdAndRemove( req.params.id );

    res.json({
        message: 'Curso borrado'
    });
});

router.post('/edit', async (req, res) =>{//funtion to edit some curso with the id
    await Curso.findByIdAndUpdate( req.params.id, req.body );

    res.json({
        message: 'Curso editado'
    });
});

module.exports = router;