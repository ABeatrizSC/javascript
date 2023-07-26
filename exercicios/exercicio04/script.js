function tabuada() {
    let n = document.getElementById('txtnum')
    let resposta = document.getElementById('res')

    if (n.value.length == 0){
        window.alert("Por favor, digite um número.")
    } else {
        let numero = Number(n.value)
        let tabuada = ''
    
        for(var i = 1; i <=10; i++){
            tabuada += `${numero} x ${i} = ${numero*i}<br>`
        }
    
        resposta.innerHTML = tabuada
    }
}