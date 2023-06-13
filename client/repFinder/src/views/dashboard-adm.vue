<template>
    <div>
        <div>
            <div class="imagem">
                <img src="../img/rep-finder.png" alt="imagem representativa">
            </div>
        </div>

        <div id="dashboard">
            <router-link to="/cadastro"><button> Cadastrar Representantes </button></router-link>    
            <router-link to="/deletar" ><button> Deletar Representantes </button></router-link> 
            <router-link to="/busca" ><button> Buscar Representantes </button></router-link>
            <router-link to="/"><button> Voltar </button></router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style >

.imagem {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}
  
.imagem img {
    width: 250px;
}

button {
    border: 2px solid #2E64FE;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    background-color: lightblue;
  }

button:hover {
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

</style>