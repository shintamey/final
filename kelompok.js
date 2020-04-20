var myCanv = document.getElementById('myCanvas');
var c = myCanv.getContext('2d');
var btnOpen = document.getElementById('open');
var btnClose = document.getElementById('close');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;
var rotation = 0;

function Open(){
    drawRect();
    if(rotation < Math.PI/2) {
        rotation += 0.02;
    requestAnimationFrame(Open);
    }   
}

function Close(){
    drawRect();
    if(rotation > 0) {
        rotation -= 0.02;
    requestAnimationFrame(Close);
    }   
}

btnOpen.addEventListener('click', function(){
    Open();
});
btnClose.addEventListener('click', function(){
    Close();
});
        
// var tutup = new Tutup(250, 150);
// function gameLoop(){
//     c.clearRect(0,0, myCanvas.width, myCanvas.height);
//     tutup.draw();
//     tutup.update(mouseX, mouseY);
// }    
// setInterval(gameLoop, 20);

// function Tutup(x,y){
//     this.x = x;
//     this.y = y;
//     this.angle ;
// }

function drawRect(){
    c.clearRect(0, 0, myCanvas.width, myCanvas.height/2 + 5);
    c.clearRect(myCanvas.width/2, 0, myCanvas.width, myCanvas.height);
    c.save();
    c.translate(250,160);
    c.rotate(rotation);
    c.scale(-1,-1);
    // c.getRotatedRect();
    //tutup
    // c.beginPath();
    // c.moveTo(80, 160);
    // c.lineTo(80, 130);
    // c.lineTo(250, 130);
    // c.lineTo(250, 160);
    
        //color-grading
c.fillStyle = '#000136';
c.fillRect(0, 0, 170, 30);
// c.clearRect(30, 30,150, 30);
c.fillRect(65, 30, 30, 30);
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

    // c.beginPath();
    // c.moveTo(50, 30);
    // c.lineTo(50, 0);
    // c.lineTo(75, 0);
    // c.lineTo(75, 30);
    // c.rect(65, 30, 30, 30);
    // c.lineWidth = 2;
    // c.strokeStyle='black';
    // c.stroke();

    //color-grading
// c.restore();
// var grd=c.createLinearGradient(80, -10, 20, 70);
// grd.addColorStop(0,'#8ED6FF');
// grd.addColorStop(1,'#004CB3');
// c.fillStyle=grd;
// c.fill();

// var grd=c.createLinearGradient(60,-30, 20, 170);
// grd.addColorStop(0,'#8ED6FF');
// grd.addColorStop(1,'#004CB3');
// c.fillStyle=grd;
// c.fill();
c.restore()
}

function badan(){
    //badan
c.beginPath();
c.moveTo(80, 160);
c.lineTo(250, 160);
c.lineTo(250, 390);
c.lineTo(80, 390);
c.closePath();
c.lineWidth = 2;
c.strokeStyle='black';
c.stroke();

//color-grading
    for (var i = 0; i<6; i++){
        for (var j=0; j<3; j++){
            c.save();
            c.fillStyle='rgb(' + (3*i) + ', ' + (155 - 30 * i) + ', 155)';
            c.translate(20 + j * 50, 95 + i * 21);
            c.fillRect(61,141,68,48);
            c.restore();
        }
    }
}


drawRect();
badan();
// Tutup.prototype.update = function(){
   
// }

