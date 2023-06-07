<template lang="">
    <div>
        <div>
            <div class="imagem">
                <img src="../img/rep-finder.png" alt="imagem representativa">
            </div>
        </div>

        <div id="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d954540.3682222087!2d-48.60683569002008!3d-20.84489445333746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x94b9bf1d68acc21d%3A0x37b8ee0abedeea39!2sRibeir%C3%A3o%20Preto%2C%20SP!3m2!1d-21.1694018!2d-47.8110855!4m5!1s0x94b0a9b35dc60831%3A0x68b8558a69681462!2sFranca%2C%20SP!3m2!1d-20.5394298!2d-47.401097899999996!4m5!1s0x94bbe6a81c8c2e0f%3A0x2da192d382c1dbf4!2sBebedouro%2C%20SP!3m2!1d-20.9318346!2d-48.494242799999995!5e0!3m2!1spt-BR!2sbr!4v1682293197182!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <br>

        <router-link to="/" ><button>Voltar</button></router-link>
    </div>
</template>

<script>
export default {
    
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