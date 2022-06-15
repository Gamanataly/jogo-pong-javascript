// variáveis da bolinha
let Xbolinha=300;
let Ybolinha=200;
let diametro=15;
let raio = diametro/ 2;

 //velocidade da bolinha
let velocidadeXbolinha=6;
let velocidadeYbolinha=6;
let raqueteComprimento =10;
let raqueteAltura = 90;

// variáveis da raquete
let Xraquete = 5;
let Yraquete = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 mostrabolinha();
  movimentabolinha();
  verificaColisaoBorda();
  mostraraquete();
  movimentaMinhaRaquete();
  verificacaoColisaoRaquete();

function mostrabolinha(){
  circle(Xbolinha,Ybolinha,diametro);
}

function movimentabolinha (){
  Xbolinha+=velocidadeXbolinha;
 Ybolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
    if (Xbolinha + raio > width || Xbolinha - raio < 0) {
        velocidadeXbolinha *= -1;
    }
    if (Ybolinha + raio > height || Ybolinha - raio < 0) {
        velocidadeYbolinha *= -1;
    }
}

function mostraraquete(){
  rect(Xraquete,Yraquete,raqueteComprimento,raqueteAltura);
}
  
}


function movimentaMinhaRaquete(){
  if (keyIsDown (UP_ARROW))
  Yraquete -=10;
    
 if (keyIsDown (DOWN_ARROW))
  Yraquete +=10;
}


function verificacaoColisaoRaquete(){
  if (Xbolinha - raio < Xraquete + raqueteComprimento && Ybolinha - raio < Yraquete + raqueteAltura && yBolinha + raio > yRaquete) 
        velocidadeXBolinha *= -1;
    velocidadeXbolinha *= -1;
        }