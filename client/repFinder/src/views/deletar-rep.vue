<template lang="">
    <div>
        <div class="imagem">
            <img src="../img/rep-finder.png" alt="imagem representativa">
        </div>

        <h1>Deletar Representante </h1>
        
        <div id="formulario">
            <form @submit.prevent="getAllRep">
                <button type="submit">Buscar todos</button>
            </form>
            
            <div class="showUser">
                <table >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Deletar</th>                       
                        </tr>
                    </thead>
                    <tbody v-if="resultados.length">
                        <tr v-for="resultado in resultados" :key="resultado.id">
                            <td>{{ resultado.nome }}</td>
                            <td><button id="btnDeletar" @click="deleteRep(resultado.nome)">Deletar</button></td>
                        </tr>
                    </tbody>
             </table>
            </div>
            <p>{{ message }}</p>         
            <br>
            <router-link to="/adm"><button>Voltar</button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
            nome: '',
            resultados: []
        };
    },
    methods: {
        getAllRep() {
            fetch('http://localhost:3000/getAllRep', {
                method: "GET",
            })
            .then((response) => {
                response.json().then((data) => {
                console.log(JSON.stringify(data));
                this.resultados = data
                });
            })
            .catch((err) => {
                console.error(err);
            });
        },  
        async deleteRep(nome){
            const req = await fetch(`http://localhost:3000/deleteRep/${nome}`, {
                method:"DELETE",
            })

            .then(async (res) => {
                this.message = await res.text();
                this.getAllRep();
            })
            .catch(async (err) =>{
                this.message = await err.text();
                console.log(error)
            })
        },
    }
}
</script>

<style>
.showUser {
    width: 50% ;
    background-color: rgba(69, 155, 252, 0.123);
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 15px 15px;
}

table, th,td {
    border: 2px solid #4444;
    border-collapse: collapse;
}
table {
    width: 100%;
}

.showUser #btnDeletar:hover {
    background-color:#ff3232e1;
    color: white;
    border-color: black;
}
</style>