<template lang="">
    <div>
        <div class="imagem">
        <img src="../img/rep-finder.png" alt="imagem representativa">
    </div>

    <h1>Selecione os dados a serem alterados</h1>
    <div id="formulario">
        <form action="">
        <label for="nome">Nome:</label><br>
        <input type="text" name="nome" id="nome" placeholder="Digite o nome"><br><br>

        <label for="sobrenome">Sobrenome:</label><br>
        <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite o sobrenome"><br><br>

        <label for="idade">Idade:</label><br>
        <input type="number" name="idade" id="idade"><br><br>

        <label for="sexo">Sexo:</label><br><br>
        Masculino
        <input type="radio" name="sexo" id="sexo"><br>
        Feminino
        <input type="radio" name="sexo" id="sexo"><br><br>

        Marcas Representadas:<br><br>

            <label for="nike"></label>
            <img src="../img/nike.png" width="50px">
            <input type="checkbox" name="nike" id="nike"><br>

            <label for="adidas"></label>
            <img src="../img/adidas.png" width="50px">
            <input type="checkbox" name="adidas" id="adidas"><br>

            <label for="puma"></label>
            <img src="../img/puma.png" width="50px">
            <input type="checkbox" name="puma" id="puma"><br>

            <label for="mizuno"></label>
            <img src="../img/mizuno.png" width="50px">
            <input type="checkbox" name="mizuno" id="mizuno"><br>

            <label for="olympikus"></label>
            <img src="../img/olympikus.png" width="50px">
            <input type="checkbox" name="olympikus" id="olympikus"><br>

            <label for="other"></label>
            <img src="../img/incognite.png" width="50px">
            <input type="checkbox" name="other" id="other"><br><br>

        <button type="submit">OK</button>
        </form>
        <br>

        <router-link to="/" ><button>Voltar</button></router-link>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>