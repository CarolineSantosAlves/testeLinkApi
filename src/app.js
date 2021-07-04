/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda comunicação entre server no node e comunição
 * com o restante da aplicação. 
 * * Data: 03/07/2021
 * * Author: Caroline Santos
 */

const express = require('express');
const app = express();

// ==> Rotas da API
const index = require('./routes/index'); // vai chamar o arquivo index que controla todas as rotas
const pedidoRoute = require('./routes/oportunidades.routes');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(index);
app.use('/', pedidoRoute); // localhost:3000/api/{rota}
module.exports = app;