# 06-routing-basics

This practice is a basic HTTP server with **routes** with a port given from a `.env` file.

This project also focuses on the **Single Responsibility Principle (SRP)** by having two different JavaScript files besides `index.js`:
- `routes.js`: contains the allowed routes and methods. Any other route returns a `404 Not Found` response. Any method other than `GET` returns a `405 Method Not Allowed` response.

- `handlers.js`: contains the content to return in each case wether as JSON or plain text.

## Concepts practiced

- Work with `.env` files
- Apply the Single Responsibility Principle by separating routing and handlers
- Work with routing

## Usage

``` bash
node index.js