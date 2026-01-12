/* File Transformer */ 

/* imports */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

/* code */

// --- variables
const mode = process.argv[2] ?? 'example.txt';
let content;

content = await readFile(mode, 'utf-8');
console.log(content);

// --- functions

function showFileInformation(file){
    console.log(`your file name is: ${basename(file)}`);
    console.log(`Your file extension is: ${extname(file)}`)
}

async function createDir(){
    const outputDir = join('output', 'files');
    await mkdir(outputDir, { recursive: true });

    const uppercaseContent = content.toUpperCase();
    const outputFilePath = join(outputDir, 'uppercase-file.txt');

    await writeFile(outputFilePath, uppercaseContent);

    console.log(`File in uppercase created successfully. Check ${outputDir} to see your file`);
    showFileInformation(outputFilePath)
}

createDir(content);