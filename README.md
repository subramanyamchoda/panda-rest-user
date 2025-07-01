# 🐼 Panda Restaurants – User Portal

A seamless **table reservation platform** built with the **MERN stack**. This user-facing portal allows diners to explore restaurants, check **real-time table availability**, and book tables effortlessly with secure **Google OAuth 2.0** authentication and **automated email notifications**.

---

## 🌐 Live Demo

- **User Portal**: [https://pandarestaurantsuser.vercel.app](https://pandarestaurantsuser.vercel.app)  
- **Backend API**: [https://panda-rest-server.onrender.com](https://panda-rest-server.onrender.com)

---

## ✨ Features

- 🔐 **Google OAuth 2.0 Authentication** – Secure, one-click login  
- 🗕️ **Real-Time Table Availability** – Check live slot availability  
- ✅ **Smart Booking System** – Select date, time & guest count  
- 📨 **Automated Email Notifications** – Login and booking confirmations  
- 📊 **Reservation Dashboard** – View your upcoming and past bookings  
- 🎨 **Framer Motion Animations** – Smooth, modern transitions  
- 📱 **Fully Responsive Design** – Works flawlessly across devices  

---

## 🛠️ Tech Stack

| Layer      | Technology                                |
|------------|--------------------------------------------|
| Frontend   | React.js, Vite                           |
| Styling    | Tailwind CSS, Framer Motion              |
| Authentication | Google OAuth 2.0, JWT (HTTP-only cookies) |
| Backend API | Node.js, Express.js                     |
| Database   | MongoDB, Mongoose                        |
| Emails     | NodeMailer                               |
| Deployment | Vercel (Frontend), Render (Backend)      |

---

## 🗼️ Screenshots

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
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://panda-rest-server.onrender.com/
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

> 📝 Replace `your-google-client-id` with your actual Client ID from the Google Developer Console.

### 4. Start the Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🔐 Authentication & Security

- **Google OAuth 2.0** for secure user login  
- **JWT tokens** stored securely in HTTP-only cookies  
- **Protected Routes**:  
  - Booking  
  - Reservation Dashboard  

---

## 📨 Email Notifications

Automated emails sent via **NodeMailer** for:

- 🔑 Login confirmation  
- 🗕️ Booking confirmation  

---

## 🌟 Highlight Features

✅ Google OAuth 2.0 Integration  
🔐 Secure JWT-based authentication  
🗕️ Real-time table booking & availability  
📨 Automated email confirmations  
📱 Mobile-friendly, responsive design  
🎥 Smooth animations with Framer Motion  

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

```bash
# Fork the repository
# Create a new branch
git checkout -b feature/YourFeatureName

# Make changes & commit
git commit -m "Added YourFeatureName"

# Push to your fork
git push origin feature/YourFeatureName
```

Open a Pull Request — I’ll be happy to review it!

---

## 🙏 Acknowledgments

This project was built to:

- Enhance MERN stack development skills  
- Implement real-world authentication flows  
- Practice responsive UI/UX design  
- Improve secure API and email integrations  

---

## 📦 Related Projects

- 🛠️ [Admin Portal](https://github.com/subramanyamchoda/panda-rest-admin) – For restaurant managers  
- 🌐 [Backend API](https://github.com/subramanyamchoda/panda-rest-server) – Node.js Express server  

---

## ✅ Try It Now

**👉 Live User Portal**: [https://pandarestaurantsuser.vercel.app](https://pandarestaurantsuser.vercel.app)  

---

**Made with ❤️ by [@subramanyamchoda](https://github.com/subramanyamchoda)**
