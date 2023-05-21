var setaEsquerda = window.document.getElementById("setaesquerda")
var leandro = window.document.getElementById("leandro")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("setadireita")

function RolarParaDireita() {
    leandro.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    leandro.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top: 55%"
    setaEsquerda.style = "display:none"
}