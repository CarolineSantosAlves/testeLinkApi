
function toXml({ id, title, value, person_name }) {
    return `<?xml version="1.0" encoding="ISO-8859-1"?>
        <pedido>
            <cliente>
                <nome>${person_name}</nome>
            </cliente>
            <transporte>
            <volume>
              <servico>Fedex</servico>
            </volume>
          </transporte>
            <itens>
                <item>
                    <codigo>${id}</codigo>
                    <descricao>${title}</descricao>
                    <qtde>1</qtde>
                    <un>un</un>
                    <vlr_unit>${value}</vlr_unit>
                    <vlr>1</vlr>
                </item>
            </itens>
        
        </pedido>
  `;
}
  
  module.exports = toXml;