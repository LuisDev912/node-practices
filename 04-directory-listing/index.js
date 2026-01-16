/* Directory Listing */ 

/* imports */
import { join } from "node:path";
import { readdir, stat } from 'node:fs/promises';

/* code */

// --- functions
function formatBytes(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function render(entries) {
    console.group('---- DIRECTORY INFORMATION ----');
    let files = 0;
    let dirs = 0;

    for (const entry of entries) {
        entry.isDir ? dirs++ : files++;
        const fileIcon = entry.isDir ? '📁': '📄';
        const fileSize = entry.isDir ? '-' : `${entry.size}`

        console.log(`${fileIcon} ${entry.name.padEnd(20)}  ${fileSize}`)
    };

    console.log(`Total files: ${files}. Total directories: ${dirs}`)
    console.groupEnd();
}

async function dirEntries(path, files) {
    const entries = await Promise.all(
        files.map(async (name) => {
            const fullPath = join(path, name);
            const stats = await stat(fullPath);

            return {
                name,
                isDir: stats.isDirectory(),
                size: formatBytes(stats.size)
            }
        })
    );
    render(entries)
}

async function main(){
    try {
        // --- variables
        const path = process.argv[2] ?? './';
        const files = await readdir(path);

        if(!process.argv[2]){
            console.log('No path or file selected. Using current directory (./)');
        };

        await dirEntries(path, files);
    } catch (e) {
        console.error('failed to list directory');
        console.error(e.message)
        process.exit(1);
    }
}

main()