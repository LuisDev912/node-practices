/* System & Runtime Inspector */

// imports
import os from 'node:os';

// code

console.group(' --- OS information: --- ');
console.log(`Type of OS: ${os.type()}${os.arch}`);
console.log(`Type of platform: ${os.platform()}`);
console.log(`Total memory: ${os.totalmem}. And free memory: ${os.freemem}`);
console.log(`System active time: ${os.uptime()}`);
console.log(`Your home dir is: ${os.homedir}`);
console.log(`Your PC current version is: ${os.version}`);
console.groupEnd();

// other methods: os.endianness, os.EOL, etc.