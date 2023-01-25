let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 270, 318];
let vCarros = [2.8, 1.8, 3, 1.5, 2, 2.5,];
let comprimentoCarro = 50;
let alturaCarro = 40;

//carros
function mostraCarro(){
  for (let i =0; i < imgCarros.length; i++){
  image(imgCarros[i] ,xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i =0; i < imgCarros.length; i++){
  xCarros[i]-= vCarros[i]; 
  }
}
function voltaPosicaoInicialCarro(){
  for (let i =0; i < imgCarros.length; i++){
  if (passouATela(xCarros[i]) ){
    xCarros[i] = 600;
    }
  }
}

function passouATela(xCarro){
  return xCarro < -50;
}


