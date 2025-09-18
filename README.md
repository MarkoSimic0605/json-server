# 🎬 Movies App (MVC + JSON Server)

This is a small **Movies App** project built with **Vanilla JavaScript** following the **MVC (Model-View-Controller)** pattern.  
The project uses **JSON Server** as a fake REST API to serve movie data.

---

## 🚀 Features

- **JSON Server backend** – serves a collection of movies with details
- **Modern UI** – clean, responsive grid layout with hover effects
- **Search functionality** – filter movies in real time by title
- **Genre filter** – dynamically filter movies by genre
- **Sorting by rating** – ascending/descending
- **MVC structure** – code is split into `model`, `view`, and `controller` for better maintainability

---

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarkoSimic0605/movies-app.git
   cd movies-app
   ```
   Install JSON Server (if not already installed)

npm install -g json-server

Run JSON Server

json-server --watch movies.json --port 3000

API will be available at:
http://localhost:3000/movies

Open index.html in your browser (no build step required)

📁 Project Structure
movies-app/
├── movies.json # JSON Server database
├── index.html # Main HTML page
├── style.css # Modern responsive styling
└── src/
├── main.js # Entry point
├── model/
│ └── MovieModel.js
├── view/
│ └── MovieView.js
└── controller/
└── MovieController.js

🖼 Preview

⚡ Tech Stack

Vanilla JS (ES6+)

JSON Server (Fake REST API)

HTML5 / CSS3 (Responsive)

📜 License

This project is open-source and available under the MIT License
.
