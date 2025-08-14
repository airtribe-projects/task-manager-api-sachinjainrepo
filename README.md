# News Aggregator API

A RESTful API for news aggregation with user authentication and preferences management.

## Project Structure

```
News_Aggregator_API/
├── app.js                          # Main application file
├── config/
│   └── config.js                   # Configuration constants
├── controllers/
│   ├── authController.js           # Authentication logic
│   ├── userPreferencesController.js # User preferences logic
│   └── newsController.js           # News API logic
├── routes/
│   ├── authRoutes.js               # Authentication routes
│   ├── userPreferencesRoutes.js    # User preferences routes
│   └── newsRoutes.js               # News routes
├── encryptpass.js                  # Password hashing utility
├── verifytoken.js                  # JWT verification middleware
└── package.json
```

## API Endpoints

### Authentication

#### Register User
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Login User
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:** Returns JWT token for authentication

### User Preferences (Protected Routes)

#### Get User Preferences
- **GET** `/userpreferences`
- **Headers:** `Authorization: Bearer <token>`

#### Update User Preferences
- **PUT** `/userpreferences`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "language": "en",
    "theme": "dark",
    "fontSize": 18,
    "fontFamily": "Arial",
    "fontWeight": "bold",
    "fontColor": "white",
    "backgroundColor": "black"
  }
  ```

### News API
- **GET** `/news`
- **Response:** Fetches and returns news data from external API

### Health Check
- **GET** `/`
- **Response:** API status message

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node app.js
   ```

3. The server will run on port 3000

## Features

- User registration and authentication with JWT
- Password hashing using bcrypt
- Protected routes with JWT middleware
- User preferences management
- Clean MVC architecture with separated concerns
- Centralized configuration management 