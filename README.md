# assignments-1-Task_Manager_API

# Task Manager API

# Introduction

The Task_Manager_API is a REST API was developed using Node.js, and express server framework with yarn  packages. It allows users to manipulate and manage the tasks with title, description, and completion status. 
it provides endpoints for creating, reading, updating, and deleting tasks.

# Table of Contents

- Introduction

- Features

- Installation

- Usage

- Configuration

- Endpoints

- Contributing

- License



# Features

- Create a new task with a title, description, and other optional fields.

- Retrieve a list of all tasks or a single task by its unique identifier.

- Update task information including title, description, status, due date, etc.

- Delete tasks by their unique identifier.



# Installation

 **Clone the repository to your local machine**

 **Git Commands**

 -  use git clone `https://github.com/vinayog80/Airtribe.live.assignments.git`
 
 -  Navigate to the project directory: `cd Airtribe.live.assignments`

 -  checkout branch or switch branch for assignment-1-Task_Manager_API from Master branch to 
 
    assignment-1-Task_Manager_API, -> Use `git checkout assignment-1-Task_Manager_API` to checkout

 
 **Install dependencies**

 -  run `yarn install` inside the root directory before running the code

 -  run `yarn init` to initalize a new NodeJS project with yarn package manager

 -  run `yarn install` to install the Node_Modules


 **Running the API**

 **Start the API server**

 -  run `nodemon index` to start the express server

 -  The Task Manager API will now be running at `http://localhost:8081`. You can use a tool like Postman to interact with the API.



  # Configuration

 - Before starting the server, you need to set up the configuration file. Create a `.env` file in the root directory and provide the necessary environment variables:

 -  PORT=8081

 ** You can adjust the PORT value to your preferred port number **

 

 # Usage

 - Once the server is up and running, you can use tools like Postman to interact with the API endpoints.




 # Endpoints

 **The API provides the following endpoints for managing tasks**

 **Create a Task**

 - Endpoint: POST /tasks

 - Description: Create a new task with the provided details.

 - Request Body:  
   

**- CommonJS Module** 
```javascript
**JSON FROMAT** ->
{
    "id":1
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "priority": "high"
}
```javascript
```


  **Read All Tasks**

 - Endpoint: GET /tasks

 - Description: Retrieve a list of all tasks currently in the system.


  **Query a single Task**

  - Endpoint: GET /tasks/:id

  - Description: Retrieve a specific task by its ID.


  **Update a Task**

   - Endpoint: PATCH /tasks/:id

   - Description: Update an existing task with the provided details.

   - Request Body: (Any of these properties can be updated)

   **- CommonJS Module** 
```javascript
**replaced Object**
{
    "id":3
    "title": "Task Title",
    "description": "Task Description",
    "completed":true,
    "priority": "medium"
}
```javascript
```


  **Delete a Task**

  - Endpoint: DELETE /tasks/:id

  - Description: Delete a task with the specified ID.



# Error Handling

The API returns appropriate error messages and status codes for various scenarios, such as invalid input, missing data, or server errors.


# Contributing

Contributions to the Task Manager API project are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


# Contact

For any inquiries or questions, feel free to contact the project maintainer at vinay.v.v80791@gmai.com

Please note that the provided information is based on the repository and context you've given. If there are additional details that need to be included in the README or any specific requirements, please let me know, and I'll be happy to update it accordingly.
