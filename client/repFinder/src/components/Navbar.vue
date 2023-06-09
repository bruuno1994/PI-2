<template>
    
        <header id="cabecalho">
        <div id="logo">
            <router-link to="/"><img src="../img/logo-projeto.png" alt="logo-projeto"></router-link>
        </div>
        <ul>     
            <li><router-link to=""> Quem Somos </router-link></li>
            <li><router-link to="/equipe"> Nossa Equipe </router-link></li>
            <li><router-link to="/login"> Login </router-link></li>
        </ul>
  </header>
    
</template>
<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    #cabecalho {
  border-bottom: 1px solid midnightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  list-style: none;
  background-color: #2E64FE;
}

#cabecalho ul {
  list-style: none;
  display: flex;
}

#cabecalho li a {
  font-size: 1.3em;
  text-decoration: none;
  padding: 10px;
  color: white;
  cursor: pointer;
}

#cabecalho li a:hover {
  font-size: 1.3em;
  text-decoration: none;
  padding: 10px;
  color: orange;
  cursor: pointer;
  border-bottom: 1px solid white;

}

#logo {
    position: absolute;
    top: 0;
    left: 0;
}

#logo img {
    width: 100px;
    height: 100px;
}
</style>