var canvas;
var ctx;

var width = 100;
var height = 200;

var cloud;
var cloud_x;

function init() {
    canvas = document.getElementById("webheader");
    width = canvas.width;
    height = canvas.height;
    ctx = canvas.getContext("2d");

    // init cloud
    cloud = new Image();
    cloud.src = 'http://silveiraneto.net/wp-content/uploads/2011/06/cloud.png';
    cloud.onload = function () {
        cloud_x = -cloud.width;
    };

    return setInterval(main_loop, 10);
}

function update() {
    cloud_x += 0.3;
    if (cloud_x > width) {
        cloud_x = -cloud.width;
    }
}

function draw() {
    ctx.drawImage(cloud, cloud_x, 0);
}

function main_loop() {
    draw();
    update();
}

function Clouds(container) {
    $(document).ready(function () {
        window.onload = function () {
            init();
        }
    })
}