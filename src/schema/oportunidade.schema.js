/**
 * Arquivo: schema/oportunidade.schema.js
 * Descrição: Arquivo responsável pelo schema de oportunidade
 * Data: 03/07/2021
 * Autor: Caroline Santos
 */

 const mongoose = require('mongoose');


 const oportunidadePedido = new mongoose.Schema(
   {
   id_pedido: Number, // String is shorthand for {type: String}
   title: String,
   value: Number,
   person_name: String
   
 },
 { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

 const OpPedido = mongoose.model('OpPedido', oportunidadePedido);

module.exports = OpPedido;
