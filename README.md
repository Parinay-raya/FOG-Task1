# FOG-ASSIGNMENT: Furniro Homepage

## Overview

FOG-ASSIGNMENT is a full-stack web application developed using React for the frontend, Node.js for the backend, and MongoDB for database management. This project is aimed at creating a functional and visually appealing homepage for the fictional e-commerce platform, **Furniro**, that sells furniture and decor.

## Table of Contents

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Description

Furniro's homepage offers a clean and modern interface that showcases various product categories. With the integration of React, users can experience smooth and dynamic content updates, while the backend, built with Node.js and MongoDB, handles user requests and data storage. The homepage includes a hero section with product details, navigation links, and interactive features.

## Tech Stack

- **Frontend**: React, CSS3, HTML5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other**: Mongoose for database interaction, Axios for API requests, React Router for navigation, and custom CSS for styling.

## Features

- **Dynamic Hero Section**: Featuring visually appealing background images, blur effects, and overlay.
- **Responsive Design**: Ensures a smooth experience on both desktop and mobile.
- **Navigation Links**: Includes pages such as Home, Shop, About, and Contact.
- **Product Display**: Showcases a collection of products with details.
- **Backend Integration**: Fetches product data from MongoDB using an API built with Node.js and Express.
- **User Authentication**: Allows users to log in and view personalized content (Future scope).

## Installation

To run this project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) must be installed on your system. If not, you can download and install it from [Node.js Official Site](https://nodejs.org/).

- **MongoDB**: Install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### 1. Clone the repository

```bash
git clone https://github.com/Parinay-raya/furniro-fog-task1.git
cd fog-assignment
```

### 2. Install Backend Dependencies

Navigate to the backend directory and install the necessary packages:

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Navigate to the frontend directory and install the required packages:

```bash
cd frontend
npm install
```

### 4. Setup Environment Variables

Create an `.env` file in the backend directory and add the following:

```bash
MONGODB_URI=<your-mongodb-uri>
PORT=5000
```

In the frontend directory, create a `.env` file and add:

```bash
REACT_APP_API_URL=http://localhost:5000
```

### 5. Start the Application

#### Backend

Start the backend server:

```bash
cd backend
npm start
```

#### Frontend

Start the frontend server:

```bash
cd frontend
npm start
```

The application should now be running on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## Usage

- Access the Furniro homepage at `http://localhost:3000`.
- Explore the product categories and interact with the page features.
- The backend provides the necessary APIs to serve product data dynamically.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Open a pull request

Please make sure to follow the code style guidelines and include tests where necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out the **FOG-ASSIGNMENT**!
