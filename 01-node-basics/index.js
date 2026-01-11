/* System & Runtime Inspector */

// imports
import os from 'node:os';

// code

function formatMem(memory){
    const gb = memory / 1024 / 1024 / 1024;
    return `${gb.toFixed(2)} gb`
}

console.group(' --- OS information: --- ');
console.log(`Type of OS: ${os.type()} (${os.arch()})`);
console.log(`Type of platform: ${os.platform()}`);

console.log(`Total memory: ${formatMem(os.totalmem())}. And free memory: ${formatMem(os.freemem())}`);

console.log(`System active time: ${os.uptime()}`);
console.log(`Your home dir is: ${os.homedir()}`);
console.log(`Your PC current version is: ${os.version()}`);
console.groupEnd();

// other methods: os.endianness, os.EOL, etc.