<<<<<<< Updated upstream
<<<<<<< Updated upstream
# Travlr Getaways Backend and Customer-Facing Web Application

Travlr Getaways is a full stack travel project built for CS 465. This repository contains the Express and Node.js backend, the customer-facing website rendered with Handlebars, the REST API, MongoDB integration, and JWT-based authentication middleware. The Angular administrator single-page application (SPA) was developed separately in its own project folder and tested against this backend.

## Overview

This project demonstrates backend and full stack web application development using Express, MongoDB, Mongoose, Handlebars, and secured REST API endpoints. The customer-facing side renders travel content through Express routes and templated views, while the backend API supports trip retrieval and protected administrative CRUD operations.

## What This Repository Contains

- Customer-facing Express website
- Handlebars-rendered travel pages
- RESTful API for trip data
- MongoDB database integration with Mongoose
- JWT-based authentication for protected admin actions
- CRUD operations for trip records
- Separation of routes, controllers, models, and middleware

## Related Project Structure

This repository is the **backend/customer-facing project**.

In the larger local CS-465 folder, the project was organized as two separate project folders:

- `travlr-express` — backend, customer-facing site, API, database integration, authentication
- `travlr-admin` — Angular administrator SPA used to manage trip data through this backend

The Angular admin project is not stored inside this repository, but it was built and tested against this backend.

## Tech Stack

- MongoDB
- Express
- Node.js
- Mongoose
- JSON Web Token authentication
- Handlebars
- HTML / CSS / JavaScript

## Repository Structure

- `app_server/` — customer-facing Express routes, controllers, and views
- `app_api/` — REST API routes, controllers, models, and auth middleware
- `public/` — static assets
- `data/` — seed data and supporting JSON content
- `app.js` — application configuration and middleware setup
- `package.json` — project dependencies and scripts

## Core Features

### Customer-Facing Website

The public side of the application uses Express and Handlebars to render travel content for users browsing destinations and trip information.

### REST API

The backend exposes API endpoints that allow trip data to be retrieved and managed.

### Authentication

Administrative data-changing operations are protected through login and JWT bearer token authentication.

### MongoDB Integration

Trip and user data are stored in MongoDB and accessed through Mongoose schemas and models.

## Core API Endpoints

### Public Endpoints

- `GET /api/trips` — retrieve all trips
- `GET /api/trips/:tripCode` — retrieve a single trip by code

### Authentication Endpoints

- `POST /api/register` — register a user and return a token
- `POST /api/login` — authenticate a user and return a token

### Protected Administrative Endpoints

- `POST /api/trips` — add a trip
- `PUT /api/trips/:tripCode` — update a trip
- `DELETE /api/trips/:tripCode` — delete a trip

These protected endpoints require a valid bearer token in the `Authorization` header.

## Local Development

### Back End

Install dependencies:

```bash
npm install
```

Start the server:
=======
# Travlr Getaways Express Customer-Facing Application

Travlr Getaways is a travel web application project built for CS 465. This `main` branch contains the Express-based customer-facing application, including the server configuration, routes, views, and public assets used to render the website.

Additional full stack project work is represented elsewhere in the same repository:

- `admin-module6` — Angular administrator SPA
- `module8` — final reflection README for the completed full stack project

## Overview

This branch presents the customer-facing Express application for Travlr Getaways. It uses Express, Handlebars, HTML, CSS, and JavaScript to render travel content through server-side routes and views.

The broader project also included a separate Angular administrator SPA and secured backend/API work completed in other project stages, but this branch specifically reflects the Express customer-facing portion of the project.

## What This Branch Contains

- Express application configuration
- Server-side routing
- Handlebars-rendered views
- Public-facing travel website assets
- Static resources including stylesheets and images

## Repository Structure

- `bin/` — startup scripts
- `public/` — static assets such as CSS, images, and client-side resources
- `routes/` — Express route definitions
- `views/` — Handlebars templates and rendered views
- `app.js` — Express application setup and middleware configuration
- `package.json` — project dependencies and scripts
- `package-lock.json` — locked dependency versions

## Tech Stack

- Node.js
- Express
- Handlebars
- HTML
- CSS
- JavaScript

## Local Development

Install dependencies:

```bash
npm install
```

Start the application:
>>>>>>> Stashed changes
=======
# Travlr Getaways Express Customer-Facing Application

Travlr Getaways is a travel web application project built for CS 465. This `main` branch contains the Express-based customer-facing application, including the server configuration, routes, views, and public assets used to render the website.

Additional full stack project work is represented elsewhere in the same repository:

- `admin-module6` — Angular administrator SPA
- `module8` — final reflection README for the completed full stack project

## Overview

This branch presents the customer-facing Express application for Travlr Getaways. It uses Express, Handlebars, HTML, CSS, and JavaScript to render travel content through server-side routes and views.

The broader project also included a separate Angular administrator SPA and secured backend/API work completed in other project stages, but this branch specifically reflects the Express customer-facing portion of the project.

## What This Branch Contains

- Express application configuration
- Server-side routing
- Handlebars-rendered views
- Public-facing travel website assets
- Static resources including stylesheets and images

## Repository Structure

- `bin/` — startup scripts
- `public/` — static assets such as CSS, images, and client-side resources
- `routes/` — Express route definitions
- `views/` — Handlebars templates and rendered views
- `app.js` — Express application setup and middleware configuration
- `package.json` — project dependencies and scripts
- `package-lock.json` — locked dependency versions

## Tech Stack

- Node.js
- Express
- Handlebars
- HTML
- CSS
- JavaScript

## Local Development

Install dependencies:

```bash
npm install
```

Start the application:
>>>>>>> Stashed changes

```bash
npm start
```

<<<<<<< Updated upstream
<<<<<<< Updated upstream
Back-end URL:
=======
Application URL:
>>>>>>> Stashed changes
=======
Application URL:
>>>>>>> Stashed changes

```text
http://localhost:3000
```

<<<<<<< Updated upstream
<<<<<<< Updated upstream
## Companion Admin Application

The Angular administrator single-page application (SPA) for this project is maintained in the same GitHub repository on the `admin-module6` branch. It was developed as a separate project folder within the larger local CS-465 workspace and connected to this backend during testing.

It was used to verify authenticated trip management workflows including:
=======
=======
>>>>>>> Stashed changes
## Related Branches in This Repository

### Angular Admin Application

The Angular administrator SPA for this project is maintained on the `admin-module6` branch. It was developed as a separate project folder within the larger CS-465 workspace and was used for authenticated trip management workflows such as:
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

- Login
- Trip retrieval
- Add trip
- Edit/update trip
- Delete trip

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
### Final Reflection

The Module 8 project reflection README is maintained on the `module8` branch.

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
## What This Project Demonstrates

This project demonstrates:

<<<<<<< Updated upstream
<<<<<<< Updated upstream
- Backend web application architecture
- REST API design
- MongoDB and Mongoose integration
- Authentication and protected endpoints
- Separation of concerns using routes, controllers, models, and middleware
- Integration between a backend API and the Angular admin SPA on the `admin-module6` branch
- CRUD testing across public and authenticated workflows
=======
=======
>>>>>>> Stashed changes
- Express application structure
- Server-side routing
- View templating with Handlebars
- Public web application development
- Separation of routes, views, and static assets
<<<<<<< Updated upstream
- Organization of related project work across branches in a single repository
>>>>>>> Stashed changes
=======
- Organization of related project work across branches in a single repository
>>>>>>> Stashed changes
