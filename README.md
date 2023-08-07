# Lovoo Interview Coding Task - Simple Online Shop

This repository contains the coding task for the Lovoo interview. The objective of this project is to build a **simple online shop** that displays a list of items with their product title, description, and thumbnail picture. Users should be able to add any number of items to a shopping cart. Please note that there is no requirement for a "checkout" functionality, and the shopping cart should only persist for the duration of the session.

The shop items will be provided by a REST API that delivers the product information to the client. You can use `dummyjson.com/product` as a source for some sample products. The design should be minimal and neat, and there is no need for an elaborate design. The primary goal is to create a functional online shop with a focus on simplicity.

## Scope of the Project

The project involves building a simple online shop with the following features:

- Display a list of items with product title, description, and thumbnail picture.
- Allow users to add any number of items to a shopping cart.
- Utilize a REST API to fetch product information.
- Implement the frontend using TypeScript + React (Next.js 13) and the backend in Go.
- Use any necessary libraries but avoid unnecessary library bloat.

## Technology Used

Frontend:
- Next.js 13 with app routing
- TypeScript

Backend:
- Go

## Getting Started

To run the frontend or backend, please refer to the respective `readme` files in the `./frontend/` or `./backend/` folders for detailed instructions.

**Frontend:** The frontend is built using Next.js and TypeScript. To start the frontend server, navigate to the `frontend` directory and run the following command:

```bash
npm run dev
```

**Backend:** The backend is implemented in Go. To start the backend server, navigate to the backend directory and run the following command:

```bash
go run ./cmd/main.go
```

---

Feel free to explore the frontend and backend folders for more information on the project structure and specific instructions.
