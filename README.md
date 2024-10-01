## Students:

```js
Diana Carolina Moreno Cárdenas
Mariana Traslaviña Sarmiento
David Steven Romero Serrano
Samuel Enrique Suarez Estupiñan
```



# **Craft Buying and Selling Application**


The project involves the development of a Craft Buying and Selling Application. The goal of this application is to connect artisans from Bucaramanga with buyers interested in unique and authentic handcrafted products. The platform will be commissioned and managed by Campuslands, a company dedicated to promoting and marketing local, handcrafted, and technological products.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).



## Project structure

The project is divided into two main parts:

- Frontend: `vue-app` (Vue.js with Vite)

- Backend: `server` (Node.js)

  

## Prerequisites

- Node.js (recommended version)
- npm (usually comes with Node.js)
- MongoDB



## Configuration

### Backend (node-server)

1. Navigate to the `server` folder:
   ```
   cd server
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the `node-server` directory with the following variables:

   ```
   NODE_ENV=development
   ALLOWED_ORIGIN=http://localhost:5173
   MONGODB_URI=
   SESSION_SECRET=
   
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   
   DISCORD_CLIENT_ID=
   DISCORD_CLIENT_SECRET=
   
   LINKEDIN_CLIENT_ID=
   LINKEDIN_CLIENT_SECRET=
   
   REDIS_URL=
   
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   ```
   
   Make sure to fill in the missing values.
   
   

### Frontend (vue-app)

1. Navigate to the `vue-app` folder:
   ```
   cd vue-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root of the `vue-app` directory with the following variables:

   ```
   VITE_API_URL=http://localhost:3001/api
   VITE_SERVER_CHAT=http://localhost:3001
   ```
   
   Fill in the values according to your settings.
   
   

## Project Execution

### Backend

In the `server` folder, run:

```
npm run dev
```



### Frontend

In the `vue-app` folder, run:

```
npm run dev
```



## Folder Structure

```
proyectoGrupal/
├── server/                # Backend directory
│   └── src/               # Contains the main logic of the server
│       ├── services/      # Business logic (Controllers)
│       ├── uploads/       # Uploaded files (Models)
│       ├── utils/         # Utility functions
│       ├── app.js         # Entry point for the server
│       ├── package.json    # Dependencies and scripts for the backend
│       └── package-lock.json # Lock file for exact dependency versions
├── vue-app/               # Frontend directory built with Vue.js
│   ├── .vite/             # Vite-generated files for caching and configuration
│   ├── node_modules/      # Installed dependencies for the frontend
│   ├── public/            # Static files accessible to the public
│   └── src/               # Source code of the Vue application
│       ├── assets/        # Static resources (images, styles)
│       ├── components/     # Reusable Vue components (Views)
│       ├── router/        # Route configuration (Controllers)
│       ├── stores/        # Global state management (Models)
│       ├── views/         # Main pages (Views)
│       ├── App.vue        # Root component (View)
│       ├── main.js        # Entry point for the app
│       ├── index.html     # Main HTML page
│       ├── vite.config.js  # Vite configuration file
│       └── package.json    # Dependencies for the frontend
├── .gitignore             # Files and directories to be ignored by Git
└── README.md              # Project documentation

```



### Installations required on the Frontend

- **EmailJS**: Client library to send emails using EmailJS service directly from the browser.

  ```js
  npm i @emailjs/browser
  ```

- **Axios**: Promise-based HTTP client for making requests to external APIs.

  ```js
  npm i axios
  ```

- **Pinia**: State management library for Vue.js, providing a simple and intuitive API.

  ```js
  npm i pinia
  ```

- **Socket.IO Client**: Library for real-time, bidirectional communication between clients and servers.

  ```js
  npm i socket.io-client
  ```

- **Vue**: The progressive JavaScript framework for building user interfaces.

  ```js
  npm i vue
  ```

- **Vue Router**: The official router for Vue.js, enabling navigation between different views or components.

  ```js
  npm i vue-router
  ```

