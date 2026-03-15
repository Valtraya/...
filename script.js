const canvas = document.getElementById("heroGraph");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector('.hero').offsetHeight;
}
resize();
window.addEventListener('resize', resize);

let points = [];
for(let i=0;i<window.innerWidth;i+=10){points.push(Math.random()*canvas.height*0.5+canvas.height*0.25);}
let t=0;
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.moveTo(0,points[0]);
  for(let i=1;i<points.length;i++){
    ctx.lineTo(i*10,points[i]+Math.sin((t+i)*0.05)*20);
  }
  ctx.strokeStyle="rgba(92,10,23,0.8)";
  ctx.lineWidth=3;
  ctx.stroke();
  t++;
  requestAnimationFrame(draw);
}
draw();
