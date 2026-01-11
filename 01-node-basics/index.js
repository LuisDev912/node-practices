/* System & Runtime Inspector */

/* imports */
import os from 'node:os';

/* code */

// --- variables
const mode = process.argv[2] ?? 'default';
const port = process.env.PORT ?? 'not defined';

// --- functions
function formatMem(memory){
    const gb = memory / 1024 / 1024 / 1024;
    return `${gb.toFixed(2)} gb`
}

function formatTime(time){
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = Math.floor(time % 60)

    return `${h}h ${m}m ${s}s`
}; // this can also be done with the 'ms' library from Vercel

// --- logs
console.group(' --- OS information: --- ');
console.log(`Type of OS: ${os.type()} (${os.arch()})`);
console.log(`Type of platform: ${os.platform()}`);

console.log(`Total memory: ${formatMem(os.totalmem())}. And free memory: ${formatMem(os.freemem())}`);

console.log(`System active time: ${formatTime(os.uptime())}`);

console.log(`Your home dir is: ${os.homedir()}`);
console.log(`Your PC current version is: ${os.version()}`);
console.groupEnd();

// -------------

console.group(' --- Other information: ---');
console.log(`Execution mode: ${mode}`);
console.log(`PORT: ${port}`);
console.log(`Node uptime: ${process.uptime().toFixed(2)}`)

console.groupEnd();

// other methods: os.endianness, os.EOL, etc.