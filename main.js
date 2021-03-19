var passoatual =1
var steps = document.querySelectorAll(".progresso li")
var botaoanterior = document.querySelector("#botao1")
var botaoproximo = document.querySelector("#botao2")
botaoanterior.addEventListener("click",()=>{
    if (passoatual>0){
        steps[passoatual-1].classList.remove("active")
        passoatual--
    }
})
botaoproximo.addEventListener("click",()=>{
    if (passoatual<4){
        steps[passoatual].classList.add("active")
        passoatual++
    }
})