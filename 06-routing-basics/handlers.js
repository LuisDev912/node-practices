// these functions only answer when called. They do not decide routes
export function getHome(_, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8"
    });
    res.end('Hello world from node');
}

export function getHealth(_, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ message: 'ok' }));
}

export function notFound(_, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Not found' }));
}

export function methodNotAllowed(_, res) {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
}