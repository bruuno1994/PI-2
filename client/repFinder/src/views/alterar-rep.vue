<template lang="">
    <div>
        <div class="imagem">
        <img src="../img/rep-finder.png" alt="imagem representativa">
    </div>

    <h1>Selecione os dados a serem alterados</h1>
    <div id="formulario">
        <form @submit.prevent="updateRep">
          <label for="nome">Nome completo:</label><br>
          <input type="text" name="nome" id="nome" v-model="nome"><br><br>

          <label for="cidades">Cidades Atendidas:</label><br>
          <input type="text" name="cidades" id="cidades" v-model="cidades"><br><br>

          <label for="estado">Estado:</label><br>
          <input type="text" name="estado" id="estado" v-model="estado"><br><br>

          Marcas Representadas:<br>

          <input type="checkbox" name="marcaA" id="marcaA" value="A" v-model="marcas">
          <label for="marcaA"><h3>Marca A</h3></label><br>

          <input type="checkbox" name="marcaB" id="marcaB" value="B" v-model="marcas">
          <label for="marcaB"><h3>Marca B</h3></label><br>
          
          <input type="checkbox" name="marcaC" id="marcaC" value="C" v-model="marcas">
          <label for="marcaC"><h3>Marca C</h3></label><br>

          <input type="checkbox" name="marcaD" id="marcaD" value="D" v-model="marcas">
          <label for="marcaD"><h3>Marca D</h3></label><br>

          <input type="checkbox" name="marcaE" id="marcaE" value="E" v-model="marcas">
          <label for="marcaE"><h3>Marca E</h3></label><br><br>

          <button type="submit">Atualizar</button>

        </form>
        <p> {{ message }}</p>
        <br>

        <router-link to="/" ><button>Voltar</button></router-link>
    </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      nome: '',
      marcas: [],
      cidades: '',
      estado: '',
      message: ''
    }
  },
  methods: {
    updateRep(){
      const data = {
        nome: this.nome,
        cidades: this.cidades,
        estado: this.estado,
        marcas: this.marcas
      }
      fetch("http://localhost:3000/updateRep", {
        method:"PUT",
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
<style lang="">
    
</style>