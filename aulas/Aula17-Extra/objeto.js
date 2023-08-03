let pessoa = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log(`Engordou ${p}kg`)
    this.peso += p
}}

pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}Kg`)