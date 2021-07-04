/**
 * Arquivo: server.js
 * Descrição: arquivo  responsável por toda a confiiguração e execução da aplicação
 * Data: 03/07/2021
 * Author: Caroline Santos
 */

const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação rodando na porta ', port);
})