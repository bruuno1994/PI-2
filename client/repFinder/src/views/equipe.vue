<template>
  <div>    
    <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
    </label>

    <h1>Nossa Equipe</h1>

    <div id="nossa-equipe">

        <div class="card" style="width: 15rem;">
            <img src="../img/bruno.jpg" class="card-img-top" alt="Bruno">
            <div class="card-body">
            <h5 class="card-title">Bruno Vinicius</h5>
            <p class="card-text">28 Years Old</p>
            <p class="card-text">Front-End Developer</p>
            <a href="https://www.linkedin.com/in/bruno-vinicius-de-laia-silva/"><img class="redes-contato" src="../img/linkedin.png" alt="LinkedIn-Bruno"></a>
            <a href="https://github.com/bruuno1994"><img class="redes-contato" src="../img/github.png" alt="Bruno"></a>
            </div>
        </div>

        <div class="card" style="width: 15.5rem;">
            <img src="../img/gabriel.jpg" class="card-img-top" alt="Gabriel">
            <div class="card-body">
            <h5 class="card-title">Gabriel Araújo</h5>
            <p class="card-text">28 Years Old</p>
            <p class="card-text">Product Owner</p>
            <a href="https://www.linkedin.com/in/gabriel-araujo-a7521166/"><img class="redes-contato" src="../img/linkedin.png"></a>
            <a href="https://github.com/GabrielAraujo989"><img class="redes-contato" src="../img/github.png"></a>
            </div>
        </div>

        <div class="card" style="width: 15rem;">
            <img src="../img/felipe-couto.jpg" class="card-img-top" alt="Felipe Couto">
            <div class="card-body">
            <h5 class="card-title">Felipe Couto</h5>
            <p class="card-text">24 Years Old</p>
            <p class="card-text">Back-End Developer</p>
            <a href="https://www.linkedin.com/in/felipe-couto-1776ba229/"><img class="redes-contato" src="../img/linkedin.png"></a>
            <a href="https://github.com/FelipeBCouto"><img class="redes-contato" src="../img/github.png"></a>
            </div>
        </div>

        <div class="card" style="width: 15rem;">
            <img src="../img/marlon.jpg" class="card-img-top" alt="Marlon">
            <div class="card-body">
            <h5 class="card-title">Marlon Vinicius</h5>
            <p class="card-text">29 Years Old</p>
            <p class="card-text">Back-End Developer</p>
            <a href="https://www.linkedin.com/in/marlon-vinicius-souza-30417a195/"><img class="redes-contato" src="../img/linkedin.png"></a>
            <a href="https://github.com/marlon-vinicius"><img class="redes-contato" src="../img/github.png"></a>
            </div>
        </div>

        <div class="card" style="width: 15rem;">
            <img src="../img/felipe-tardivo.png" class="card-img-top" alt="Felipe Tardivo">
            <div class="card-body">
            <h5 class="card-title">Felipe Tardivo</h5>
            <p class="card-text">38 Years Old</p>
            <p class="card-text">Scrum Master</p>
            <a href="https://www.linkedin.com/in/felipe-carvalho-tardivo-35b90147/"><img class="redes-contato" src="../img/linkedin.png"></a>
            <a href="https://github.com/FelipeTardivo"><img class="redes-contato" src="../img/github.png"></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: "Equipe"
}
</script>

<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h1 {
    text-align: center;
    margin-top: 20px;
}

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

#nossa-equipe {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.redes-contato {
    width: 50px;
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