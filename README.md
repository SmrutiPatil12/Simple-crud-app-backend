# 📌 CRUD App Backend (Node.js + Express + MongoDB)

A simple backend application demonstrating basic **CRUD operations** (Create, Read, Update, Delete) using **Node.js**, **Express**, and **MySQL**.
This project is perfect for beginners who want to understand how APIs interact with a database.

## 🚀 Features

* ➕ **Create** new records
* 📄 **Read** all or specific records
* ✏️ **Update** existing records
* ❌ **Delete** records
* 🛢️ MongoDB database integration
* 📡 RESTful API endpoints
* 🧩 Clean folder structure

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **JavaScript**
* **Postman** (for testing)

## 📂 Folder Structure

project/
 ├── config/
 │    └── db.js
 ├── routes/
 │    └── userRoutes.js
 ├── controllers/
 │    └── userController.js
 ├── server.js
 ├── package.json
 └── README.md

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

On bash
git clone <your-repo-url>
cd project

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=crud_db
PORT=3500
```

### 4️⃣ Start the server

```bash
npm start
```

Server will run on 👉 **[http://localhost:3500](http://localhost:3500)**

---

## 🧪 API Endpoints

### ➕ Create User

`POST /users`

### 📄 Get All Users

`GET /users`

### 📄 Get User by ID

`GET /users/:id`

### ✏️ Update User

`PUT /users/:id`

### ❌ Delete User

`DELETE /users/:id`

---

## 🛠️ Example Request Body (JSON)

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com"
}
```

---

## 🤝 Contributing

Feel free to open issues or submit pull requests to improve the project.

---


---

If you want, I can also **customize the README according to your exact project code or folder structure** — just share your files or structure!
