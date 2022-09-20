const slider = document.getElementById('slider')
const button = document.getElementById('button')

const valor = document.getElementById('valor')
const password = document.getElementById('password')
const containerpass = document.getElementById('container-pass')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$"
let novasenha = ""

valor.innerHTML = slider.value

slider.oninput = function(){
    valor.innerHTML = this.value
}

function generatepass(){
    var pass = ""
    for(let contador = 0, num = charset.length; contador < slider.value; contador++){
        pass += charset.charAt(Math.floor(Math.random() * num))
    }

    containerpass.classList.remove('hide')
    password.innerHTML = pass
    novasenha = pass
}

function copypass(){
    window.alert('Senha Copiada com Sucesso')
    navigator.clipboard.writeText(novasenha);
}
