# JS-React-frontend-hoopsDB

This repository contains a React.js frontend application that interacts with the hoopsDB backend API provided by the [Springboot-MongoDB-Webscraper-hoopsDB](https://github.com/DrPavel81/Springboot-MongoDB-Webscraper-hoopsDB) project. The project demonstrates setting up a frontend application with React.js, fetching data from a REST API, and displaying basketball data.

## Technologies Used

- React.js
- Axios (for HTTP requests)
- Bootstrap (for styling)

## Requirements

- Node.js
- npm (Node Package Manager)

## Setup

1. **Clone the repository.**

    ```shell
    git clone https://github.com/DrPavel81/JS-React-frontend-hoopsDB.git
    cd JS-React-frontend-hoopsDB
    ```

2. **Install dependencies.**

    ```shell
    npm install
    ```

3. **Update API base URL.**

    Update the `src/api.js` file with the base URL of the hoopsDB backend API (`Springboot-MongoDB-Webscraper-hoopsDB`).

    ```javascript
    import axios from 'axios';

    const api = axios.create({
        baseURL: 'http://localhost:8080/api', // Update with the base URL of your hoopsDB backend API
    });

    export const getAllPlayers = () => api.get('/players');
    export const getPlayerById = (id) => api.get(`/players/${id}`);
    // Add more API calls as needed

    export default api;
    ```

4. **Run the application.**

    ```shell
    npm start
    ```

    The application will run on `http://localhost:3000`.

## Project Structure

- `src/components`: Contains React components.
- `src/api.js`: API configuration and calls.
- `public`: Contains static assets and `index.html`.

## Using the Application

Once the application is running, you can access it at `http://localhost:3000` in your web browser. The frontend will fetch data from the hoopsDB backend API and display it accordingly.

## Integrating with hoopsDB Backend API

The frontend interacts with the hoopsDB backend API provided by the [Springboot-MongoDB-Webscraper-hoopsDB](https://github.com/DrPavel81/Springboot-MongoDB-Webscraper-hoopsDB) project. Ensure that the backend API is running and accessible from the frontend application.

To set up the backend API:

1. **Clone the backend repository.**

    ```shell
    git clone https://github.com/DrPavel81/Springboot-MongoDB-Webscraper-hoopsDB.git
    cd Springboot-MongoDB-Webscraper-hoopsDB
    ```

2. **Build and run the backend application.**

    ```shell
    ./mvnw spring-boot:run
    ```

    The backend API will be accessible at `http://localhost:8080/api`.

This project provides a simple React.js frontend for interacting with the hoopsDB backend API (`Springboot-MongoDB-Webscraper-hoopsDB`). It demonstrates basic data fetching and rendering techniques in React.js.
