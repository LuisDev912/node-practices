/* File Transformer */ 

/* imports */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

/* code */

// --- variables
const mode = process.argv[2] ?? 'example.txt';
let content = ''

content = await readFile(mode, 'utf-8')

// --- functions

async function createDir(){
    const outputDir = join('output', 'files');
    await mkdir(outputDir, { recursive: true })
}

console.log(content);
createDir();