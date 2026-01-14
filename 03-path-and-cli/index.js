/* Path Inspector CLI */ 

/* imports */
import { extname, basename, resolve, dirname } from "node:path";

/* code */

// --- variables
const relativePath = process.argv[2] ?? './';
const absolutePath = resolve(relativePath);
let extensionName;

if(!process.argv[2]){
    console.log('No path or file selected. Using current directory (./)');
};

if(!extname(relativePath)){
    extensionName = 'no file selected';
} else{
    extensionName = extname(absolutePath);
}

console.group('--- INFORMATION ABOUT THE SELECTED PATH --- \n');
console.log(`selected path: ${relativePath}`);
console.log(`resolved path: ${absolutePath}`);
console.log(`base name: ${basename(absolutePath)}`);
console.log(`extension name: ${extensionName}`);
console.log(`parent path: ${dirname(absolutePath)}`);
console.groupEnd();