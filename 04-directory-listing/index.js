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
    return `${MB.toFixed(2)} MB`;
}

async function main(){
    try {
        if(!process.argv[2]){
            console.log('No path or file selected. Using current directory (./)');
        };

        const entries = await Promise.all(
            files.map(async (name) => {
                const fullPath = join(path, name);
                const stats = await stat(fullPath);

                return {
                    name,
                    isDir: stats.isDirectory(),
                    size: formatMem(stats.size)
                }
            })
        );

        for (const entry of entries) {
            const icon = entry.isDir ? '📁' : '📄';
            const size = entry.isDir ? '-' : `${entry.size}`

            console.log(`${icon}  ${entry.name}  ${size}`)
        };
    } catch (e) {
        console.log(`An error has occurred: ${e.message}`);
        process.exit(1);
    }
}

main()