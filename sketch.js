//é aqui que cria as variáveis
var player, imagemPlayer
var solo,imagemSolo
var barreira1,barreira2

function preload(){
  //é aqui que carrega a imagem
imagemSolo = loadImage("estrada.png")
  //é aqui que carrega a animação
 imagemPlayer=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png")
}

function setup(){
  createCanvas(600,400)
  //é aqui que cria a sprite da estrada
  solo = createSprite(300,200)
  //é aqui que adiciona a imagem na sprite da estrada
  solo.addImage (imagemSolo)
  //é aqui que define a velocidade
  solo.velocityY=3

  //é aqui que cria a sprite do jogador
  player=createSprite(300,320)
  //é aqui que adiciona a animação do jogador na sprite
  player.addAnimation ("correndo",imagemPlayer)
  //é aqui que define o tamanho
  player.scale=0.7

  //cria as barreiras
  barreira1=createSprite(50,200,200,400)
  barreira1.visible=false
  barreira2=createSprite(550,200,200,400)
  barreira2.visible=false

}

function draw(){
  background(0);
  player.x=mouseX
  player.collide(barreira1)
  player.collide(barreira2)
  //programar para a sprite de estrada estar em um loop infinito
  if(solo.y>400){
    solo.y=0
  }
  console.log(mouseX,mouseY)
  drawSprites();
}