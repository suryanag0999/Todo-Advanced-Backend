# 📝 Todo Advanced Backend

A fully-featured backend API built with **Node.js**, **Express**, and **MongoDB**, designed to manage and track tasks with support for labels, due dates, status updates, sorting, filtering, and pagination.

---

## 🚀 Features

- Add new tasks with title, description, due date, and labels
- Get tasks with advanced filters: sort by due date or created date, filter by status or labels
- Update tasks (title, description, due date)
- Update labels or status separately
- Delete tasks
- Fetch distinct labels for filtering
- Pagination and sorting support

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Compass for local dev, or Atlas for cloud deployment)
- **ODM**: Mongoose
- **Timezone Handling**: Moment-Timezone

---


---

## 🧪 API Endpoints

### ✅ Task Endpoints

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | `/api/v2/task`          | Create a new task                    |
| GET    | `/api/v2/tasks`         | Get tasks with filters/sorting       |
| PUT    | `/api/v2/task/:id`      | Update task details                  |
| PUT    | `/api/v2/task/:id/labels` | Update task labels                 |
| PUT    | `/api/v2/task/:id/status` | Update task status                 |
| DELETE | `/api/v2/task/:id`      | Delete a task                        |

### 🔖 Label Endpoints

###Install Dependencies
npm install

| Method | Endpoint        | Description            |
|--------|-----------------|------------------------|
| GET    | `/api/v2/labels` | Get all unique labels  |

Set Up MongoDB
For local development, use MongoDB Compass and create a new database.

You can also use MongoDB Atlas for cloud-based hosting.

Update the .env file:

MONGODB_URL=mongodb://localhost:27017/todo-advanced
# Or for Atlas:
# MONGODB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo-advanced

📬 Postman Collection
You can use tools like Postman or Thunder Client for testing the APIs.
You can also deploy this backend to cloud platforms like: Render






