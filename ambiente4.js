function parimpar(n) {
    if (n%2==0) {
        return 'par'
    }else {
        return 'impar'
    }
}
console.log(parimpar(5))

function soma(n1=0 , n2=0 ) {
    return n1+n2
}

console.log(soma(9))

let v = function(x) {
    return x*2
}
console.log(v (5))

function fator(n) {
 if (n==1 ) {
    return 1

 }else {
    return n * fator(n-1) 
 }
}
console.log(fator(3))