# 04-directory-listing

This practice is a **Command Line Interface (CLI)**.

This script reads a directory given from `process.argv[2]` and returns its content (files and directories).
For each entry, it returns information such as if it is a file or a directory, its name and its size in formatted bytes, kilobytes, megabytes or gigabytes.

## Concepts practiced

- Async/await
- Read filesystem entries
- Handle OS errors
- Combine `node:fs` and `node:path`
- Improve CLI design

## Usage

``` bash
node index.js
node index.js ./a-directory