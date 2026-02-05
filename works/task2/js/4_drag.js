window.onload = setup;
function setup() {
    console.log("drag ex");
    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
    };
    window.addEventListener("dragstart", handleDragging);

    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped");
        console.log(event);
    }
    window.addEventListener("drop", handleDrop);

    // IMPORTANT::By default, data/elements cannot be dropped in other elements.
    //To allow a drop, we must prevent the default handling of the element
    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();
    });

}