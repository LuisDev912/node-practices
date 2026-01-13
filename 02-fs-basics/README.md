# 02-fs-basics

This practice is orientated on learning the basics of the **Node.js file system** using the `node:fs/promises` module.
The script reads the content of a text file, transforms it, creates output directories, and writes the result to a new file.
It also uses **node:path** to handle file paths correctly across different operating systems (Windows, Linux, macOS).

## Concepts practiced

- Reading files asynchronously
- Writing files
- Creating directories
- Basic error handling with async/await
- Working with paths and file extensions

## Usage

``` bash
node index.js