- **Vue Toastification**: A library for displaying toast notifications in Vue applications.

  ```js
  npm i vue-toastification
  ```

### Development Dependencies

- **ESLint Patch**: A package that provides a patch for ESLint to improve compatibility with various configurations.

  ```js
  npm i --save-dev @rushstack/eslint-patch
  ```

- **Vite Plugin for Vue**: Official Vite plugin for compiling Vue single-file components.

  ```js
  npm i --save-dev @vitejs/plugin-vue
  ```

- **ESLint Config Prettier**: An ESLint configuration that turns off all rules that are unnecessary or might conflict with Prettier.

  ```js
  npm i --save-dev @vue/eslint-config-prettier
  ```

- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

  ```js
  npm i --save-dev eslint
  ```

- **ESLint Plugin for Vue**: A plugin that provides linting rules for Vue.js applications.

  ```js
  npm i --save-dev eslint-plugin-vue
  ```

- **Prettier**: An opinionated code formatter that enforces a consistent style in your code.

  ```js
  npm i --save-dev prettier
  ```

- **Sass Embedded**: A library that provides support for compiling Sass files.

  ```js
  npm i --save-dev sass-embedded
  ```

- **Vite**: A fast build tool that serves your code via native ESM. It’s optimized for speed and performance.

  ```js
  npm i --save-dev vite
  ```

- **Vite Plugin for Vue Devtools**: A plugin that enables Vue.js devtools integration with Vite.

  ```js
  npm i --save-dev vite-plugin-vue-devtools
  ```

### Scripts

- **Dev**: Starts the development server with Vite.

  ```js
  npm run dev
  ```

- **Build**: Compiles the application for production using Vite.

  ```js
  npm run build
  ```

- **Preview**: Previews the production build locally.

  ```js
  npm run preview
  ```

- **Lint**: Runs ESLint to check for code quality issues and automatically fix them.

  ```js
  npm run lint
  ```

- **Format**: Formats the source code using Prettier.

  ```js
  npm run format
  ```



### Required Installations on the Backend

- **Inquirer Prompts**: A collection of interactive command-line prompts for Node.js applications, allowing for user input.

  ```js
  npm i @inquirer/prompts
  ```

- **Socket.IO Redis Adapter**: A Redis adapter for Socket.IO that enables scalability of WebSocket connections across multiple server instances.

  ```js
  npm i @socket.io/redis-adapter
  ```

- **Bcrypt**: A library for hashing passwords securely, helping to protect user credentials.

  ```js
  npm i bcrypt
  ```

- **Bull**: A powerful queue package for handling distributed jobs and messages in Node.js applications.

  ```js
  npm i bull
  ```

- **Connect-Redis**: A Redis session store for Express, allowing session data to be stored in Redis for better scalability.

  ```js
  npm i connect-redis
  ```

- **Cloudinary**: A cloud service that offers image and video management capabilities, allowing you to upload, store, and manipulate media assets.

  ```js
  npm i cloudinary
  ```

- **Cookie Parser**: A middleware for parsing cookies in Express applications.

  ```js
  npm i cookie-parser
  ```

- **CORS**: A package that provides a middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.

  ```js
  npm i cors
  ```

- **Express**: The essential web framework for building the server application.

  ```js
  npm i express
  ```

- **Express Session**: Middleware for managing user sessions in Express applications.

  ```js
  npm i express-session
  ```

- **Express Validator**: A set of middleware for validating and sanitizing input data in Express routes.

  ```js
  npm i express-validator
  ```

- **Ioredis**: A robust Redis client for Node.js, providing a simple API for interacting with Redis.

  ```js
  npm i ioredis
  ```

- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying the interaction with MongoDB databases.

  ```js
  npm i mongoose
  ```

- **Multer**: Middleware for handling multipart/form-data, primarily used for uploading files.

  ```js
  npm i multer
  ```

