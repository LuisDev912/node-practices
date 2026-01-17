# 05-http-basics

This practice is a **basic HTTP server** built with `node:http` module to create a server.

The server handles simple HTTP requests, validates the request method and URL, and returns appropriate responses using correct HTTP status codes. It supports plain text and JSON responses.

## Available routes

| Method | Route    | Response                          | Status |
|-------|----------|-----------------------------------|--------|
| GET   | `/`      | Plain text welcome message        | 200    |
| GET   | `/health`| JSON health check                 | 200    |

Any other route returns a `404 Not Found` response.  
Any method other than `GET` returns a `405 Method Not Allowed` response.

## Concepts practiced

- Work with an HTTP server
- Return information in JSON and plain text
- Work with HTTP status codes
- Method and URL validation

## Usage

``` bash
node index.js