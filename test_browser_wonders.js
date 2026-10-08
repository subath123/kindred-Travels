const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server for testing
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
  if (reqPath === '/') reqPath = '/index.html';
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

server.listen(8089, async () => {
  console.log('Test server listening on http://localhost:8089');

  // Launch Edge headless and dump DOM / console
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const args = [
    '--headless',
    '--disable-gpu',
    '--dump-dom',
    'http://localhost:8089/index.html'
  ];

  const child = spawn(edgePath, args);
  let domOutput = '';
  child.stdout.on('data', data => {
    domOutput += data.toString();
  });

  child.on('close', code => {
    server.close();
    console.log('Edge headless exited with code', code);

    // Verify rendered DOM elements
    if (domOutput.includes('wonders-stage-viewport') && 
        domOutput.includes('wonders-preview-card active') &&
        domOutput.includes('SIGIRIYA CITADEL') &&
        domOutput.includes('01') &&
        domOutput.includes('/ 06')) {
      console.log('PASS: Rendered DOM contains active Wonders Showcase stage with initial slide!');
      process.exit(0);
    } else {
      console.error('FAIL: Missing rendered components in DOM dump!');
      process.exit(1);
    }
  });
});
