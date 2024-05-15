const http = require('http');
const httpProxy = require('http-proxy');

const targetHost = ''; // change this
const targetPort = 80;

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
    const target = { target: `http://${targetHost}:${targetPort}` };
    req.headers.host = ''; // change this

    proxy.web(req, res, target, (err) => {
        console.error('Proxy Error:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Proxy Error');
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

