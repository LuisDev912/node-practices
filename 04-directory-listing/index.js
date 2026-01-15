/* Path Inspector CLI */ 

/* imports */
import { extname, basename, join } from "node:path";
import { readdir, stat } from 'node:fs/promises';

/* code */

// --- variables
const path = process.argv[2] ?? './';
console.log(`path selected: ${path}`);

// --- functions
function formatMem(memory){
    const MB = memory / 1024 / 1024;
    return `${MB.toFixed(2)} MB`
}