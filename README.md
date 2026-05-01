# CS 465 Travlr Getaways Full Stack Project Reflection

This repository contains the completed Travlr Getaways full stack web application for CS 465. The project uses the MEAN stack approach to support both a customer-facing travel website and an administrator single-page application (SPA) with secure login and protected CRUD functionality.

## Architecture

In this full stack project, I used multiple types of frontend development, and each one served a different purpose. On the customer-facing side, I used Express, HTML, CSS, JavaScript, and Handlebars templates to render pages on the server. That approach worked well for the public website because it focused on displaying travel information and navigation in a simpler, more traditional web application format. On the administrative side, I used Angular to build a single-page application (SPA). The Angular side was more dynamic because it used components, routes, services, and client-side form handling to let an administrator move between views and manage trip data without reloading the entire page.

The backend used a NoSQL MongoDB database because the project data fit naturally into a document-based model. MongoDB stores data in a JSON-like structure, which worked well with a JavaScript-based stack because the same general data format was already being used across the application. Since the project involved storing trip records with related properties rather than highly normalized relational data, MongoDB made it easier to represent and retrieve those records. It also worked well with Mongoose, which allowed schemas and models to be defined for use in the Node and Express backend.

## Functionality

JSON is different from JavaScript because JSON is a text-based data format used to structure and transfer data, while JavaScript is a programming language used to create application behavior. JavaScript can include functions, logic, conditions, and event handling, while JSON is limited to structured data such as objects, arrays, strings, numbers, booleans, and null values. In this project, JSON tied the frontend and backend together because the backend API returned trip data in JSON format, and the Angular frontend consumed that data to display trips and populate forms.

There were several points in the project where I refactored code to improve functionality and efficiency. One example was moving from static HTML to Handlebars templates so that trip data could be rendered dynamically instead of being duplicated manually. Another example was moving from locally structured data and server-rendered views into a REST API backed by MongoDB. That made the same trip data reusable across both the customer-facing website and the admin side. On the Angular side, reusable UI components such as trip-list, trip-add, trip-edit, and login improved the structure of the application. These components reduced duplication, improved consistency, and made the code easier to maintain because changes could be made in one place instead of across multiple pages.

## Testing

Methods, endpoints, and security are all connected in a full stack application. HTTP methods define the type of action being performed, such as GET to retrieve data, POST to create data, PUT to update data, and DELETE to remove data. Endpoints define the URLs where those actions occur. In this project, I tested endpoints for retrieving all trips, retrieving a single trip, registering a user, logging in, adding a trip, updating a trip, and deleting a trip.

Security added another layer to testing because the application had to confirm not only that the endpoints worked, but also that they were protected correctly. I tested both positive and negative cases. For example, I confirmed that public GET requests could retrieve trip data, but I also tested that protected administrative endpoints failed when no token was provided. After logging in successfully, I tested that the JWT token allowed access to the protected add, edit, and delete functions. This showed that testing in a secure full stack application is not only about whether data can be stored and retrieved, but also whether the correct user is authorized to perform those actions.

## Reflection

This course helped me move beyond isolated programming tasks and understand how the different parts of a real web application fit together. I gained experience working across the full stack by connecting a frontend, backend, API, and database into one system. I also learned how to structure a project in a more maintainable way by separating routes, controllers, models, components, and services. Building the Angular SPA and then adding authentication gave me stronger practical experience with modern application architecture and security.

The most valuable skills I developed were working with the MEAN stack, building RESTful APIs, connecting applications to MongoDB, creating reusable Angular components, and implementing secure authentication with protected endpoints. These skills make me more marketable because they reflect the kind of full stack development work used in real software environments. I also improved in debugging, testing, refactoring, and understanding how design decisions affect maintainability and usability. Overall, this course gave me stronger practical development experience and a better understanding of how to build and test a complete web application from end to end.

## Tech Stack

- MongoDB
- Express
- Angular
- Node.js
- Mongoose
- JSON Web Token authentication
- Handlebars
- TypeScript
- HTML / CSS / JavaScript

## Run Locally

### Back End
```bash
npm install
npm start