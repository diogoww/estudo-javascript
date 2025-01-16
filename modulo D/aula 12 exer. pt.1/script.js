function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        //bom dia boy
        img.src = 'img/manha.jpg'
        document.body.style.background = '#dfc79a'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde boy
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#94bb93'
    } else {
        //boa noite nerd
        img.src = 'img/noite.jpg'
        document.body.style.background = '#0a0a61'
    }
}
