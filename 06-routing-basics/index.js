/* Basic HTTP server */

/* imports */
import { createServer } from 'node:http';
import { routes } from './routes.js';
import { notFound, methodNotAllowed } from './handlers.js';

/* code */

// --- variables
process.loadEnvFile?.();
const port = process.env.port ?? 3000;

// --- server
const server = createServer((req, res) => {
    const { method, url } = req;
    const methodRoutes = routes[method];
    const handler = methodRoutes[url];

    if (!methodRoutes) return methodNotAllowed(req, res);
    if (!handler) return notFound(req, res);

    handler(req, res)
});

server.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
});