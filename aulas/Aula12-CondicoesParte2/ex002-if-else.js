var agora = new Date()
var hora = agora.getHours() /* Pode pegar o ano, dia, minuto... */
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}