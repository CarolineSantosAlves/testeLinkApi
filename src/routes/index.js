/**
 * Arquivo: src/routes/routes.js
 * Descrição: controla todos as rotas 
 * * Data: 03/07/2021
 * * Author: Caroline Santos
 */

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send({
        sucess: 'true',
        message: 'Seja Bem vindo a API'
    })
})

module.exports = router;