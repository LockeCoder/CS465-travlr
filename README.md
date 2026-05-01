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

```bash
npm start
```

Back-end URL:

```text
http://localhost:3000
```

## Companion Admin Application

A separate Angular administrator SPA was developed in a different local project folder and connected to this backend during testing. It was used to verify authenticated trip management workflows including:

- Login
- Trip retrieval
- Add trip
- Edit/update trip
- Delete trip

## What This Project Demonstrates

This project demonstrates:

- Backend web application architecture
- REST API design
- MongoDB and Mongoose integration
- Authentication and protected endpoints
- Separation of concerns using routes, controllers, models, and middleware
- Integration between a backend API and a separate Angular admin SPA
- CRUD testing across public and authenticated workflows