<template lang="">
    <div>
        <div class="imagem">
        <img src="../img/rep-finder.png" alt="imagem representativa">
    </div>

    <h1>Digite o nome a ser pesquisado</h1>
    
    <div id="formulario">
        <form @submit.prevent="getRep">
        <label for="nome">Nome:</label><br>
            <input type="text" name="nome" id="nome" v-model="nome"><br><br>

            <button type="submit">Buscar</button>            
        </form>
        <div>
        <p>
            {{ resultado }}
        </p>
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
            msg: '',
            nome: '',
            resultado: []
        }
    },
    methods: {
         async getRep() {
            try {
               const req = await fetch('http://localhost:3000/getRep/${this.nome}');
                const data = await req.json();
                this.resultado = data
                console.log(resultado)
            }
            catch (error) {
                this.msg = error.message;
            }
        }
      }
}
</script>
<style>
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
</style>