- **Passport**: A middleware for authentication in Node.js applications, supporting various authentication strategies.

  ```js
  npm i passport
  ```

- **Passport Discord**: A Passport strategy for authenticating users via Discord.

  ```js
  npm i passport-discord
  ```

- **Passport Google OAuth20**: A Passport strategy for authenticating users via Google OAuth 2.0.

  ```js
  npm i passport-google-oauth20
  ```

- **Passport LinkedIn OAuth2**: A Passport strategy for authenticating users via LinkedIn OAuth 2.0.

  ```js
  npm i passport-linkedin-oauth2
  ```

- **Passport Local**: A Passport strategy for authenticating users with a username and password.

  ```js
  npm i passport-local
  ```

- **Socket.IO**: A library for real-time communication between clients and servers using WebSockets.

  ```js
  npm i socket.io
  ```

- **Socket.IO Client**: The client-side library for Socket.IO, enabling real-time communication from the browser.

  ```js
  npm i socket.io-client
  ```

- **Socket.IO Redis**: A package for integrating Socket.IO with Redis for handling scalable real-time applications.

  ```js
  npm i socket.io-redis
  ```

### Scripts

- **Dev**: Starts the application in development mode with automatic reloading of changes. It uses the `.env` file for environment variables.

  ```js
  npm run dev
  ```



## Key Features

### User Management

- **Registration and Login:** Users (artisans and buyers) can register and access their accounts.

### Buyer Profiles:

- **Information Update:** Buyers can update their personal information, such as name, address, and email.

- **Profile Picture Update:** Buyers can change their profile pictures.

- **Favorites List:** Buyers can mark artisanal products and workshops as favorites and view this list in their profile.

- **Purchase History:** Buyers can review their purchase history, including details of each order.

- **Registered Workshops:** Buyers can see the workshops they are enrolled in.

- **Coupon List:** Buyers can view and manage the coupons available for redemption.

- **Chat with Artisans:** Buyers can initiate and maintain a chat with artisans related to the workshops they are enrolled in.
Product Management

- **Product Listing:** Product information will be manually uploaded to the database by the system administrator. Each product includes name, description, price, category, photos, and available stock.

- **Product Visualization:** Buyers can view listed products with details and photos.

- **Discount Coupons:** Artisans can create coupons that offer discounts on products.
Search and Filtering

- **Product Search:** Allows searching for products by name or description.

- **Product Filtering:** Filters products by defined categories (e.g., ceramics, textiles, jewelry).

- **Workshop Filtering:** Allows searching and filtering of artisanal workshops by location, type of craft, modality, and other relevant criteria.


### Cart and Checkout Process

- **Shopping Cart:** Buyers can add products to the cart and review details before proceeding to payment.

- **Coupon Application:** Buyers can enter coupon codes assigned to their profile or general coupon codes available.
Payment Process: Optional integration with a payment gateway to securely complete transactions.
Communication

- **Direct Messaging:** Buyers and artisans can exchange messages to resolve doubts or discuss details about products.
Artisanal Workshops

- **Workshop Profile:** Information about the modality (in-person or virtual), dates, duration, materials provided and required.

- **Documentary on Workshops:** Offers a link or integration to view a documentary showcasing the artisanal process, the history of the workshop, or interviews with artisans.



## Technologies Used




### Frontend:

- Framework: Vue.js (Composition API)
- Styles: CSS/SCSS for responsive design.
- Libraries: Vue Router for navigation and Pinia for state management.


### Backend:

- Language: JavaScript (Node.js)
- Framework: Express.js to create the RESTful API.
- Database: MongoDB, using Mongoose as ODM.
- Authentication: Express Sessions to manage sessions and user permissions.


### Tools:

- Git for version control.
- Postman for API testing.
- Netlify and Render for deployment.
- Jira for task management.



# Product API Documentation



