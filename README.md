# Todo Management Application

This is a full-stack Todo Management Application built with Node.js, Express, MongoDB, and React. It allows users to create projects, manage todos within projects, and export project summaries as GitHub Gists.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete projects
- Create, read, update, and delete todos within projects
- Mark todos as pending or completed
- Export project summaries as secret GitHub Gists

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- GitHub account (for Gist creation)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/mannilmuhsin/HATIO.git
   cd HATIO
   ```

2. Install dependencies for both backend and frontend:
   ```
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GITHUB_TOKEN=your_github_personal_access_token
   ```

4. Create a `.env` file in the `frontend` directory with the following content:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   nodemon server.js
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.


