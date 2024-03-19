let colors = []
var pickedColor
var body = document.body
var cuadros = document.querySelectorAll(".square")
var display = document.getElementById("colorDisplay");
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resete = document.querySelector("#reset")
var boton = document.querySelectorAll(".modo")
var numCuadros = 9


init()

function init(){
  setUpModo()
  setUpCuadros()
  reset()
}

function setUpModo(){
for(var i = 0; i < boton.length; i++){
  boton[i].addEventListener("click", function(){
    boton[0].classList.remove("selected")
    boton[1].classList.remove("selected")
    boton[2].classList.remove("selected")
    this.classList.add("selected")
    if (this.textContent === "DIFICIL") {
        numCuadros = 6;
    } else if (this.textContent === "FACIL") {
        numCuadros = 3;
    } else {
        numCuadros = 9;
    } 
    reset()
  })}}

function setUpCuadros(){
for(let i = 0; i < cuadros.length; i++){
    cuadros[i].addEventListener("click",function(){
        var clickedColor = this.style.background
        if(clickedColor === pickedColor){
            message.textContent = "Correcto!"
            resete.textContent = "VOLVER A JUGAR"
            body.style.background = clickedColor
            h1.style.background = clickedColor
            changeColors(clickedColor)
        }else {
            this.style.background = "white"
            message.textContent = "Intentalo Nuevamente!"
        }
  })}}


function reset(){
  colors = generateRandomColors(numCuadros)
  pickedColor = pickColor()
  display.textContent = pickedColor
  for (var i = 0; i < cuadros.length; i++) {
    if(colors[i]){
    cuadros[i].style.background=colors[i]
    cuadros[i].style.display="block"
  }else{
    cuadros[i].style.display="none"
  }
  }
  h1.style.background = "white"
  body.style.background = "white"
  message.textContent=""
  resete.textContent="NUEVOS COLORES"
  }

resete.addEventListener("click",function(){
  reset()
})

function changeColors(color){
  for(let i = 0; i < cuadros.length; i++){
      cuadros[i].style.background = color
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*colors.length)
  return colors[random]
}

function generateRandomColors(num){
  var arr=[]
  for(var i = 0; i < num; i++){
      arr[i]=randomColor()
  }
  return arr
}

function randomColor(){
  var r = Math.floor(Math.random()*256)
  var g = Math.floor(Math.random()*256)
  var b = Math.floor(Math.random()*256)
  return "rgb("+r+", "+g+", "+b+")"
}
