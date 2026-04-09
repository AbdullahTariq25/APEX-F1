const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'ezgif-2d6cd132509fff76-jpg');
const destDir = path.join(__dirname, 'public', 'frames');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let count = 1;
// we will take every 2nd frame of the 240 to get 120 frames
for (let i = 2; i <= 240; i += 2) {
  const srcName = `ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
  const destName = `frame${String(count).padStart(4, '0')}.jpg`;
  
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    count++;
  } else {
    console.warn(`Missing: ${srcPath}`);
  }
}

console.log(`Copied ${count - 1} frames.`);
