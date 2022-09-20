var slider = document.getElementById('slider')
var button = document.getElementById('button')

var valor = document.getElementById('valor')
var password = document.getElementById('password')
var containerpass = document.getElementById('container-pass')

var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$"
var novasenha = ""

valor.innerHTML = slider.value

slider.oninput = function(){
    valor.innerHTML = this.value
}

function generatepass(){
    var pass = ""
    for(var contador = 0, num = charset.length; contador < slider.value; contador++){
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
