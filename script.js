var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

var moving = main.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})