1. **Get All Products**
* **Method:** `GET`
* **Route:** `/`
* **Description:** Retrieves a list of all products.
* Responses:
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "name": "string",
       "description": "string",
       "price": "number",
       "category": "string",
       "stock": "number"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving products",
     "error": "string"
   }
   ```

2. **Get Product by ID**
* **Method:** `GET`
* **Route:** `/one/:id`
* **Description:** Retrieves a specific product by its ID.
* URL Parameters:
   * `id`: ID of the product to retrieve.
* Responses:
   * Success (200 OK):
   ```json
   {
     "id": "string",
     "name": "string",
     "description": "string",
     "price": "number",
     "category": "string",
     "stock": "number"
   }
   ```
   * Not Found (404 Not Found):
   ```json
   {
     "message": "Product not found"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving product",
     "error": "string"
   }
   ```

3. **Get Offers**
* **Method:** `GET`
* **Route:** `/offers`
* **Description:** Retrieves a list of products currently on offer.
* Responses:
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "name": "string",
       "description": "string",
       "originalPrice": "number",
       "discountedPrice": "number",
       "category": "string",
       "stock": "number"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving offers",
     "error": "string"
   }
   ```

Note: All routes are handled asynchronously using the `asyncHandler` middleware to manage potential errors.



# Authentication API Documentation



1. **User Login**
* **Method:** `POST`
* **Route:** `/login`
* **Description:** Authenticates a user with their credentials.
* **Middleware:** 
   * `validateLogin()`: Validates login input
   * `handleValidationErrors`: Handles validation errors
   * `passport.authenticate("local")`: Local authentication strategy
* **Body Parameters:**
   ```json
   {
     "email": "string",
     "password": "string"
   }
   ```
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "message": "Login successful"
   }
   ```
   * Validation Error (400 Bad Request):
   ```json
   {
     "errors": [
       {
         "msg": "string",
         "param": "string",
         "location": "body"
       }
     ]
   }
   ```
   * Authentication Error (401 Unauthorized):
   ```json
   {
     "message": "Authentication failed"
   }
   ```

2. **User Signup**
* **Method:** `POST`
* **Route:** `/signup`
* **Description:** Registers a new user.
* **Middleware:** 
   * `validateSignup()`: Validates signup input
   * `handleValidationErrors`: Handles validation errors
* **Body Parameters:**
   ```json
   {
     "email": "string",
     "password": "string",
     "name": "string"
   }
   ```
* **Responses:**
   * Success (201 Created):
   ```json
   {
     "message": "User created successfully",
     "user": {
       "id": "string",
       "email": "string",
       "name": "string"
     }
   }
   ```
   * Validation Error (400 Bad Request):
   ```json
   {
     "errors": [
       {
         "msg": "string",
         "param": "string",
         "location": "body"
       }
     ]
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error creating user",
     "error": "string"
   }
   ```

3. **User Logout**
* **Method:** `GET`
* **Route:** `/logout`
* **Description:** Logs out the currently authenticated user.
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "message": "Logged out successfully"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error logging out",
     "error": "string"
   }
   ```

