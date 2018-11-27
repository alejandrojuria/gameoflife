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
  ctx.fillRect(i*pw + 1, j*ph + 1, pw - 1, ph - 1);
};


// Logical functions

function initCells(){
  var cells = [];
  for(var i = 0; i <= ny; i+=1){
    cells[i] = [];
    for(var j = 0; j <= nx; j+=1){
      cells[i][j] = 0;
    }
  }
};

function clearBoard(){
  // Clears both the cell state matrix and the graphics
  // States
  initCells();
  // Graphics
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard();
};

function start(){
  var niter = document.getElementById("generations").value;
  var timestep = document.getElementById("timestep").value*1000;
  for(var i = 0; i <= niter; i += 1){
    (function(i) { setTimeout(function() {
        document.getElementById("demo").innerHTML = "Generation " + i.toString();
      }, timestep*i);
    })(i);
  };
};


drawBoard();
fillBlock(nx/2, ny/2);
