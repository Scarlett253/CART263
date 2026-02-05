window.onload = function () {
    let drawBox = this.document.querySelector("#draw-box-a");

    drawBox.addEventListener("mousemove", moveCallBack);

    function moveCallBack(e) {
        let rect = this.getBoundingClientRect();

        let offsetX = e.clientX - rect.left;
        let offsetY = e.clientY - rect.top;



        drawBox.innerHTML = `x: ${offsetX} y: ${offsetY}`;

        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");
        pointDiv.style.left = offsetX + "px";
        pointDiv.style.top = offsetY + "px";
        this.appendChild(pointDiv);
    };
}