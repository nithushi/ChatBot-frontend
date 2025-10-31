<img width="1920" height="1057" alt="screencapture-localhost-5173-2025-10-31-21_56_49" src="https://github.com/user-attachments/assets/d6146e0a-f8cb-453f-9aed-aea96e8cd046" /># 🤖 ChatBot Frontend (React + Vite)

This project is the React + Vite frontend for a simple AI chatbot. It provides a clean user interface for interacting with the chatbot backend.

## 📸 Project Screenshot
<img width="1920" height="1057" alt="screencapture-localhost-5173-2025-10-31-21_56_49" src="https://github.com/user-attachments/assets/bcdc853f-9565-458d-afb4-85b5b4528ef9" />

*(To display an image here, create an `assets` folder in the root of this project and add a screenshot named `demo.png`.)*

## Features

* A simple, clean chat window.
* Sends user messages to the backend API (`http://localhost:8080/api/chat`).
* Displays messages from both the "user" and the "bot" in different styles.
* Automatically scrolls to the newest message.
* Styled using **Bootstrap**.

## Technologies Used

* **React**
* **Vite**
* **Axios** (for API requests)
* **Bootstrap** (for styling)

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd ChatBot-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## ❗Prerequisite

This frontend application **requires the `ChatBot-backend` project to be running** at `http://localhost:8080` to function correctly, as the API URL is hardcoded in the `Chatbot.jsx` component.
