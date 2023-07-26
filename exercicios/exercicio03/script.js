function contar (){
    let i= document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        window.alert("[ERRO] Faltam dados a serem preenchidos!")
    } else {
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(i.value)
        var final = Number(f.value)
        var passo = Number(p.value)

        if (passo <= 0) {
            window.alert("PASSO inválido! Considerando PASSO 1")
            passo = 1
        }
        
        if (inicio < final) { /* contar de forma crescente */
            for (let cont = inicio; cont <= final; cont += passo) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else { /* contagem regressiva */
            for (let cont = inicio; cont >= final; cont -= passo) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}