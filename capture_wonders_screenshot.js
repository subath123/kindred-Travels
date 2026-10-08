const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/test_preview_showcase.html';
  const filePath = path.join(__dirname, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8099, () => {
  console.log('Showcase capture server listening on 8099');

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const outShot = 'C:\\Users\\Subath Thenuja\\.gemini\\antigravity\\brain\\ae704ddd-411f-477e-b38a-40af7bd97789\\wonders_section_screenshot.png';

  const child = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--window-size=1440,920',
    `--screenshot=${outShot}`,
    'http://localhost:8099/test_preview_showcase.html'
  ]);

  child.on('close', code => {
    server.close();
    console.log('Edge screenshot exited with code', code);
    process.exit(0);
  });
});
