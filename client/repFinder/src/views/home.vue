<template>  
  <div class="grid-container">

    <div class="item1">
      <div class="imagem">
        <img src="../img/rep-finder.png" alt="Imagem do Sistema">
      </div>
    </div>
    
    <div class="item2">
      <div id="noticias">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">
            <div id="imgs"><img src="../img/docs-landing-get-started-hero.png" alt="Imagem do Sistema">
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Visão</h5>
            <p class="card-text">Fornecer uma ferramenta que visa facilitar a gestão de representantes comerciais por meio de uma solução inovadora e eficiente.</p>
          </div>
        </div>
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
          <div class="card-header">
            <div id="imgs"><img src="../img/Por-que-minha-empresa-nao-aparece-no-Google-maps.jpg" alt="Imagem do Sistema">
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Objetivo</h5>
            <p class="card-text">tornar a gestão de representantes comerciais mais eficiente e produtiva, proporcionando uma melhor distribuição de atendimento e maximizando a área atendida pela empresa.</p>
          </div>
        </div>

        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
          <div class="card-header">
            <div id="imgs"><img src="../img/unnamed.png" alt="Imagem do Sistema">
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Metas a serem alcançadas</h5>
            <p class="card-text">Nossa principal meta é por meio de um mapa interativo mostras as ares em que sua empresa tem o melhor desempenho e onde é preciso atenção para mmaximizar a cobertura de atendimento.</p>
          </div>
        </div>    
        <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header"><h5>Curiosidades</h5>
          </div>
          <div class="card-body">
            <p class="card-text">Uma curiosidade interessante é que a REP FINDER é uma empresa que utiliza tecnologia de ponta para oferecer uma solução inovadora e eficiente para a gestão de representantes comerciais</p>
          </div>
        </div>

        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
          <div class="card-header"><h5>Curiosidades</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"><a href=" https://blog.geofusion.com.br/otimizar-gestao-representantes -comerciais-mapa-de-atendimento/">Veja uma matéria que mostra a inportancia da boa gestão de equipes</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="item3">
      <div id="caixadetexto">
        <p>Bem-vindo ao <strong>Rep Finder</strong>: O Mapa Inteligente para Representantes Comerciais!</p><br>
        <p>Você já se perguntou como seria útil ter um mapa interativo que mostrasse exatamente onde nossos representantes comerciais atendem? Se sim, você está no lugar certo! O <strong>Rep Finder</strong> é uma ferramenta inovadora que ajuda a organizar a tomada de decisão da sua empresa, otimizar a distribuição de representantes, evitar conflitos de atendimento e identificar novas áreas de oportunidade.</p><br>
                
        <p>Com o <strong>Rep Finder</strong>, você terá acesso a um mapa intuitivo que exibe todas as cidades que nossos representantes atendem, além das respectivas marcas que eles representam em cada cidade. Isso permite que você visualize claramente as áreas de atuação de cada representante, possibilitando uma melhor gestão e coordenação da equipe.</p><br>
                
        <p>Com base nas informações fornecidas pelo <strong>Rep Finder</strong>, sua empresa poderá tomar decisões estratégicas mais embasadas. Você poderá identificar áreas onde há um alto volume de atendimento, indicando a necessidade de redistribuir recursos para evitar conflitos e sobrecarga de trabalho. Além disso, poderá identificar áreas pouco atendidas, oferecendo oportunidades para recrutar novos representantes e maximizar a área de atuação da sua empresa.</p><br>
                
        <p>Nossa ferramenta foi desenvolvida pensando na praticidade e eficiência para auxiliar sua empresa na gestão dos representantes comerciais. Com recursos interativos e informações detalhadas, o <strong>Rep Finder</strong> é uma solução poderosa para otimizar o fluxo de vendas, melhorar a distribuição territorial e aumentar a eficácia do trabalho de sua equipe.</p><br>
                
        <p>Não perca tempo! Experimente o <strong>Rep Finder</strong> e tenha uma visão clara e estratégica do território de atuação de seus representantes comerciais. Maximize suas oportunidades de negócio e alcance novos patamares de sucesso! Faça parte dessa revolução na gestão de representantes comerciais com o <strong>Rep Finder</strong>.</p><br>
      </div>
    </div>    
  </div>
  <Footer></Footer>
  
  
</template>
<script>
import Footer from '../components/Footer.vue';
  export default {
    name: "Home",
    components: { Footer }
}
</script>
<style scoped>

.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }

.grid-container {
  display: grid;
  grid-template-areas:
    'header header header'
    'menu main main '
    'menu main main ';
  gap: 10px;
  padding: 10px;
}

.grid-container > div {
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

#noticias {
  padding: 10px ;  
}

#caixadetexto { 
  padding: 10px;
  font-size: 1.5rem;
  text-align: center;
  max-width: 80%;
}

.card-text{
  font-size: 12px;
}

#imgs {
  display: flex;
}

#imgs img {
  width: 270px;
  height: 100px;
  object-fit: fill;
}

.imagem {
  display: flex;
  align-items: center;
  justify-content: center;
}

.imagem img {
  width: 250px;
}

</style>