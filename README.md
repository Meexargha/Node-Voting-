# Node Voting API

A **Node.js backend API** for managing users, candidates, and voting, built with **Express.js** and **MongoDB**.
This project provides secure JWT-based authentication, role-based access, and CRUD operations for candidates and users.

---

## Features

* User registration and login with JWT authentication
* Add, retrieve, update, and delete candidates
* Cast votes for candidates (one vote per user)
* View total votes for each candidate
* Role-based access control (`admin` / `user`)
* Secure password hashing with **bcrypt**
* MongoDB for persistent storage
* Environment variables managed via `.env`
* Tested using **Postman**

---

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=jsonwebtokens\&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge\&logo=dotenv\&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge\&logo=postman\&logoColor=white)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Meexargha/Node-Voting-.git
   cd Node-Voting-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/votingDB
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

The API will run at: **[http://localhost:5000](http://localhost:5000)**

---

## API Endpoints

### User Routes

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| POST   | `/users/signup` | Register a new user     |
| POST   | `/users/login`  | Login and get JWT token |

#### Example Signup Request

```json
{
  "name": "Srikant",
  "age": 22,
  "email": "election@example.com",
  "mobile": "9876543210",
  "password": "mypassword",
  "role": "admin"
}
```

#### Example Login Request

```json
{
  "email": "election@example.com",
  "password": "mypassword"
}
```

#### Example Login Response

```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

---

### Candidate Routes

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| GET    | `/candidates`     | Get all candidates               |
| POST   | `/candidates`     | Add a new candidate (admin only) |
| GET    | `/candidates/:id` | Get candidate by ID              |
| PUT    | `/candidates/:id` | Update candidate details (admin) |
| DELETE | `/candidates/:id` | Delete a candidate (admin only)  |

#### Example Candidate Request

```json
{
  "name": "Munna Bhaiya",
  "party": "Mirzapur",
  "age": 23
}
```

---

### Voting Routes

| Method | Endpoint             | Description                        |
| ------ | -------------------- | ---------------------------------- |
| POST   | `/vote/:candidateId` | Cast a vote for a candidate        |
| GET    | `/results`           | Get vote counts for all candidates |

#### Example Vote Response

```json
{
  "message": "Vote cast successfully"
}
```

#### Example Results Response

```json
[
  {
    "candidate": "Munna Bhaiya",
    "party": "Mirzapur",
    "votes": 10
  },
  {
    "candidate": "Guddu Pandit",
    "party": "Mirzapur",
    "votes": 8
  }
]
```

---

## Authentication & Authorization

* Users must **login** to get a JWT token.
* Token must be included in the request header:

  ```
  Authorization: Bearer <your_token>
  ```
* Admin users can manage candidates (CRUD).
* Regular users can only **view candidates** and **vote**.

---

## Project Structure

```
Node-Voting-/
│── models/        # Mongoose schemas
│── routes/        # Express route handlers
│── middleware/    # Auth & role middleware
│── controllers/   # Business logic
│── server.js      # Entry point
│── .env           # Environment variables
│── package.json
```

---

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Open a Pull Request

---

## Future Improvements

* Refresh token mechanism
* Email verification during signup
* Limit voting per user (already implemented in logic, but can be improved)
* Admin dashboard for monitoring

---

## License

This project is licensed under the **MIT License**.
