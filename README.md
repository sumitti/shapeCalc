# 🧮 Shape Calculator App

This is a simple yet powerful web app that calculates the **area** and **perimeter** of various geometric shapes using **Object-Oriented Programming (OOP)** concepts in JavaScript and a modern **React.js** frontend.

## 🚀 Features

- Select from **Circle, Rectangle, Square, Triangle**
- Input parameters dynamically
- Get **area** and **perimeter** instantly
- Clean and responsive UI using **Tailwind CSS**
- Showcases OOP principles:
  - **Inheritance**
  - **Method Overriding**
  - **Code Reusability**

---

## 🧠 Concepts Demonstrated

### ✅ Object-Oriented Programming

- `Shape`: Base class with generic methods
- `Circle`, `Rectangle`, `Square`, `Triangle`: Inherit from `Shape`
- Each shape **overrides** `getArea()` and `getPerimeter()` methods
- **Square** extends `Rectangle` to show real-life inheritance reuse
- `Triangle` handles optional parameter-based logic for flexibility

### ✅ React Functionality

- Uses `useState` for managing selected shape, input values, and results
- Dynamically renders form inputs based on selected shape
- Fully modular and reusable component for user input

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **OOP**: Vanilla JavaScript class-based structure
- **Tooling**:Create React App (any)

---


## 🧪 How to Run Locally

```bash
git clone https://github.com/your-username/shape-calculator.git
cd shape-calculator
npm install
npm run dev   # or npm start if using CRA
```

Then open `http://localhost:5173` (or `3000`) in your browser.

---

## 📚 Learnings

This project was built to understand:

- How **OOP works** in JavaScript
- Applying **polymorphism** through method overriding
- How to create **dynamic forms** in React
- Using OOP logic in a **frontend project**

