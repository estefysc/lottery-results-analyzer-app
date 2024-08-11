# Lottery Analyzer

## Introduction

### Project Description
This project extracts the results from the Florida Lotto website in order to do some number analysis. Due to specific Heroku requirements, this is my testing environment for the Heroku code, which you can find [here](https://github.com/estefysc/lottery-results-analyzer-heroku-). The app can be accessed [here](https://lottery-analyzer.herokuapp.com/). Note that the website will take a bit of time the first time is accessed as Heroku needs to activate the Dynos in which the website runs. This project is still being updated.

### Features
- Analyze frequency of numbers
- Graphical representation of even and odd number occurrences

## Installation Instructions

### Prerequisites
- Node.js (version >=16.13.2)
- npm (version >=8.3.1)

### Installation Steps

#### Backend:
1. **Clone the repository:**  
   `cd your-repo-name`  
   `git clone https://github.com/estefysc/lottery-results-analyzer-app.git`  
2. **Navigate to the backend directory:**  
    `cd backend`  
3. **Install the dependencies:**  
    `npm install`  
4. **Run the backend server:**  
    `npm start`

#### Frontend:
1. **Navigate to the frontend directory:**  
    `cd ..`  
    `cd frontend`  
2. **Install the dependencies:**  
    `npm install`  
3. **Run the frontend server:**  
    `npm start`

##  Usage
### How to Use the Project
Once both the backend and frontend are running, navigate to http://localhost:3000 in your web browser. You'll be able to:
- Navigate through different pages using the navigation bar.
- Analyze the data using the interactive graphs and charts.

## Running Tests
To run the tests for this project, you need to navigate to the backend directory and use the `npm test` command. Below are the steps to follow:

### Steps to Run Tests:
1. **Navigate to the Backend Directory:**  
   First, make sure you are in the root of the project directory. Then, navigate to the backend folder:  
   `cd backend`
2. **Run the Tests:**  
    Execute the `npm test` command.

##  Frameworks
React - The front-end framework used.  
Express.js - The back-end framework used.  
Jest - For testing.