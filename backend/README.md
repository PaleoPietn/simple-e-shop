# Backend - Interview Coding Task
This directory contains the backend code for the interview coding task. The backend is implemented in Go and is responsible for providing the product information to the frontend through a REST API.

## Getting Started
To run the backend server, follow these steps:

1. Make sure you have Go installed on your system.
2. Navigate to the backend directory from the root of the repository.
3. Run the backend server using the following command:
```bash
go run cmd/main.go
```

The backend server will start, and it will be accessible at [`http://localhost:8000/products`](http://localhost:8080).

## Running Tests
To run the tests for the backend code, use the following command:

```bash
go test internal/products
```

Testing for the backend was done using the standard Go testing package.

## Project Structure
The backend code follows the project layout guidelines specified in this [`repository`](https://github.com/golang-standards/project-layout). However, due to time constraints, all the backend code is organized in one file.

The backend uses the `net/http` package to interact with the `dummyjson.com` service to fetch product data. It performs cleaning steps on the data and hosts it again to serve the frontend.
