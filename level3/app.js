import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    routing(req, res);
    res.end();
});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(port, host).on('listening', () => {
    console.log("listening at:", server.address().port);
});

function routing(req, res) {
    res.writeHead(200, { 'content_type':'txt/html' });
    fs.createWriteStream(`${path.dirname(fileURLToPath(import.meta.url))}/${req.url}.html`).pipe(res);
}