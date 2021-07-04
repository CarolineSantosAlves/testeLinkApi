/**
 * Arquivo: src/routes/oportunidades.routes.js
 * Descrição: Arquivo responsável pelas rotas da api relacionado a classe 'Oportunidades'
 * Data: 03/07/2021
 * Autor: Caroline Santos
 */

const router = require('express-promise-router')();

const oportunidadeController = require('../controllers/oportunidade.controllers');


router.get('/pedidos', oportunidadeController.pedido);

module.exports = router;