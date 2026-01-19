/**
 * TASK 1: Yéléna and Scarlett
*/

"use strict";

function setup() {
    console.log("go")
    createCanvas(500, 500);
    drawEllipse();

}

function draw() {
    background("#ac55e6")

    //ellipses
    drawEllipse(100, 100, 50, 50, 206, 56, 156);
    drawEllipse(150, 150, 70, 70, 224, 176, 255);
    drawEllipse(210, 210, 80, 80, 127, 0, 255);

}
function drawEllipse(x, y, w, h, r, g, b) { //body
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}