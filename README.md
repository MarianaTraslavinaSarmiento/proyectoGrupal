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