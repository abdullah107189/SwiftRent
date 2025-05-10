# SwiftRent - Client (Frontend)

This is the frontend part of the SwiftRent Car Rental System, a modern platform for renting vehicles across Bangladesh. Built using React and Vite, it offers a smooth user interface for browsing, booking, and managing car rentals.

---

## 🚀 Features

* Modern, responsive UI with Tailwind CSS and MUI
* Search and filtering by brand, type, fuel, location, and price
* Booking interface with calendar and pickup/drop-off selection
* Authentication and role-based access
* Real-time updates via Socket.io
* Review, rating system also Carousel.


## 🛠️ Tech Stack

* React.js (Vite)
* Tailwind CSS
* Redux Toolkit
* React Query, Axios
* MUI, DaisyUI
* AOS, Framer Motion, Lottie
* React Router DOM
* SweetAlert2, React Toastify
* Firebase
* Cloudinary

---

## 📂 Project Setup

```bash
cd SwiftRent
npm install
npm run dev
```

The frontend will run at: `http://localhost:5173`

---

## 🔗 Environment Variables

Create a `.env` file in the root of the client project and configure the required Firebase, API, and server base URLs. Below is an example of the expected variables:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_appId=your_firebase_app_id
VITE_messagingSenderId=your_messaging_sender_id

VITE_BASEURL=http://localhost:3000
# VITE_BASEURL=https://your-production-server.com

VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_API_KEY=your_cloudinary_api_key
```

> ⚠️ **Important:** Never commit your actual environment variable values to version control.

---

## 📁 Project Structure

```
src/
 ┣ components/
 ┣ pages/
 ┣ hooks/
 ┣ services/
 ┣ redux/
 ┣ assets/
 ┗ main.jsx
```

---

## 👨‍💻 Developed By

Frontend team of SwiftRent

