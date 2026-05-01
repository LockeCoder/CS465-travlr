# Travlr Getaways Express Customer-Facing Application

Travlr Getaways is a travel web application project built for CS 465. This `main` branch contains the Express-based customer-facing application, including the server configuration, routes, views, and public assets used to render the website.

Additional full-stack project work is represented elsewhere in the same repository:

- `admin-module6` — Angular administrator SPA
- `module8` — final full-stack project reflection and later-stage project work

## Overview

This branch presents the customer-facing Express application for Travlr Getaways. It uses Express, Handlebars, HTML, CSS, and JavaScript to render travel content through server-side routes and views.

The broader project also included a separate Angular administrator SPA and backend/API work completed in other project stages, but this branch specifically reflects the Express customer-facing portion of the project.

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

```bash
npm start
```

Application URL:

```text
http://localhost:3000
```

## Related Branches in This Repository

### Angular Admin Application

The Angular administrator SPA for this project is maintained on the `admin-module6` branch. It was developed as a separate project folder within the larger CS-465 workspace and was used for authenticated trip management workflows such as:

- Login
- Trip retrieval
- Add trip
- Edit/update trip
- Delete trip

### Final Full-Stack Work

The later-stage CS-465 full-stack project work and final reflection are maintained on the `module8` branch.

## What This Project Demonstrates

This project demonstrates:

- Express application structure
- Server-side routing
- View templating with Handlebars
- Public web application development
- Separation of routes, views, and static assets
- Organization of related project work across branches in a single repository

## Academic Portfolio Notice

This repository is shared as an academic portfolio artifact. Source code written by me is provided under the repository license where applicable. Course-provided materials, assignment prompts, rubrics, starter files, datasets, screenshots, logos, artwork, or other third-party assets remain the property of their respective owners.

Please do not submit this work as your own coursework.

## Asset Notice

Some images, logos, screenshots, datasets, or documentation in this repository may have been provided for coursework or created only for academic demonstration. These materials are included to document the project and are not separately licensed for reuse.
