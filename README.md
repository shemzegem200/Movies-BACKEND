﻿# Movies-BACKEND
This is a backend API designed to handle movie reviews. It allows users to create, read, update, and delete reviews for movies. The application uses MongoDB with Mongoose for data modeling and Express for the server.
API Routes
1. GET /reviews/:id

    Description: Fetches all reviews for a specific movie using its movieId.
    Parameters:
        id: The ID of the movie for which you want to fetch reviews (type: Number).
    Response:
        200 OK: A list of reviews for the movie.
        404 Not Found: If no reviews are found.
        500 Internal Server Error: If there's a server-side issue.
    Example Request:

GET /reviews/1

Example Response:

    [
      {
        "movieId": 1,
        "user": "John Doe",
        "review": "Amazing movie!",
        "createdAt": "2025-02-04T12:30:00Z",
        "updatedAt": "2025-02-04T12:30:00Z"
      },
      ...
    ]

2. POST /reviews

    Description: Adds a new review for a movie.
    Request Body:
        movieId: The ID of the movie (type: Number).
        user: The name of the user writing the review (type: String).
        review: The actual review text (type: String).
    Response:
        200 OK: If the review is successfully created.
        500 Internal Server Error: If there's a server-side issue.
    Example Request:

POST /reviews
{
  "movieId": 1,
  "user": "Jane Doe",
  "review": "Great movie, would watch again!"
}

Example Response:

    {
      "status": "success"
    }

3. GET /reviews/review/:id

    Description: Fetches a single review by its id.
    Parameters:
        id: The review's ID (type: String).
    Response:
        200 OK: A single review.
        404 Not Found: If the review is not found.
        500 Internal Server Error: If there's a server-side issue.
    Example Request:

GET /reviews/review/605c72ef1532072b8d66d1a0

Example Response:

    {
      "movieId": 1,
      "user": "John Doe",
      "review": "Amazing movie!",
      "createdAt": "2025-02-04T12:30:00Z",
      "updatedAt": "2025-02-04T12:30:00Z"
    }

4. PUT /reviews/review/:id

    Description: Updates a review based on the provided id.
    Parameters:
        id: The review's ID (type: String).
        Request Body:
            user: The name of the user.
            review: The updated review text.
    Response:
        200 OK: If the review is successfully updated.
        400 Bad Request: If there is a validation error.
        500 Internal Server Error: If there's a server-side issue.
    Example Request:

PUT /reviews/review/605c72ef1532072b8d66d1a0
{
  "user": "John Doe",
  "review": "Amazing movie! Would watch it again!"
}

Example Response:

    {
      "status": "success"
    }

5. DELETE /reviews/review/:id

    Description: Deletes a review by its id.
    Parameters:
        id: The review's ID (type: String).
    Response:
        200 OK: If the review is successfully deleted.
        500 Internal Server Error: If there's a server-side issue.
    Example Request:

DELETE /reviews/review/605c72ef1532072b8d66d1a0

Example Response:

    {
      "status": "success"
    }

Schema
Review Model

The Review model is designed to store information about movie reviews. The schema has three main fields:

    movieId: The ID of the movie being reviewed (type: Number, required).
    user: The name of the user who wrote the review (type: String, required).
    review: The content of the review itself (type: String, required).
    timestamps: Automatically generated fields for createdAt and updatedAt.

Example Review Document:

{
  "_id": "605c72ef1532072b8d66d1a0",
  "movieId": 1,
  "user": "John Doe",
  "review": "Amazing movie!",
  "createdAt": "2025-02-04T12:30:00Z",
  "updatedAt": "2025-02-04T12:30:00Z"
}

Installation

    Clone the repository:

git clone https://github.com/shemzegem200/Movies-BACKEND.git
cd Movies-BACKEND

Install dependencies:

npm install

Set up your environment variables for MongoDB connection in .env:

MONGO_URI=your_mongo_connection_string

Run the server:

    npm start

The server should now be running on http://localhost:3000 or your preferred port.
Contributing

Feel free to fork the repository!
