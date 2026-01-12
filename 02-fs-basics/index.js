/* File Transformer */ 

/* imports */
import { readFile, mkdir, writeFile } from "node:fs/promises";

/* code */

// --- variables
let content = ''

content = await readFile('example.txt', 'utf-8')

console.log(content);