
//const database = 'NEW_DATABASE_NAME';
//const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
use("test");
//apagando a collection antes de inserir novos dados
db.cardapio.drop();


//CREATE TABLE => createCollection
db.createCollection("cardapio");

db.cardapio.insertMany([
    {nome:"Macarrão", preco:29.99, ingredientes:"macarrão, molho, queijo, carne"},
    {nome:"Strogonoff", preco:60.00, ingredientes:"carne, molho, arroz, batata-palha"},
    {nome:"Lasanha", preco:65.00, ingredientes:"massa de lasanha, carne moida, mussarela, presunto, molho"},
    {nome:"Prato do dia", preco:15.00, ingredientes:'arroz, feijão, bife, batata-frita, salada'}
])

//select * from test.cardapio;

//no mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection
db.cardapio.find();

//filtrando pelo nome
//select * from cardapio where nome="Lasanha"
db.cardapio.find({nome:"Lasanha"})

//para selecionar as colunas usamos a projeção
//select nome, preco from cardápio where nome="Lasanha"
db.cardapio.find({nome:"Lasanha"}, {nome:true, preco:true});
