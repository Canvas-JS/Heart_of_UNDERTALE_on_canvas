// создаём сердце из Undertale на канвасе.
const canvas = document.querySelector('#canvas');
console.log(canvas);

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(255, 0, 0)';

ctx.beginPath();
ctx.moveTo(110, 200);
ctx.lineTo(150, 200);
ctx.lineTo(150, 180);
ctx.lineTo(170, 180);
ctx.lineTo(170, 160);
ctx.lineTo(190, 160);
ctx.lineTo(190, 140);
ctx.lineTo(210, 140);
ctx.lineTo(210, 60);
ctx.lineTo(200, 60);
ctx.lineTo(200, 50);
ctx.lineTo(190, 50);
ctx.lineTo(190, 40);
ctx.lineTo(170, 40);
ctx.lineTo(170, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 60);
ctx.lineTo(140, 60);
ctx.lineTo(140, 80);
ctx.lineTo(120, 80);
ctx.lineTo(120, 60);
ctx.lineTo(110, 60);
ctx.lineTo(110, 50);
ctx.lineTo(90, 50);
ctx.lineTo(90, 40);
ctx.lineTo(70, 40);
ctx.lineTo(70, 50);
ctx.lineTo(60, 50);
ctx.lineTo(60, 60);
ctx.lineTo(50, 60);
ctx.lineTo(50, 140);
ctx.lineTo(70, 140);
ctx.lineTo(70, 160);
ctx.lineTo(90, 160);
ctx.lineTo(90, 180);
ctx.lineTo(110, 180);
ctx.lineTo(110, 200);
ctx.lineTo(150, 200);
ctx.fill();