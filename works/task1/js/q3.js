/**
 * TASK 1: Yéléna and Scarlett
*/

"use strict";

/**Rectangles set up */

//rectangle 1
const r1Size = 50;
let r1X = 100;
let r1Y = 100;

//rectangle 2
const r2Size = 70;
let r2X = 150;
let r2Y = 150;

//rectangle 3 
const r3Size = 80;
let r3X = 100;
let r3Y = 220;

function setup() {
    console.log("go")
    createCanvas(500, 500);
    drawRectangle();

}

function draw() {
    background("#ac55e6")

    //rectangles
    drawRectangle(r1X, r1Y, r1Size, r1Size, 206, 56, 156);
    drawRectangle(r2X, r2Y, r2Size, r2Size, 224, 176, 255);
    drawRectangle(r3X, r3Y, r3Size, r3Size, 127, 0, 255);

}
function drawRectangle(x, y, w, h, r, g, b) { //body
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}