# STATION GUIDE : YOUR PLATFORM GUIDE 

welcome to repository of Station Guide 

- To get to know about Station Guide Check : - [StationGuide.md](https://github.com/dhairyagothi/StationGuide/blob/f2d4795cf3d3c57ffafb6ce007f47173d7010b1e/StationGuide.md)
- To check UI Prototype Figma design :- [StationGuideFigma.md](https://github.com/dhairyagothi/StationGuide/blob/f2d4795cf3d3c57ffafb6ce007f47173d7010b1e/StationGuideFigma.md)

# Using Station Guide

This project utilizes React for the frontend and Express for the backend, providing a robust foundation for your web application development.

## Prerequisites

To get started, you'll need the following:

- Node.js (version 14 or later): https://nodejs.org/en/
- npm (Node Package Manager) comes bundled with Node.js

## Getting Started


### 1. Clone the Repository


**Understanding Cloning:**

Cloning creates a local copy of the project on your computer, allowing you to work on it independently. This local copy is a mirror image of the original repository on GitHub or similar platforms.


Use Git to clone this repository into your local development environment:

```bash
git clone https://github.com/dhairyagothi/StationGuide.git
```

**After Cloning**
You will see this interface in your system :

![image](https://github.com/user-attachments/assets/20961ae0-2d63-45e7-9aa4-9adc01fcc4d0)



### 3. Running the Development Server

## Frontend:

- Open a terminal or command prompt window.
- Navigate to the frontend directory:
```Bash
cd frontend
```
- Start the frontend development server :
```Bash
npm run dev
```

This will typically launch the React application on http://localhost:3000 (or the specified port) in your browser.

## Backend:

- Open another terminal or command prompt window (separate from the frontend window).
- Navigate to the backend directory:
```Bash
cd backend
```

Start the backend development server (typically using nodemon server.js or a similar command):
```Bash
npm run start
```


### Project Structure 
```
StationGuide/
├── frontend/
│   ├── src/  # React application source code
│   ├── public/  # Static assets for the frontend (e.g., images, fonts)
│   ├── package.json  # Frontend dependencies
│   └── ...  # Other frontend-related files (e.g., configuration files)
├── backend/
│   ├── server.js  # Express server entry point
│   ├── models/  # Data model definitions (optional)
│   ├── routes/  # API endpoints definitions
│   ├── config/  # Configuration files (e.g., database connection)
│   ├── package.json  # Backend dependencies
│   └── ...  # Other backend-related files (e.g., middleware)
├── .env  # Environment variables for sensitive information (optional)
├── using.md  # This file
└── ...  # Other project configuration files (e.g., .gitignore)
```
