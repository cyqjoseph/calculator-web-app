# Simple Calculator Web Application

Live Demo: [Simple Calculator](http://cyqjoseph-simple-calculator.s3-website-ap-southeast-1.amazonaws.com)

## Overview

Simple web application that performs basic arithmetic operations like addition and subtraction. The frontend is built with React and hosted on a static Amazon S3 bucket. It interacts with a backend hosted on AWS using API Gateway and Lambda functions.

## Features

- **Frontend**: A single page React application with two input fields for numbers and two buttons to perform addition and subtraction.
- **Backend**: Two AWS Lambda functions that handle addition and subtraction requests, respectively, and an API Gateway to expose these functions over HTTP.

## Frontend

### Tech Stack

- **Framework**: React, Bootstrap
- **Hosting**: Amazon S3

### Functionality

- Two input fields to accept numeric values.
- Two buttons ("Add" and "Subtract") to trigger respective operations.
- Displays the result of the operation.
- Handles invalid inputs by showing an error message.

## Backend

### Tech Stack

- **AWS Lambda**
- **API Gateway**

### Functionality

- Two Lambda functions corresponding to addition and subtraction.
- Accepts requests in `application/x-www-form-urlencoded` format.
- Returns the result in `application/json` format.

### Endpoints

- **Add**: `POST /add`
- **Subtract**: `POST /subtract`

### Deployment

The application is hosted on an Amazon S3 bucket, providing a single-page static web hosting. The lambda functions are deployed on AWS and exposed through API Gateway.

## Unit Testing

Automated tests are included to ensure the reliability of the application. The tests cover:

1. Addition functionality.
2. Ensuring components are rendered on page load.

## How to Use

1. Enter numeric values in the input fields.
2. Click on either "Add" or "Subtract" to perform the operation.
3. The result will be displayed on the web page.
4. If any input field is left blank, it is treated as 0.
