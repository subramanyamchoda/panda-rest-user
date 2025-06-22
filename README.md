# 🚀 Panda Restaurants – User Portal

Welcome to **Panda Restaurants – User Portal** 🐼🍽️
A full-featured online table reservation system built with the **MERN stack**, designed to offer seamless booking experiences for restaurant-goers. This portal enables users to explore restaurants, check real-time table availability, and make secure reservations — all in one modern, responsive interface.

🔗 **Live App**: [https://pandarestaurantsuser.vercel.app/](https://pandarestaurantsuser.vercel.app/)
🔗 **Backend API**: [https://panda-rest-server.onrender.com/](https://panda-rest-server.onrender.com/)

---

## 🧑‍🍳 Key Features – User Portal

* 🔐 **Secure Google OAuth Login**
* 📅 **Explore Restaurants** with real-time table availability
* ✅ **Book Tables** by date, time, and guest count
* 📨 **Instant Email Notifications** (Login & Booking)
* 📊 **Booking History** and personalized dashboard
* 🎨 **Framer Motion** animations for smooth UX
* 💻 Fully responsive UI for all devices

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React.js + Vite                     |
| Styling    | Tailwind CSS + Framer Motion        |
| Auth       | Google OAuth 2.0 + JWT              |
| Backend    | Node.js + Express (via REST API)    |
| Database   | MongoDB + Mongoose ORM              |
| Email      | NodeMailer                          |
| Deployment | Vercel (Frontend), Render (Backend) |

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/subramanyamchoda/panda-rest-user.git
cd panda-rest-user
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root with the following keys:

```env
VITE_API_BASE_URL=https://panda-rest-server.onrender.com/
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

> Replace `your-google-client-id` with your actual Google OAuth 2.0 client ID.

### 4. Start the App

```bash
npm run dev
```

App will run at: [http://localhost:5173](http://localhost:5173)

---

## 🔒 Security & Auth

* Google OAuth 2.0 for user login
* JWT stored in HTTP-only cookies
* Protected routes for booking and dashboard

---

## 📧 Notifications

* Login confirmation emails
* Booking confirmation emails
* Sent using NodeMailer via backend

---

## 🌟 Highlights

* 🔐 Role-based access (User)
* ✅ Google OAuth 2.0 + JWT
* 📧 Email notifications on key events
* 📱 Fully responsive design
* 💨 Framer Motion transitions
* 📅 Real-time booking flow

---

## 🤝 Contributing

Contributions and feedback are welcome!

### Steps:

1. Fork the repository
2. Create your feature branch:

```bash
git checkout -b feature/YourFeature
```

3. Commit your changes:

```bash
git commit -m 'Add YourFeature'
```

4. Push to the branch:

```bash
git push origin feature/YourFeature
```

5. Open a Pull Request

---

## 🙌 Acknowledgments

Built as a full-stack project to enhance practical experience with:

* Full authentication flows
* Real-time data handling
* RESTful API communication
* User-friendly UI/UX design

---

## ✅ Try it now

[**Panda Restaurants – User Portal**](https://pandarestaurantsuser.vercel.app/)

Thank you for checking it out! 🐼✨
