<template lang="">
  <div>
      <div class="imagem">
      <img src="../img/rep-finder.png" alt="imagem representativa">
  </div>

  <h1>Digite o nome a ser pesquisado:</h1>
  
  <div id="formulario">
      <form @submit.prevent="getRep">
      <label for="nome">Nome:</label><br>
          <input type="text" name="nome" id="nome" v-model="nome"><br><br>

          <button type="submit">Buscar</button> 
               
      </form><br>

      <form @submit.prevent="getAllRep">
                <button type="submit">Buscar todos</button>
            </form>

       <div class="showUser">
          <table >
              <thead>
                  <tr>
                      <th>Nome</th>
                      <th>Data de Nascimento</th>
                      <th>Marcas</th>
                      <th>Cidades</th>
                      <th>Estado</th>                   
                  </tr>
              </thead>
              <tbody v-if="resultados.length">
                  <tr v-for="resultado in resultados" :key="resultado.id">
                      <td>{{ resultado.nome }}</td>
                      <td>{{ resultado.data_nasc }}</td>
                      <td>{{ resultado.marcas }}</td>
                      <td>{{ resultado.cidades }}</td>
                      <td>{{ resultado.estado }}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      
      <br>
      <router-link to="/adm"><button>Voltar</button></router-link>
  </div>
  </div>
</template>
<script>
export default {
data() {
  return {
    nome: '',
    resultados: []
  };
},
methods: {
  getRep() {
    fetch('http://localhost:3000/getRep/'+ this.nome, {
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
},
};
</script>
<style>

th, tr, td {
  padding: 5px;;
}

.imagem {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.imagem img {
  width: 250px;
}

#formulario {
  border: 3px solid #2E64FE;
  border-radius: 10px;
  display: table;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 500px;
  padding: 10px;
  margin: 0 auto;
}

#formulario input[type=text], input[type=number] {
  border: 2px solid #2E64FE;
  border-radius: 5px;
  background-color: lightblue;
  padding: 2px;
}

#formulario button, button {
  border: 2px solid #2E64FE;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: lightblue;
}

#formulario button:hover, button:hover {
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: #2E64FE;
  color: white;
}

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
</style>