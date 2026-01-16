/* Path Inspector CLI */ 

/* imports */
import { extname, basename, join } from "node:path";
import { readdir, stat } from 'node:fs/promises';

/* code */

// --- variables
const path = process.argv[2] ?? './';
const files = await readdir(path);

// --- functions
function formatMem(bytes) {
    if (bytes === 0) return '0 B'

    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function render(entries) {
    for (const entry of entries) {
        const icon = entry.isDir ? '📁' : '📄';
        const size = entry.isDir ? '-' : `${entry.size}`

        console.log(`${icon}  ${entry.name}  ${size}`)
    };
}

async function dirEntries() {
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

    render(entries)
}

async function main(){
    try {
        if(!process.argv[2]){
            console.log('No path or file selected. Using current directory (./)');
        };
        dirEntries();
    } catch (e) {
        console.log(`An error has occurred: ${e.message}`);
        process.exit(1);
    }
}

main()