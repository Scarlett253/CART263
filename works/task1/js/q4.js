/**
 * TASK 1: Yéléna and Scarlett
*/

"use strict";

/**Rectangles set up */

//rectangle 1
const r1Width = 200;
const r1Height = 600;
let r1X = 0;
let r1Y = 0;

//rectangle 2
const r2Width = 200;
const r2Height = 600;
let r2X = 200;
let r2Y = 0;

//rectangle 3 
const r3Width = 200;
const r3Height = 600;
let r3X = 400;
let r3Y = 0;


function setup() {
    console.log("go")
    createCanvas(600, 600);
    drawRectangle();

}

function draw() {
    // background("#ac55e6")

    //rectangles
    drawRectangle(r1X, r1Y, r1Width, r1Height, 0, 0, 128);
    drawRectangle(r2X, r2Y, r2Width, r2Height, 0, 255, 255);
    drawRectangle(r3X, r3Y, r3Width, r3Height, 137, 207, 240);

    /**Create rectangles*/
    // //rectangle 1
    // push();
    // noStroke();
    // fill(0, 0, 128);
    // rect(0, 0, 200, 600);
    // pop();

    // //rectangle 2
    // push();
    // noStroke();
    // fill(0, 255, 255);
    // rect(200, 0, 200, 600);
    // pop();

    // //rectangle 3
    // push();
    // noStroke();
    // fill(137, 207, 240);
    // rect(400, 0, 200, 600);
    // pop();


}

function drawRectangle(x, y, w, h, r, g, b) { //body
    push();
    noStroke();
    fill(r, g, b);
    rect(x, y, w, h);
    pop();
}