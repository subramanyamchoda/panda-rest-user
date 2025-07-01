# 🐼 Panda Restaurants – User Portal

A seamless table reservation platform built with the **MERN stack**. This user-facing portal empowers diners to explore restaurants, check **real-time table availability**, and make reservations effortlessly with secure **Google OAuth** login and **automated email notifications**.

🌐 **Live App**: [https://pandarestaurantsuser.vercel.app](https://pandarestaurantsuser.vercel.app)  
🛠️ **Backend API**: [https://panda-rest-server.onrender.com](https://panda-rest-server.onrender.com)

---

## ✨ Features

- 🔐 **Google OAuth 2.0 Login** – Fast & secure authentication
- 📅 **Real-Time Table Availability** – Live slot checking
- ✅ **Smart Booking System** – Select date, time & guest count
- 📨 **Automated Emails** – Login & booking confirmations
- 📊 **Dashboard** – View past and upcoming reservations
- 🎨 **Framer Motion** – Smooth transitions and effects
- 📱 **Responsive Design** – Optimized for all screen sizes

---

## 🧰 Tech Stack

| Layer        | Technology                             |
|--------------|-----------------------------------------|
| Frontend     | React.js, Vite                         |
| Styling      | Tailwind CSS, Framer Motion            |
| Auth         | Google OAuth 2.0, JWT (HTTP-only cookies) |
| Backend      | Node.js, Express.js                    |
| Database     | MongoDB, Mongoose                      |
| Email        | NodeMailer                             |
| Deployment   | Vercel (Frontend), Render (Backend)    |

---

## 🖼️ Screenshots

> Modern, responsive UI – scroll through for a preview 👇

<p align="center">
  <img src="https://subramanyamchoda.vercel.app/panarestuser1.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser2.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser3.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser4.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser5.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser6.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser7.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser8.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/panarestuser9.png" width="400"/>
</p>

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/subramanyamchoda/panda-rest-user.git
cd panda-rest-user
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the project root with the following values:

env
Copy
Edit
VITE_API_BASE_URL=https://panda-rest-server.onrender.com/
VITE_GOOGLE_CLIENT_ID=your-google-client-id
📝 Replace your-google-client-id with your actual client ID from the Google Developer Console.

4. Start the Development Server
bash
Copy
Edit
npm run dev
📍 The app will be available at: http://localhost:5173

🔐 Authentication & Security
OAuth 2.0 via Google for login

JWT tokens are stored securely in HTTP-only cookies

Protected routes include:

Booking

Dashboard

✉️ Email Notifications
Emails are automatically sent using NodeMailer for:

🔑 Login Confirmation

📅 Booking Confirmation

🌟 Highlight Features
✅ Google OAuth 2.0 Integration

🔐 Secure JWT-based authentication

📅 Real-time table booking and availability

📧 Email automation on key user actions

📱 Mobile-friendly, fully responsive UI

🎥 Smooth UX using Framer Motion animations

🤝 Contributing
Contributions are welcome and appreciated!

Steps to Contribute:
Fork the repository

Create a new branch:

bash
Copy
Edit
git checkout -b feature/YourFeatureName
Commit your changes:

bash
Copy
Edit
git commit -m "Added YourFeatureName"
Push to your fork:

bash
Copy
Edit
git push origin feature/YourFeatureName
Open a Pull Request

🙏 Acknowledgments
This project was built to:

Improve MERN stack development skills

Implement real-world authentication flows

Handle real-time user interaction

Design a user-friendly, responsive UI/UX

📦 Related Projects
🛠️ Admin Portal (for restaurant managers): panda-rest-admin

🌐 Backend API: panda-rest-server

✅ Try It Now
👉 Live App – Panda Restaurants User Portal

Made with ❤️ by @subramanyamchoda

markdown
Copy
Edit

---

### ✅ Next Suggestions:

- Add **GitHub badges** (e.g., Vercel deploy status, last commit, license)
- Include a short **GIF demo** of booking flow
- Add **unit/integration testing instructions** (if applicable)

Would you like me to generate a matching `README.md` for the **Admin Portal** or create **API documen
