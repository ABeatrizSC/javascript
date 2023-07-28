let valores = [5, 3, 4, 9]

console.log(`O vetor tem ${valores.length} posições`)
console.log(`Vetor em ordem crescente ${valores.sort()}`)

for (let i = 0; i<=valores.length;i++){
    console.log(valores[i])
}

for(let pos in valores){
    console.log(valores[pos])
}