let imagemDaEstrada;
let imagemDoAtor;
let imagemcarro1;
let imagemcarro2;
let imagemcarro3;
let somDaTrilha;
let somDaColisao;
let somDoPonto;



function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemcarro1 = loadImage("Imagens/carro-1.png");
  imagemcarro2 = loadImage("Imagens/carro-2.png");
  imagemcarro3 = loadImage("Imagens/carro-3.png");
  imgCarros =[imagemcarro1, imagemcarro2, imagemcarro3, imagemcarro1, imagemcarro2, imagemcarro3];

  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao =loadSound("Sons/colidiu.mp3");
  somDoPonto =loadSound("Sons/pontos.wav");
}




