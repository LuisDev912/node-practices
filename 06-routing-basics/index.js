/* Basic HTTP server */

/* imports */
import { createServer } from 'node:http';

/* code */

// --- variables
const port = process.env.PORT ?? 3000;

// --- server
const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    return res.end('hello world from Node');
});

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});