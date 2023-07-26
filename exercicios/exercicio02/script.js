function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()

    var ano_pessoa = document.getElementById('txtano')
    var res = document.getElementById('resposta')

    if (ano_pessoa.value.length == 0 || ano_pessoa > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo_escolhido = document.getElementsByName('radsex') /* Pega elementos pelo nome radsex, que sao os radio de sexo Masculino ou feminino */
        var idade = ano_atual - Number(ano_pessoa.value) /* Calculo de idade da pessoa. OBS: usar .value e converter antes para numero pois o input devolve sempre em text */
        var gênero = ''
        var img = document.createElement('img') /* Criei um elemento img */
        img.setAttribute('id', 'foto') /* Dei um id="foto" para o meu elemento img  */

        /* os comandos é uma outra forma de se criar uma <img id='foto'> no HTML, mas através do JavaScript*/

        if (sexo_escolhido[0].checked) { /* Se o sexo marcado for o [0], ou seja, homem: */
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-crianca-m.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.jpg')
            }

        } else if (sexo_escolhido[1].checked) {  /* Se o sexo marcado for o [1], ou seja, mulher: */
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto-crianca-f.jpg')
            } else if (idade <= 21) {
                img.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            } else if (idade <50) {
                img.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
        }    

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) /* aparecer a imagem */
    }
}
