# Data Neuron Assessment

## Description

This repository contains the solution for the assessment task for the Full-Stack Engineer position at Data Neuron. The task involves creating a sign-in page with functionality to add, update, and count user data, along with integrating backend APIs to handle these operations.

## Technologies Used

- React.js for the frontend
- Express.js for the backend
- MongoDB for the database
- Axios for making HTTP requests

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Surajh09/Data-neuron-assessment.git
   ```

2. Install dependencies for both frontend and backend:

   ```
   cd Data-neuron-assessment/resizable-layout
   npm install

   cd /resizable-backend
   npm install
   ```

3. Start the backend server:

   ```
   npm start
   ```

4. Start the frontend development server:

   ```
   cd ..
   npm start
   ```

5. Access the application in your browser at `http://localhost:3000`.

## Backend API Endpoints

- `POST /api/add`: Adds user data to the database.
- `PUT /api/update`: Updates user data in the database.
- `GET /api/count`: Retrieves the count of user data from the database.

## Directory Structure

```
.
├── backend
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── index.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── SignInPage.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## Task Completion

- [x] Create a sign-in page layout
- [x] Implement functionality to add user data
- [x] Implement functionality to update user data
- [x] Implement functionality to count user data
- [x] Integrate backend APIs for add, update, and count operations
- [x] Ensure responsiveness of the sign-in page
- [ ] Deploy the application (Deployment pending)

## Author

Suraj Hemnani

---

Please let me know if you need any further modifications or additions to the README.md file.
