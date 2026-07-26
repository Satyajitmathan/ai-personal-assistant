# 🤖 AI Personal Assistant

An AI-powered voice assistant built with the **MERN stack**, featuring real-time speech recognition, natural language understanding, and conversational AI powered by **Google Gemini API**. Speak to your assistant naturally — it understands intent, executes commands, and holds real conversations.

---

## 🚀 Live Demo

- **Frontend:** [Live App](#) <!-- paste your Vercel link here -->
- **Backend API:** [API URL](#) <!-- paste your Render link here -->

---

## ✨ Features

- 🎤 **Voice Recognition** — speak commands naturally using the browser's speech recognition
- 🗣️ **Speech Synthesis** — assistant replies out loud
- 🤖 **AI Conversations** — powered by Google Gemini API for natural, context-aware responses
- 🧠 **Intent Detection** — smartly routes commands (e.g., "open YouTube") locally instead of hitting the AI, making responses faster and cheaper
- 🔍 **Google & YouTube Search** — search or play content directly by voice
- 📅 **Date, Time & Day** — quick contextual answers
- 🧮 **Quick App Launch** — open Calculator, Instagram, Facebook via voice
- 🌦️ **Weather Updates**
- 🔐 **Authentication** — secure JWT-based login/signup
- 💾 **Conversation History** — stored per user in MongoDB
- 🎨 **Custom Assistant** — personalize assistant name and avatar (with Cloudinary image upload)
- 📱 **Responsive UI** — works smoothly across devices

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Web Speech API (Speech Recognition & Synthesis)
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cloudinary (image uploads)
- Google Gemini API (conversational AI)

---

## 🏗️ Architecture

```
Voice Input
    ↓
Speech Recognition (Browser)
    ↓
Backend API (Express)
    ↓
Intent Detection (Gemini API)
    ↓
┌─────────────────────┐
│   Local Commands     │──→ Date, Time, Day, Open App, etc.
└─────────────────────┘
    │
    ↓ (if general query)
Gemini API → Conversational Response
    ↓
Speech Synthesis (Browser)
```

Only genuine conversational/informational queries are routed to the Gemini API — everything else (opening apps, date/time, etc.) is handled locally for speed and efficiency.

---

## 📸 Screenshots

<!-- Add screenshots or a demo GIF here -->
<!-- ![Home Screen](./screenshots/home.png) -->

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Google Gemini API key ([Get one here](https://aistudio.google.com/apikey))
- Cloudinary account (for image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/Satyajitmathan/ai-personal-assistant.git
cd ai-personal-assistant
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with:
```
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=your_gemini_key
```

Run the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/` with:
```
VITE_API_URL=http://localhost:8000
```

Run the frontend:
```bash
npm run dev
```

---

## 🗺️ Roadmap

- [ ] Streaming AI responses
- [ ] Multi-turn conversation memory
- [ ] Wake word detection ("Hey Jarvis")
- [ ] Provider-agnostic AI layer (swap Gemini/OpenAI easily)
- [ ] Unit tests

---

## 👤 Author

**Satyajit Mathan**
- GitHub: [@Satyajitmathan](https://github.com/Satyajitmathan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).