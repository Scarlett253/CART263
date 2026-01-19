/**
 * TASK 1: Yéléna and Scarlett
*/

"use strict";

function setup() {
    createCanvas(500, 500);
    console.log("go")



}

function draw() {
    background("#ac55e6")

    /**Create ellipses*/
    //ellipse 1
    push();
    noStroke();
    fill(206, 56, 156);
    ellipse(100, 100, 50, 50);
    pop();

    //ellipse 2
    push();
    noStroke();
    fill(224, 176, 255);
    ellipse(150, 150, 70, 70);
    pop();

    //ellipse 3
    push();
    noStroke();
    fill(127, 0, 255);
    ellipse(210, 210, 80, 80);
    pop();


}