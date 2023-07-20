function carregar() {
    var frase = window.document.getElementById('msgm') /* variavel da div de id msgm  */
    var img = window.document.getElementById('imagem') /* variavel da div que contem a imagem */
    var titulo_hora = window.document.getElementById('titulo') /* variavel para armazenar o titulo, que mudará conforme o horario */

    var agora = new Date()
    var horario = agora.getHours()

    frase.innerHTML = `Agora são ${horario} horas.`
    
    if (horario >= 5 && horario <=11) {
        titulo_hora.innerHTML = `Bom dia!` /* h1 */
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#B46D40' /* div id imagem */
    } else if (horario >= 12 && horario <=18) {
        titulo_hora.innerHTML = `Boa tarde!`
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#321604'
    } else {
        titulo_hora.innerHTML = "Boa noite!"
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#010B0A'
    }
}