4. **Verify Authentication**
* **Method:** `GET`
* **Route:** `/verify`
* **Description:** Verifies if the user is currently authenticated.
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "isAuthenticated": true,
     "user": {
       "id": "string",
       "email": "string",
       "name": "string"
     }
   }
   ```
   * Not Authenticated (401 Unauthorized):
   ```json
   {
     "isAuthenticated": false
   }
   ```

5. **Google Authentication**
* **Method:** `GET`
* **Route:** `/google`
* **Description:** Initiates Google OAuth authentication.
* **Middleware:** `passport.authenticate("google")`



6. **Google Authentication Callback**
* **Method:** `GET`
* **Route:** `/google/callback`
* **Description:** Handles the Google OAuth callback.
* **Middleware:** `passport.authenticate("google", redirects)`
* **Redirects:**
   * Success: `${process.env.ALLOWED_ORIGIN}/app/home`
   * Failure: `${process.env.ALLOWED_ORIGIN}/login`
   
   

7. **Discord Authentication**
* **Method:** `GET`
* **Route:** `/discord`
* **Description:** Initiates Discord OAuth authentication.
* **Middleware:** `passport.authenticate("discord")`



8. **Discord Authentication Callback**
* **Method:** `GET`
* **Route:** `/discord/callback`
* **Description:** Handles the Discord OAuth callback.
* **Middleware:** `passport.authenticate("discord", redirects)`
* **Redirects:**
   * Success: `${process.env.ALLOWED_ORIGIN}/app/home`
   * Failure: `${process.env.ALLOWED_ORIGIN}/login`

Note: All routes are handled asynchronously using the `asyncHandler` middleware to manage potential errors. The `handleValidationErrors` middleware is used to process and respond with validation errors where applicable.



# Shop API Documentation



1. **Get All Shops**
* **Method:** `GET`
* **Route:** `/`
* **Description:** Retrieves a list of all shops.
* **Responses:**
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "name": "string",
       "description": "string",
       "location": "string",
       "rating": "number",
       "createdAt": "string (ISO date)",
       "updatedAt": "string (ISO date)"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving shops",
     "error": "string"
   }
   ```

2. **Get Shop by ID**
* **Method:** `GET`
* **Route:** `/:id`
* **Description:** Retrieves a specific shop by its ID.
* **URL Parameters:**
   * `id`: ID of the shop to retrieve.
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "id": "string",
     "name": "string",
     "description": "string",
     "location": "string",
     "rating": "number",
     "createdAt": "string (ISO date)",
     "updatedAt": "string (ISO date)"
   }
   ```
   * Not Found (404 Not Found):
   ```json
   {
     "message": "Shop not found"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving shop",
     "error": "string"
   }
   ```

Note: All routes are handled asynchronously using the `asyncHandler` middleware to manage potential errors.



# User API Documentation



1. **Get User Profile**
* **Method:** `GET`
* **Route:** `/profile`
* **Description:** Retrieves the profile of the currently authenticated user.
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "id": "string",
     "username": "string",
     "email": "string",
     "profile_pic": "string (URL)",
     "createdAt": "string (ISO date)",
     "updatedAt": "string (ISO date)"
   }
   ```
   * Not Authenticated (401 Unauthorized):
   ```json
   {
     "message": "User not authenticated"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving user profile",
     "error": "string"
   }
   ```

2. **Update User Profile**
* **Method:** `PUT`
* **Route:** `/update`
* **Description:** Updates the profile of the currently authenticated user.
* **Middleware:** 
   * `validateUpdate()`: Validates update input
   * `handleValidationErrors`: Handles validation errors
   * `update.single("profile_pic")`: Handles file upload for profile picture
* **Body Parameters:**
   * Form-data:
     - `username`: string (optional)
     - `email`: string (optional)
     - `profile_pic`: file (optional)
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "message": "User updated successfully",
     "user": {
       "id": "string",
       "username": "string",
       "email": "string",
       "profile_pic": "string (URL)",
       "updatedAt": "string (ISO date)"
     }
   }
   ```
   * Validation Error (400 Bad Request):
   ```json
   {
     "errors": [
       {
         "msg": "string",
         "param": "string",
         "location": "body"
       }
     ]
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error updating user",
     "error": "string"
   }
   ```

3. **Add Product to Favorites**
* **Method:** `POST`
* **Route:** `/add-to-favorites`
* **Description:** Adds a product to the user's favorites list.
* **Middleware:** 
   * `validateAddToFavorites()`: Validates input
   * `handleValidationErrors`: Handles validation errors
* **Body Parameters:**
   ```json
   {
     "productId": "string"
   }
   ```
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "message": "Product added to favorites successfully"
   }
   ```
   * Validation Error (400 Bad Request):
   ```json
   {
     "errors": [
       {
         "msg": "string",
         "param": "string",
         "location": "body"
       }
     ]
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error adding product to favorites",
     "error": "string"
   }
   ```

