/**
 * Arquivo: controllers/oportunidade.controllers.js
 * Descrição: arquivo responsável pela lógica da api , vai se comunicar com a fonte de dados 
 * com o restante da aplicação. 
 * * Data: 03/07/2021
 * * Author: Caroline Santos
 */

const db = require('../config/database');
const { OpPedido } = require('../schema/oportunidade.schema');

const axios = require('axios');
const toXml = require('../../toxml');



exports.pedido =  async(req, res) => {
    const { data } = await axios(`https://api.pipedrive.com/v1/deals/?api_token=${process.env.KEY_PIPEDRIVE}`);

    
    for(let pedido of data.data){
        if(pedido.status == 'won'){
            let pedidoPipe = { id, title, value, person_name } = pedido;
            console.log(id, title, value, person_name)
            
            let pedidoXml = toXml(pedidoPipe);
            await axios.post(`https://bling.com.br/Api/v2/pedido/json/?apikey=${process.env.KEY_BLING}&xml=${pedidoXml}`);

            try {

               await function creteAndSavePedido (done){
                    let pedidoSave = new OpPedido({
                        id_pedido: pedidoPipe.id,
                        title: pedidoPipe.title,
                        value: pedidoPipe.value,
                        person_name: pedidoPipe.person_name});

                        pedidoSave.save(function (err, data){
                        if (err) return console.error(err);
                        done(null, data)
                    });
                    
                }
                
                
            } catch (error) {
                console.log('erro ao persistir dados', error)
            }
        }
    }
    


    return res.json(data)


}
