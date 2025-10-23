# 🧠 Task Manager App

A modern **Task Management** web application built using **React (Vite)**, **Tailwind CSS**, and **React Router**.
This project demonstrates component architecture, state management, custom hooks, API integration, and responsive design — all wrapped in a clean light/dark theme.

---

## 🚀 Features

### 🧩 Core Functionality

* Add, complete, and delete tasks
* Filter tasks: All / Active / Completed
* Persistent storage via localStorage

### 🎨 UI & Styling

* Fully responsive (mobile → desktop)
* Reusable components: Button, Card, Navbar, Footer
* Light/Dark mode toggle with context API
* Smooth animations via Tailwind transitions

### 🔗 API Integration

* Fetches sample data from **JSONPlaceholder**
* Displays posts with loading and error states
* Includes search and pagination support

---

## 🧱 Project Structure

```
src/
├── api/          # API integration functions
├── components/   # Reusable UI components
├── context/      # Theme and app context providers
├── hooks/        # Custom React hooks
├── pages/        # Page-level components
├── utils/        # Utility functions
└── App.jsx       # Main application entry point
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🌐 Deployment (GitHub Pages)

### Add deployment dependency:

```bash
npm install gh-pages --save-dev
```

### Add this to your `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/<your-repo-name>/",
});
```

### Add this script in `package.json`:

```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

### Deploy with:

```bash
npm run deploy
```

Your project will be live at:

```
https://<your-username>.github.io/<your-repo-name>/
```

---

## 🧠 Technologies Used

* **React 18 + Vite**
* **Tailwind CSS**
* **React Router DOM**
* **React Context API**
* **JSONPlaceholder API**
* **gh-pages**

---

## 🧑‍💻 Author

**Tracy Munee**
📧 Reach me on GitHub: [@<your-username>](https://github.com/<your-username>)

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

**✨ Enjoy building and customizing your own Task Manager App! ✨**
