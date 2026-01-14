/* Path Inspector CLI */ 

/* imports */
import { join, extname, basename, resolve, dirname } from "node:path";

/* code */

// --- variables
const relativePath = process.argv[2] ?? '.';
const absolutePath = resolve(relativePath);

console.log(`selected path: ${join(relativePath)}`)
console.log(`resolved path: ${join(absolutePath)}`)
console.log(`base name: ${basename(absolutePath)}`)
console.log(`extension name: ${extname(absolutePath)}`);
console.log(`parent path: ${dirname(absolutePath)}`)