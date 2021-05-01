/**
 * 绘制点
 * @param {number} x
 * @param {number} y
 */
function drawDot(x, y) {
  const canvas = $("#heatMap")[0];
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, 1, 0, Math.PI * 2, true);
  ctx.fill();
}

function drawRandomDot() {
  const maxWidth = 300;
  const maxHeight = 150;

  const rw = Math.random();
  const rh = Math.random();
  drawDot(rw * maxWidth, rh * maxHeight);
  return [rw, rh];
}
