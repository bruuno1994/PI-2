const mysql = require('mysql');

const connection = mysql.createConnection({
    user:'root',
    password: '95379542',
    port: '3306',
    database: 'banco_representantes',
    host: 'localhost'
});

connection.connect((error) => {
    if (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados!');
    }
  });

module.exports = {
    connection
}