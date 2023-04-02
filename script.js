
var inicio = document.getElementById("txtn")
var passo = document.getElementById("txtp")
var fim = document.getElementById("txtf")
var res = document.getElementById("res")

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
alert("[ERRO] insira os dados")
    } else {
        res.innerHTML = "contando.."
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f ; c += p) {
            res.innerHTML += `${c}`
        }
    }
    
}
