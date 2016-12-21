// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn="player1"
function doSomething1() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","50")
  newShape.setAttribute("cy","55")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","red")
  if(turn == "player1"){
    newShape.setAttribute("fill","red")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}


function doSomething2() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","150")
  newShape.setAttribute("cy","55")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething3() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","250")
  newShape.setAttribute("cy","55")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething4() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","50")
  newShape.setAttribute("cy","175")
  newShape.setAttribute("r","30")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething5() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","145")
  newShape.setAttribute("cy","240")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething6() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","140")
  newShape.setAttribute("cy","115")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething7() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","50")
  newShape.setAttribute("cy","175")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething8() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","115")
  newShape.setAttribute("cy","175")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill", "#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
function doSomething9() {
  var newShape = document.createElementNS(namespace, "circle")
  newShape.setAttribute("cx","140")
  newShape.setAttribute("cy","175")
  newShape.setAttribute("r","20")
  newShape.setAttribute("fill","#0BCC64")
  if(turn == "player1"){
    newShape.setAttribute("fill","#0BCC64")
    turn = "player2"
  }else{
    newShape.setAttribute("fill","orange")
    turn = "player1"
  }
  var canvas = document.getElementById("game-board")
 canvas.appendChild(newShape)
}
