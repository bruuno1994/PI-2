<template>
  <div>
    <div class="imagem">
      <img src="../img/rep-finder.png" alt="imagem representativa">
    </div>

    <div id="formulario">
      <form @submit.prevent="login">
        <img src="../img/login-icon.png" alt=""><br>
        <label for="login">Login</label><br>
        <input type="text" v-model="username" ><br>

        <label for="senha">Senha</label><br>
        <input type="password" v-model="password"><br>
        <div class="btn">
          <button type="submit">LOGIN</button>
        </div>
        
      </form>
    </div>
  </div>
</template>
<script>
      
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin123') {
        this.$router.push('/adm');
      } else {  
        this.$router.push('/repr');
      }
    }
  }
    
}
</script>
<style scoped>
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 1px solid #0061a6;
    border-radius: 15px;
    width: 320px;
    height: 490px;
    position: relative;    
    background: lightgray;
    color:#0061a6;
    box-shadow: 7px 7px 4px gray;
}

#formulario input {
    background-color: lightblue;
    border: 2px solid #0061a6;
    margin: 5px 0 20px 0;
}

#formulario img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn {
  width: 100%;
  margin-top: 20px;
}

button {
    padding: 5px;
    border-radius: 5px;
    color:#0061a6;
    background-color: lightblue;
}

button:hover {
    padding: 5px;
    border-radius: 5px;
    color:lightblue;
    background-color: #0061a6;
}
</style>