4. **Get User's Favorite Products**
* **Method:** `GET`
* **Route:** `/favorites`
* **Description:** Retrieves the list of the user's favorite products.
* **Responses:**
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "name": "string",
       "description": "string",
       "price": "number",
       "image": "string (URL)"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving favorite products",
     "error": "string"
   }
   ```

5. **Subscribe to Workshop**
* **Method:** `POST`
* **Route:** `/subscribe-workshop`
* **Description:** Subscribes the user to a workshop.
* **Body Parameters:**
   ```json
   {
     "workshopId": "string"
   }
   ```
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "message": "Successfully subscribed to workshop"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error subscribing to workshop",
     "error": "string"
   }
   ```

6. **Unsubscribe from Workshop**
* **Method:** `POST`
* **Route:** `/unsubscribe-workshop`
* **Description:** Unsubscribes the user from a workshop.
* **Body Parameters:**
   ```json
   {
     "workshopId": "string"
   }
   ```
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "message": "Successfully unsubscribed from workshop"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error unsubscribing from workshop",
     "error": "string"
   }
   ```

7. **Get Subscribed Workshops**
* **Method:** `GET`
* **Route:** `/subscribed-workshops`
* **Description:** Retrieves the list of workshops the user is subscribed to.
* **Responses:**
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "title": "string",
       "description": "string",
       "date": "string (ISO date)",
       "instructor": "string"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving subscribed workshops",
     "error": "string"
   }
   ```

Note: All routes are handled asynchronously using the `asyncHandler` middleware to manage potential errors. The `handleValidationErrors` middleware is used to process and respond with validation errors where applicable.



# Workshop API Documentation



1. **Get All Workshops**
* **Method:** `GET`
* **Route:** `/`
* **Description:** Retrieves a list of all workshops.
* **Responses:**
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "title": "string",
       "description": "string",
       "date": "string (ISO date)",
       "instructor": "string",
       "capacity": "number",
       "currentParticipants": "number"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving workshops",
     "error": "string"
   }
   ```

2. **Get All Workshops with Store in Charge**
* **Method:** `GET`
* **Route:** `/with-store-in-charge`
* **Description:** Retrieves a list of all workshops including information about the store in charge.
* **Responses:**
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "title": "string",
       "description": "string",
       "date": "string (ISO date)",
       "instructor": "string",
       "capacity": "number",
       "currentParticipants": "number",
       "store": {
         "id": "string",
         "name": "string",
         "location": "string"
       }
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving workshops with store information",
     "error": "string"
   }
   ```

3. **Get Trending Workshops**
* **Method:** `GET`
* **Route:** `/trending`
* **Description:** Retrieves a list of trending workshops (criteria for "trending" may vary).
* **Responses:**
   * Success (200 OK):
   ```json
   [
     {
       "id": "string",
       "title": "string",
       "description": "string",
       "date": "string (ISO date)",
       "instructor": "string",
       "capacity": "number",
       "currentParticipants": "number",
       "trendingScore": "number"
     }
   ]
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving trending workshops",
     "error": "string"
   }
   ```

4. **Get Workshop by ID**
* **Method:** `GET`
* **Route:** `/:id`
* **Description:** Retrieves a specific workshop by its ID.
* **URL Parameters:**
   * `id`: ID of the workshop to retrieve.
* **Responses:**
   * Success (200 OK):
   ```json
   {
     "id": "string",
     "title": "string",
     "description": "string",
     "date": "string (ISO date)",
     "instructor": "string",
     "capacity": "number",
     "currentParticipants": "number",
     "store": {
       "id": "string",
       "name": "string",
       "location": "string"
     }
   }
   ```
   * Not Found (404 Not Found):
   ```json
   {
     "message": "Workshop not found"
   }
   ```
   * Internal Error (500 Internal Server Error):
   ```json
   {
     "message": "Error retrieving workshop",
     "error": "string"
   }
   ```

Note: All routes are handled asynchronously using the `asyncHandler` middleware to manage potential errors.