/* Basic HTTP server */

/* imports */
import { createServer } from 'node:http';

/* code */

// --- variables
const port = process.env.PORT ?? 3000;

// --- functions
function plainToJSON(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
}

// --- server
const server = createServer(async (req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        if (url === '/') {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end('Hello world from Node');
        }

        if (url === '/health') {
            return plainToJSON(res, 200, { status: 'ok', uptime: process.uptime()})
        }
    } else {
        return plainToJSON(res, 405, { status: 'method not allowed' })
    }

    return plainToJSON(res, 404, { status: 'Not found' });
});

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});