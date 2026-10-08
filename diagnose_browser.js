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
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, reqPath);

  if (req.url.startsWith('/log?msg=')) {
    console.log('BROWSER LOG:', decodeURIComponent(req.url.slice(9)));
    res.writeHead(200);
    res.end('ok');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    if (ext === '.html') {
      let html = fs.readFileSync(filePath, 'utf8');
      // Inject logger and element dimensions checker
      html = html.replace('</head>', `
        <script>
          window.onerror = function(msg, url, line) {
            fetch('/log?msg=' + encodeURIComponent('ERROR: ' + msg + ' at ' + url + ':' + line));
          };
          window.addEventListener('DOMContentLoaded', () => {
            const sec = document.getElementById('destinations-section');
            const rect = sec ? sec.getBoundingClientRect() : null;
            fetch('/log?msg=' + encodeURIComponent('Section found: ' + (!!sec) + ' rect: ' + JSON.stringify(rect)));
          });
        </script>
      </head>`);
      res.end(html);
    } else {
      fs.createReadStream(filePath).pipe(res);
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8092, () => {
  console.log('Diagnostic server running on 8092');

  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const child = spawn(edgePath, [
    '--headless',
    '--disable-gpu',
    '--virtual-time-budget=3000',
    'http://localhost:8092/index.html'
  ]);

  setTimeout(() => {
    server.close();
    child.kill();
    process.exit(0);
  }, 4000);
});
