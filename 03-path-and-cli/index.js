/* Path Inspector CLI */ 

/* imports */
import { join, extname, basename, resolve } from "node:path";

/* code */

// --- variables
const route = process.argv[2] ?? '.';
console.log(`selected path: ${route}`)