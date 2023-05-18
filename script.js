function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','./img/bebe homem.jpg')
                document.body.style.background = '#7465db'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','./img/jovem homem.jpg')
                document.body.style.background = '#5d6861'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','./img/adulto homem.jpg')
                document.body.style.background = '#d46494'
            } else {
                //Idoso
                img.setAttribute('src','./img/idoso homem.jpg')
                document.body.style.background = '#721212'
            }
            
        } else {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','./img/bebe mulher.jpg')
                document.body.style.background = '#e23838'
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','./img/jovem mulher.jpg')
                document.body.style.background = '#84d4a1'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','./img/adulta mulher.jpg')
                document.body.style.background = '#84acd4'
            } else {
                //Idoso
                img.setAttribute('src','./img/idosa mulher.jpg')
                document.body.style.background = '#e25a5a'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }   
}