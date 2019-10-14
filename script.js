console.log("conectado!")


var h1 = document.querySelector("h1");
var nome = document.getElementById("nome");


nome.addEventListener("mouseover", function(){
    this.style.color = "red";
})

nome.addEventListener("mouseout", function(){
    this.style.color = "black";
})


