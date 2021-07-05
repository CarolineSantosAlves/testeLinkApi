/**
 * Arquivo: database.js
 * Descrição: Arquivo responsável pelas 'connectionStrings da Aplicação: MongoDB'. Comunicação entre a aplicaçao no node com o mongo
 * Data: 03/07/2021
 * Autor: Caroline Santos
 */

const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true,
    useCreateIndex: true 
  });

const db = mongoose.connection;
db.on('error', err => {
    console.error(err)
});
db.once('open', function(){
    console.log('sucesso')
})

module.exports = mongoose;