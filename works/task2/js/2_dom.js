window.onclick = setup
function setup() {
    let newDivTwo = document.createElement("div");
    newDivTwo.classList.add("square_shape");
    newDivTwo.innerHTML = " NEW ELEMENT TWO ";
    newDivTwo.style.backgroundColor = "yellow";
    newDivTwo.querySelector("p").style.color = "black"
    // access parent element
    let sibling = document.getElementById("#four")
    let parentElementAgain = document.querySelector(".wrapper_flex_box")
    parentElementAgain.insertBefore(newDivTwo, sibling);


}