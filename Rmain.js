canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle = "lightBlue";
ctx.lineWidth = 2;
ctx.rect(150, 145, 430, 200);
ctx.stroke();
console.log("hi")

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("Olympic");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("rings");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("are");

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("here!");

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
console.log("The Olympic Rings are here!");
