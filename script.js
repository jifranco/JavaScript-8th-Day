const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing)return; //stops the function from running when mouse not clicked
    console.log(e)
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    //going to
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke();
    [lastX,lastY]=[e.offsetX,e.offsetY]
}
canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mousedown', (e)=>{
    isDrawing = true;
    [lastX,lastY]=[e.offsetX,e.offsetY]

})


canvas.addEventListener('mouseup', ()=>isDrawing = false)
canvas.addEventListener('mouseout', ()=>isDrawing = false)