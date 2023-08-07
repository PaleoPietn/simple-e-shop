# Frontend - Interview Coding Task

This directory contains the frontend code for the interview coding task. The frontend is built using Next.js 13 with TypeScript and React.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To start the frontend server, follow these steps:

1. Make sure you have Node.js and npm installed on your system.
2. Navigate to the frontend directory from the root of the repository.
3. Install the dependencies by running the following command:

```bash
npm install
```

4. Once the dependencies are installed, start the frontend server using the following command:

```bash
npm run dev
```

This will start the development server, and the frontend will be accessible at [`http://localhost:3000`](http://localhost:3000).

## Running Tests
The frontend code is tested using Jest. To run the tests, use the following command:
```bash
npm run test
```

## Test Coverage
Please note that the test coverage for this project is currently lackluster. Due to the use of Next.js 13 for the first time, setting up comprehensive test coverage became challenging, and time constraints limited the extent of testing.

## Project Structure
- Components: All components used in the frontend can be found in the `/app/component` folder.
- Routing: The routing for the frontend is implemented using the new Next.js 13 app routing feature. Each folder represents its own routing, and the `page.ts` file in each folder specifies the corresponding route. For example, the `page.ts` file in the `/app` folder represents the root route (`./`), and the `page.ts` file in the `/cart` folder represents the `/cart/` route.
- State Management: Redux was used for state management in this project.


## Additional Notes
The frontend code mainly consists of Next.js 13, TypeScript, and React, with Redux for state management and Jest for testing. The `npm run dev` command starts the development server, and the `npm run test` command runs the test suite.

Please feel free to explore the code in the `/frontend` directory.