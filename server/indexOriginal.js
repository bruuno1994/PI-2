const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./data/data");
app.use(cors());
app.use(express.json());
app.listen(6000, () => {
    console.log("Server ativo na porta 6000");
})

// Encerrar as conexões do connection de conexões ao final do processo
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});

// let register = null;

app.post('/api/registerUser', async (req, res) => {
    try {
        // register = await connection.connect();
        const { nome, email, senha } = req.body;
        await register.query(`INSERT INTO Users (id, nome, email, senha) VALUES (uuid_generate_v4(), '${nome}', '${email}', '${senha}')`)
        res.send("Cadastrado realizado com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao cadastrar usuário");
    } finally {
        register.release()
    }
});

app.get('/getRep', async(req, res) => {
    try {
        const data = []
        // register = await connection.connect();
        data = await connection.query(`SELECT * FROM representante`);
        console.log(data.rows);
        res.send(data.rows)
    } catch (error) {
        res.status(500).send('Erro na consulta')
    }
})

app.post("/api/updateUser", async (req, res) => {
    try {
        const { email, nome, senha } = req.body;
        connection.query (`UPDATE Users SET nome = '${nome}',senha = '${senha}' WHERE email = '${email}'`)
        res.status(200).send("Usuário atualizado com sucesso")
    }catch (error) {
        console.error(error);
        res.status(500).send(`Erro de conexão com o servidor`);        
    }
});

app.delete("/api/deleteUser", async (req, res) => {
    try {
        const { email, senha } = req.body;
        connection.query (`DELETE FROM Users WHERE email = '${email}'`)
        res.status(200).send("Usuário deletado com sucesso")
    }catch (error) {
        console.error(error);
        res.status(500).send(`Erro de conexão com o servidor`);        
    }
});