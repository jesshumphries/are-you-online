function openWin(id) {
  document.getElementById("win-" + id).style.display = "block";
}

function closeWin(id) {
  document.getElementById("win-" + id).style.display = "none";
}

/* ─── Drag system ─── */

let activeWindow = null;
let offsetX = 0;
let offsetY = 0;

function startDrag(e, el) {
  activeWindow = el;
  offsetX = e.clientX - el.offsetLeft;
  offsetY = e.clientY - el.offsetTop;
}

document.addEventListener("mousemove", (e) => {
  if (!activeWindow) return;

  activeWindow.style.left = (e.clientX - offsetX) + "px";
  activeWindow.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  activeWindow = null;
});