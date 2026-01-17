/* Basic HTTP server */

/* imports */
import { createServer } from 'node:http';

/* code */

// --- variables
const port = process.env.PORT ?? 3000;

// --- functions
function jsonResponse(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
}

// --- server
const server = createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
        if (url === '/') {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            return res.end('Hello world from Node');
        }

        if (url === '/health') {
            return jsonResponse(res, 200, {
                status: 'ok',
                uptime: Math.round(process.uptime())
            })
        }
    } else {
        return jsonResponse(res, 405, { status: 'method not allowed' })
    }

    return jsonResponse(res, 404, { status: 'not found' });
});

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});