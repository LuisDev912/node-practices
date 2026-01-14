# 03-path-and-cli

This practice is a **Command Line Interface (CLI)**. 

This script reads a given relative path with `process.argv[2]` and then converts it into an **absolute path**.
Then, it shows information like the selected path, the resolved path, the parent path, and more information.

## Concepts practiced

- Reading command-line arguments
- Resolving relative and absolute paths
- Working with file system paths

## Note:

If no path providen, the script will use the current directory. The script also tells if there is a extension name detected.

## Usage

``` bash
node index.js