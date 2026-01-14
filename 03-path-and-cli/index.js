/* Path Inspector CLI */ 

/* imports */
import { join, extname, basename, resolve } from "node:path";

/* code */

// --- variables
const relativePath = process.argv[2] ?? '.';
const absolutePath = resolve(relativePath);

console.log(`selected path: ${join(absolutePath)}`)
