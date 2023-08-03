let num = document.getElementById('txtnum') /* numero recebido pelo input */
let lista = document.getElementById('flista') /* lista que atualiza ao adc mais numeros */
let res = document.getElementById('res') /* resposta que aparecerá após clicar em "finalizar" */
let valores = [] /*  vetor que irá receber todos os numeros digitados no input*/

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(numero, lista2) {
    if (lista2.indexOf(Number(numero)) != -1){ /* indexOf: retorna o indice do valor se encontra-lo no array. Caso não encontre, retorna o valor "-1" */
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){ /*  se o numero digitado estiver entre 1 e 100 E se ele já não foi adicionado na lista (parâmetros: numero, vetor com os valores*/
        valores.push(Number(num.value))
        let item = document.createElement('option') /* criei um novo elemento para <option> */
        item.text = `Valor ${num.value} adicionado.` /* elemento recebe o texto */
        lista.appendChild(item) /* a variavel lista (que atualiza ao adc mais numeros) recebe como "filho" o elemento criado acima*/
        res.innerHTML = '' /* ao adicionar um novo valor, o res será limpo para que quando apertar em "finalizar" novamente, gere o texto atualizado com o novo valor adicionado */
    } else {
        window.alert("Valor inválido ou já encontrado na lista. Digite novamente.")
    }
    num.value = '' /* deixa o input "limpo" após digitar um numero e adiciona-lo (ou não) */
    num.focus() /*  deixa selecionada a caixa de input que adc o valor */
}

function finalizar(){
    if (valores.length == 0){
        window.alert("[ERRO] Adicione valores antes de finalizar.")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){

            soma += valores[pos]

            if (valores[pos] < menor){
                menor = valores[pos]
            }

            if (valores[pos] > maior){
                maior = valores[pos]
            }
        }

        media = soma/tot

        res.innerHTML = `` /* zerar o valor */
        res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior número cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos números cadastrados foi de ${media}.</p>`
    }    
}