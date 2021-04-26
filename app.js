var Reader = require('./Reader');
var Processor = require('./Processor');
var Table = require('./Table');

var leitor = new Reader();

async function main(){
    var dados = await leitor.Read('./users.csv');
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    usuarios.rows.push(['Joao Joao', 'Formação PHP', 'PHP', '6']);
    console.log(usuarios.RowCount);
}   

main();