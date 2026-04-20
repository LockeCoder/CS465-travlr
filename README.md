# CS465 Travlr Getaways - Module 7

This repository contains the back-end portion of the Travlr Getaways full stack project for CS 465. At this stage of the project, the application includes secure authentication for the admin SPA using JSON Web Tokens (JWT), protected administrative API endpoints, and full CRUD support for trip management.

## Project Overview

Travlr Getaways is a full stack travel application with two sides:

- A public customer-facing website
- An Angular-based admin SPA for trip management

For Module 7, the project was updated to add a security layer for the admin side. This includes:

- User registration and login
- JWT generation for authenticated users
- Protected admin API endpoints
- Front-end login support in the Angular admin application
- Authenticated CRUD operations for trips

## Technologies Used

### Back End
- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Tokens (`jsonwebtoken`)
- Crypto (`crypto`) for password hashing

### Front End Admin App
- Angular
- TypeScript
- Angular Router
- Angular HttpClient

## Repository Structure

```text
app_api/
  controllers/
  middleware/
  models/
  routes/
app_server/
bin/
data/
public/
app.js
package.json
