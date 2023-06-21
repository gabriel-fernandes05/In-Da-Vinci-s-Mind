var protaA = document.getElementById("prota1");
var protaB = document.getElementById("prota2");
var body = document.body;
var francis = document.getElementById("alo");
var manoel = document.getElementById("falaFraManoel")
var continuar = document.getElementById("continuar")
var newBackground = "./img/falaFrancis.png"
var newBkground = "./img/bossFinalMapa.png"

protaA.addEventListener("click", function(){
    body.style.backgroundImage = "url('" + newBackground + "')";
    protaA.style.display = "none"
    protaB.style.display = "none"
    francis.style.display = "block"
    manoel.style.display = "block"
    continuar.addEventListener("click", function(){
        body.style.backgroundImage = "url('" + newBkground + "')";
        francis.style.display = "none"
        manoel.style.display = "none"
    })
})

protaB.addEventListener("click", function(){
    body.style.backgroundImage = "url('" + newBackground + "')";
    protaA.style.display = "none"
    protaB.style.display = "none"
    francis.style.display = "block"
    manoel.style.display = "block"
    continuar.addEventListener("click", function(){
        body.style.backgroundImage = "url('" + newBkground + "')";
        francis.style.display = "none"
        manoel.style.display = "none"
    })
})