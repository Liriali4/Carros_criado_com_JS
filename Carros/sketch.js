
function setup() {
  createCanvas(550, 400);
  somDaTrilha.loop();
}

function draw(){
background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}
