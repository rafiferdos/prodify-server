# Prodify - Backend

This repository contains the backend code for the **Prodify** e-commerce platform. The backend is built using **Node.js**, **Express**, and **MongoDB** to serve product data, handle authentication, and perform other server-side operations.

The frontend of the application is available [here](https://prodify-45241.web.app/).

## Features

- **Product Management**: API endpoints to retrieve product data, search, filter by category, and sort products.
- **Search Functionality**: Products can be searched by name using a case-insensitive search query.
- **Category Filter**: Products can be filtered by category.
- **Pagination**: The API supports pagination for efficient data loading.
- **User Authentication**: Firebase authentication integration for secure user management.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for handling HTTP requests and building APIs.
- **MongoDB**: NoSQL database for storing product and user data.
- **Cors**: Middleware for handling cross-origin requests.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js installed (version 16.x or higher recommended)
- MongoDB Atlas or local MongoDB setup
- Firebase project set up for authentication

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/rafiferdos/prodify-server.git
    cd prodify-server
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file** and add your environment variables:
    ```bash
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/prodify?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret
    FIREBASE_API_KEY=<your-api-key>
    FIREBASE_AUTH_DOMAIN=<your-auth-domain>
    ```

4. **Run the server**:
    ```bash
    npm start
    ```

    The server will start on `http://localhost:5000`.

## Project Structure

```bash
prodify-backend/
├── controllers/        # Controllers for handling logic for different routes
├── models/             # Mongoose models for Product, User, etc.
├── routes/             # API routes for products, users, etc.
├── middlewares/        # Authentication and other middleware
├── server.js           # Entry point for the server
├── .env                # Environment variables
├── package.json        # Project configuration and dependencies
└── README.md           # This file
```

## Contact

**Rafi Ferdos**  
GitHub: [rafiferdos](https://github.com/rafiferdos)  
Live Site: [https://prodify-45241.web.app/](https://prodify-45241.web.app/)  
Email: rafiferdos@gmail.com
