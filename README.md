#  Node Voting API

A **Node.js backend API** for managing users, candidates, and voting, built with **Express.js** and **MongoDB**.  
This project provides secure JWT-based authentication, role-based access, and CRUD operations for candidates and users.

---

##  Features

- User signup and login with JWT authentication  
- Add, retrieve, update, and delete candidates  
- Cast votes for candidates  
- View total votes for each candidate  
- Role-based access control (admin/user)  
- MongoDB for persistent storage  
- Environment variables managed via `.env`  

---

##  Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

---

##  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Meexargha/Node-Voting-.git
   cd Node-Voting-

---
##  API EndPoint

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| POST   | `/users/signup` | Register a new user     |
| POST   | `/users/login`  | Login and get JWT token |

| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| GET    | `/candidates`     | Get all candidates               |
| POST   | `/candidates`     | Add a new candidate (admin only) |
| GET    | `/candidates/:id` | Get candidate by ID              |
| PUT    | `/candidates/:id` | Update candidate details (admin) |
| DELETE | `/candidates/:id` | Delete a candidate (admin only)  |

| Method | Endpoint             | Description                        |
| ------ | -------------------- | ---------------------------------- |
| POST   | `/vote/:candidateId` | Cast a vote for a candidate        |
| GET    | `/results`           | Get vote counts for all candidates |

#Example Staff Data and candidate
```bash staff
{
  "name": "Srikant", 
  "age": 22,
  "email": "election@example.com", 
  "mobile": "9876543210",
  "password": "mypassword",
  "role": "admin"
}
```

```bash candidate
{
  "name": "Munna Bhaiya",
  "party": "Mirzapur",
  "age": 23
}
`````
## Contributing
1. Fork the repo
2. Create a branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Create a Pull Request


