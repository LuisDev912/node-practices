/* Path Inspector CLI */ 

/* imports */
import { extname, basename, join } from "node:path";
import { readdir, stat } from 'node:fs/promises';

/* code */

// --- variables
const path = process.argv[2] ?? './';
const files = await readdir(path);

// --- functions
function formatMem(memory){
    const MB = memory / 1024 / 1024;
    return `${MB.toFixed(2)} MB`
}

async function main(){
    
    try {
        if(!process.argv[2]){
            console.log('No path or file selected. Using current directory (./)');
        };

        const stats = await stat(path);

        console.log(`path selected: ${path}, its files: ${files}`);
        
        if (stats.isFile()) {
            console.log(`the size of the file is: ${formatMem(stats.size)}`);
        }

    } catch (e) {
        console.log(`An error has ocurred: ${e.message}`);
        process.exit(1)
    }
}

main()