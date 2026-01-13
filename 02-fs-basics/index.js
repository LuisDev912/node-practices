/* File Transformer */ 

/* imports */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

/* code */

// --- variables
const mode = process.argv[2] ?? 'example.txt';
let content;

// --- functions

function showFileInformation(file){
    console.log(`your file name is: ${basename(file)}`);
    console.log(`Your file extension is: ${extname(file)}`)
}

async function contentToUppercase(file, dir){
    const uppercaseContent = file.toUpperCase();
    const outputFilePath = join(dir, 'uppercase-file.txt');

    await writeFile(outputFilePath, uppercaseContent);

    console.log(`File in uppercase created successfully. Check _${dir}_ to see your file`);
    showFileInformation(outputFilePath);
}

async function createDir(){
    const outputDir = join('output', 'files');
    await mkdir(outputDir, { recursive: true });

    contentToUppercase(content, outputDir);
}

try {
    content = await readFile(mode, 'utf-8');
    console.log(`${content} \n`);
    await createDir();
} catch (e) {
    console.error(`error with the file: ${e.message}`)
}