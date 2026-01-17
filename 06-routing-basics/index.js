/* Basic HTTP server */

/* imports */
import { createServer } from 'node:http';

/* code */

// --- variables
process.loadEnvFile?.();
const port = process.env.port ?? 3000;

// --- server
const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    return res.end('hello world from Node');
});

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});