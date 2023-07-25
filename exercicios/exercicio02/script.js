function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()

    var ano_pessoa = document.getElementById('txtano')
    var res = document.getElementById('resposta')

    if (ano_pessoa.value.length == 0 || ano_pessoa > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo_escolhido = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_pessoa.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }
}