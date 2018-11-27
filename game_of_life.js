// Game of life - Alejandro José Uría Álvarez

// Variables

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bh = 360;
var bw = 640;

var ph = 18;
var pw = 16;

var nx = bw/pw;
var ny = bh/ph;

canvas.height = bh;
canvas.width = bw;
canvas.style.border = "1px solid";

// Graphical functions

function drawBoard(){
  // Vertical lines
  for(var x = pw; x < bw; x+=pw){
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, bh);
  }
  // Horizontal lines
  for(var y = ph; y < bh; y+=ph){
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(bw, y + 0.5);
  }
  ctx.stroke();
};

function fillBlock(i,j){
  ctx.fillStyle="#000000";
  ctx.fillRect(i*pw, j*ph, pw, ph);
};

function clearBlock(i,j){
  ctx.fillStyle="#ffffff";
  ctx.fillRect(i*pw, j*ph, pw, ph);
  drawBoard();
};

// Logical functions

drawBoard();
fillBlock(nx/2,ny/2);
fillBlock(nx/2+1,ny/2+1);
clearBlock(nx/2+1,ny/2+1);
