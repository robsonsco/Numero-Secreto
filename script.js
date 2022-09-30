var numeroSecreto = parseInt(Math.random()*1000);
var tentativas = 10;
var historico = [];
var flamengo = new Audio ('audio/Flamengo.mp3');

var elementoTentativas = document.getElementById("tentativas");
elementoTentativas.innerHTML = "Você possuí " + tentativas + " tentativas.";

var elementoHistorico = document.getElementById("historico");

document.addEventListener("keypress", function(e) {
  if(e.key == "Enter") {
    Chutar();
  }  
});

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    var chuteNovo = parseInt(document.getElementById("valor").value);

    if (tentativas == 0){

        elementoResultado.innerHTML = "Você não possuí tentativas restantes." + "<br>" + "O número secreto era: " + numeroSecreto +"!"

    } else {

        if (chute == numeroSecreto){

            elementoResultado.innerHTML = "Você acertou!" + "<br>" + "O número era: " + numeroSecreto +"!";
            flamengo.play();
    
            } else if(chute>1000 || chute<1){
    
                elementoResultado.innerHTML = "Por favor, digite um número de 1 a 1000.";
    
            } 
            
            else if(!chute) {

                elementoResultado.innerHTML = "Por favor, digite um número de 1 a 1000.";

            }
        
        else {

            if (tentativas - 1 === 0){
                tentativas = tentativas - 1
                elementoTentativas.innerHTML = "Você possuí " + tentativas + " tentativas."
                elementoResultado.innerHTML = "Acabou o número de tentativas." + "<br>" + "O número secreto era: " + numeroSecreto +"!"
                return
            }
    
            if (chute<numeroSecreto){
                tentativas = tentativas - 1
                elementoTentativas.innerHTML = "Você possuí " + tentativas + " tentativas."
                elementoResultado.innerHTML = "O número secreto é maior." 
            }
    
            if (chute>numeroSecreto){
                tentativas = tentativas - 1
                elementoTentativas.innerHTML = "Você possuí " + tentativas + " tentativas."
                elementoResultado.innerHTML = "O número secreto é menor."
            }
            historico.push(chuteNovo);
        }
    }
    document.getElementById("valor").value = "";
    for (var i = 0; i < historico.length; i++) {
        elementoHistorico.innerHTML = historico.sort((a,b)=> a - b).join(" - ");
        console.log(historico);
    }
    
};

console.log(numeroSecreto);

