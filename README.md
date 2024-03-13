# TravelPlaces Full Stack Website

Welcome to the TravelPlaces Full Stack Website! This platform integrates both frontend and backend components, enabling users to log their visited destinations and explore places recorded by other users.

## Getting Started

To set up and run the TravelPlaces Full Stack Website on your local machine, follow these steps:

1. Clone this repository.
2. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
3. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
4. Start the backend server by running `npm start` in the `backend` directory.
5. Start the frontend server by running `npm start` in the `frontend` directory.

Once both the backend and frontend servers are running, you can access the TravelPlaces website in your web browser.

## Backend

The backend of this project is structured as follows:

### Controllers
- `places-controllers.js`: Contains controllers for managing travel places.
- `users-controllers.js`: Contains controllers for managing user accounts.

### Models
- `http-error.js`: Defines custom HTTP error classes.
- `place.js`: Represents the model for travel places.
- `user.js`: Represents the model for user accounts.

### Routes
- `places-routes.js`: Defines routes for handling travel places.
- `users-routes.js`: Defines routes for handling user accounts.

### Util
- `location.js`: Contains utility functions for handling location-related operations.

## Frontend

The frontend of this project is structured as follows:

### Components
- `pages`: Contains page components for different sections of the website.
- `shared`: Contains shared components used across multiple pages.

### Context
- `auth-context.js`: Manages authentication-related context for the frontend.

### Hooks
- `form-hook.js`: Custom hook for handling form-related operations.
- `http-hook.js`: Custom hook for handling HTTP requests.

### Util
- `validators.js`: Contains utility functions for form validation.

### User
- `components`: Contains components related to user management.
- `pages`: Contains page components related to user authentication and management.
