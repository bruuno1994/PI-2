const express = require("express")
const app = express()
const cors = require("cors")
const { pool } = require("./data/data")
app.use(express.json())
app.use(cors())
app.listen(3000, () => {
    console.log("Servidor está ativo na porta 3000!")
})

// cria o método de encerrar processo com o banco logo após a requisição
process.on('SIGINT', () => {
    pool.end();
    process.exit();
})

let register = null;

app.post("/registerRep", async (req, res) => {
    try {
        register = await pool.connect();
        const { nome, data_nasc, sexo, marcas } = req.body
        await register.query(`INSERT INTO representante
        (nome, data_nasc, sexo, marcas)
         VALUES ('${nome}', '${data_nasc}', '${sexo}', '${marcas}')`)
        res.status(200).send("Cadastro realizado com sucesso")
    } catch (error) {
        res.status(500).send("Não conectou ao servidor")
        console.log(error)
    } finally {
        register.release();
    } 
})

app.get('/getRep/:nome', async(req, res) => {
    try {
        const { nome } = req.params;
        register = await pool.connect();
        const data = await register.query(`SELECT nome, marcas FROM representante where nome = '${nome}' `);
        res.send(data.rows)
    } catch (error) {
        res.status(500).send('Erro na consulta')
    }
})

app.put("/updateRep", async (req, res) => {
    try {
        const { nome, marca_a, marca_b, marca_c, marca_d, marca_e } = req.body;
        pool.query (`UPDATE representante SET nome = '${nome}',marca_a = ${marca_a}, marca_b = ${marca_b}, marca_c = ${marca_c}, marca_d = ${marca_d}, marca_e = ${marca_e} WHERE nome = '${nome}'`)
        res.status(200).send("Usuário atualizado com sucesso")
    }catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");        
    }
});

app.delete("/deleteRep", async (req, res) => {
    try {
        const { nome } = req.body;
        client = await pool.connect();        
        pool.query (`DELETE FROM representante WHERE nome = '${nome}'`)
        res.status(200).send("Usuário deletado com sucesso")             
    }catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");        
    }
});