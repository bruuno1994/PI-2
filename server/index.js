const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./data/data");

app.use(cors());
app.use(express.json());
app.listen(6000, () => {
    console.log("Servidor ativo na porta 6000");
});

// Encerrar as conexões do connection ao final do processo
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});

app.post('/api/registerUser', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        await connection.query(
            `INSERT INTO Users (id, nome, email, senha) VALUES (uuid_generate_v4(), ?, ?, ?)`,
            [nome, email, senha]
        );
        res.send("Cadastro realizado com sucesso!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao cadastrar usuário");
    }
});

app.get('/getRep', async (req, res) => {
    try {
        const data = await connection.query(`SELECT * FROM representante`, function(error, result, fields){
            if(error) throw error;

            console.log(result);
        });
        res.send(data.rows);
        console.log(data.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro na consulta');
    }
});

app.post("/api/updateUser", async (req, res) => {
    try {
        const { email, nome, senha } = req.body;
        await connection.query(
            `UPDATE Users SET nome = ?, senha = ? WHERE email = ?`,
            [nome, senha, email]
        );
        res.status(200).send("Usuário atualizado com sucesso");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
});

app.delete("/api/deleteUser", async (req, res) => {
    try {
        const { email, senha } = req.body;
        await connection.query(
            `DELETE FROM Users WHERE email = ?`,
            [email]
        );
        res.status(200).send("Usuário deletado com sucesso");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
});
