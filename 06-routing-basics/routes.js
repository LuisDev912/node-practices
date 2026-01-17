import { getHome, getHealth } from "./handlers.js";

export const routes = {
    GET: {
        // this contains a map of routes
        '/': getHome,
        '/health': getHealth
    }
};
