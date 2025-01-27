const canvas = document.getElementById('patternCanvas');
const ctx = canvas.getContext('2d');

// Generate Button Logic
document.getElementById('generateBtn').addEventListener('click', () => {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get inputs
  const patternType = document.getElementById('patternType').value;
  const primaryColor = document.getElementById('primaryColor').value;
  const size = parseInt(document.getElementById('size').value);
  const density = parseInt(document.getElementById('density').value);

  // Generate pattern
  if (patternType === 'grid') {
    drawGrid(ctx, primaryColor, size, density);
  } else if (patternType === 'spiral') {
    drawSpiral(ctx, primaryColor, size, density);
  } else if (patternType === 'fractal') {
    drawFractal(ctx, primaryColor, size, density);
  }
});

// Function to draw grid
function drawGrid(ctx, color, size, density) {
  ctx.strokeStyle = color;
  const step = size / density;
  for (let x = 0; x < canvas.width; x += step) {
    for (let y = 0; y < canvas.height; y += step) {
      ctx.strokeRect(x, y, step, step);
    }
  }
}

// Function to draw spiral
function drawSpiral(ctx, color, size, density) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  let angle = 0;
  let radius = size;
  for (let i = 0; i < density * 100; i++) {
    const x = canvas.width / 2 + radius * Math.cos(angle);
    const y = canvas.height / 2 + radius * Math.sin(angle);
    ctx.lineTo(x, y);
    angle += 0.1;
    radius += 0.5;
  }
  ctx.stroke();
}

// Export Button Logic
document.getElementById('exportBtn').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'pattern.jpg'; // File name
  link.href = canvas.toDataURL('image/jpeg'); // Convert canvas to JPEG
  link.click();
});
