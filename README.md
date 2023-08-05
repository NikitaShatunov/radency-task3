# radency-task3-added postgres

This repository contains an example Node.js application that uses Docker Compose to set up a development environment with PostgreSQL, pgAdmin, and an API server.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone this repository to your local machine.
2. Start the development environment using Docker Compose:
   docker-compose up
3. Wait for the services to start. This might take a moment, especially the first time you run it.

4. Once the services are up and running, you can access the following:

- API server: [http://localhost:4000](http://localhost:4000)
- pgAdmin: [http://localhost:5050](http://localhost:5050)

5. Use Postman testing tool to interact with the API server.

## Accessing pgAdmin

- Open your web browser and go to [http://localhost:5050](http://localhost:5050)
- Login with the following credentials:
- Email: `admin@email.com`
- Password: `root`

## Accessing pg

- host: db
- ports: 5432:5432
- USER: admin
- PASSWORD: root
- DB: notes
  
### Endpoints

- GET `/api/notes` - Get all notes
- GET `/api/notes/:id` - Get a note by ID
- GET `/api/notes/stats` - Get stats
- POST `/api/notes` - Create a new note
- PATCH `/api/notes/:id` - Update a note by ID
- DELETE `/api/notes/:id` - Delete a note by ID
- DELETE `/api/notes` - Delete all notes
