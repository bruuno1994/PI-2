<template lang="">
    <div>
        <div class="imagem">
        <img src="../img/rep-finder.png" alt="imagem representativa">
    </div>

    <h1>Digite os dados do Representante</h1>

    <div id="formulario">
        <form @submit.prevent="registerRep">
          <label for="nome">Nome completo:</label><br>
          <input type="text" name="nome" id="nome" v-model="nome"><br><br>

          <label for="idade">Data de Nascimento (DD/MM/AAAA):</label><br>
          <input type="text" name="idade" id="idade" v-model="data_nasc"><br><br>

          <label for="sexo">Sexo (M/F):</label><br>
          <input type="text" name="sexo" id="sexo" v-model="sexo"><br><br>

          <label for="cidades">Cidades Atendidas:</label><br>
          <input type="text" name="cidades" id="cidades" v-model="cidades"><br><br>

          <label for="estado">Estado:</label><br>
          <input type="text" name="estado" id="estado" v-model="estado"><br><br>

          <h3>Marcas Representadas:</h3><br>

          <input type="checkbox" name="marcaA" id="marcaA" value="A" v-model="marcas">
          <label for="marcaA"><h3 class="marca-texto">Marca A</h3></label><br>

          <input type="checkbox" name="marcaB" id="marcaB" value="B" v-model="marcas">
          <label for="marcaB"><h3 class="marca-texto">Marca B</h3></label><br>
          
          <input type="checkbox" name="marcaC" id="marcaC" value="C" v-model="marcas">
          <label for="marcaC"><h3 class="marca-texto">Marca C</h3></label><br>

          <input type="checkbox" name="cidadeD" id="cidadeD" value="D" v-model="marcas">
          <label for="cidadeD"><h3 class="marca-texto">Marca D</h3></label><br>

          <input type="checkbox" name="cidadeE" id="cidadeE" value="E" v-model="marcas">
          <label for="cidadeE"><h3 class="marca-texto">Marca E</h3></label><br>

          <button type="submit">Cadastrar Representante</button><br>

        </form>
        <p> {{ message }}</p>
        <br>

        <router-link to="/adm"><button>Voltar</button></router-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      data_nasc: "",
      sexo: "",
      marcas: [],
      cidades: "",
      estado: "",
      message: ""
    }
  },
  methods: {
    registerRep(){
      const data = {
        nome: this.nome,
        data_nasc: this.data_nasc,
        sexo: this.sexo,
        marcas: this.marcas,
        cidades: this.cidades,
        estado: this.estado,
      }
      fetch("http://localhost:3000/registerRep", {
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })

      .then(async (res) => {
        this.message = await res.text();
      })
      .catch(async (err) =>{
        this.message = await err.text();
      })
    }
  }
}
</script>
<style >

h1 {
  text-align: center;
}

h2 {
  color:#f6782c;
  font-size: 40px;
  border: 3px solid #2E64FE;
  border-radius: 10px;
  position: absolute;
  padding: 10px;
  text-shadow: 3px 2px 5px black;
  box-shadow: 5px 5px 4px gray;
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

  #dashboard {
    border: 3px solid #f6782c;
    box-shadow: 4px 4px 3px gray;
    border-radius: 10px;
    width: 300px;
    height: 300px;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  #mapa {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 10px;
  }
  
  .marca-texto {
      font-size: 1.5em;
      margin-left: 10px;
    }
</style>