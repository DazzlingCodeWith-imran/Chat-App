
Chat App Frontend
Overview
This is the frontend for a real-time chat application with an admin dashboard, built using React (with Vite) and Tailwind CSS. The app allows users to chat in real-time (private and group chats) and includes an admin panel for user management, chat monitoring, and analytics. The UI features a left-side sidebar for navigation and a top navbar for user actions.
Features

User Features:
Login/signup with JWT-based authentication.
Real-time messaging (private and group chats) using Socket.IO.
View online/offline users and chat rooms.


Admin Features:
User management (view, ban, delete users).
Chat monitoring (view chat history, flag messages).
Analytics dashboard (user activity, message counts, active rooms) using Chart.js.


UI:
Left-side sidebar: Navigation for chat rooms (user) or admin controls (admin).
Top navbar: App logo, user profile, logout button.



Tech Stack

Framework: React (Vite)
Styling: Tailwind CSS
Routing: React Router
API Calls: Axios
Real-Time: Socket.IO-client
Analytics: Chart.js + react-chartjs-2
State Management: React Context (for auth)

Project Setup
Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)

Installation

Clone the repository:git clone <your-repo-url>
cd chat-app-frontend


Initialize Vite project (if not already done):npm create vite@latest . --template react


Install dependencies:npm install
npm install react-router-dom axios socket.io-client chart.js react-chartjs-2
npm install -D tailwindcss postcss autoprefixer


Set up Tailwind CSS:npx tailwindcss init -p


Update tailwind.config.js to include content: ['./src/**/*.{js,jsx}'].
Create src/styles/tailwind.css with Tailwind directives.


Create .env file in the root:VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000


Run the development server:npm run dev


Open http://localhost:5173 to view the app.



Folder Structure
chat-app-frontend/
├── src/
│   ├── assets/               # Static assets (images, icons)
│   │   ├── logo.png
│   │   └── chat-icon.svg
│   ├── components/           # Reusable UI components
│   │   ├── common/           # Shared components
│   │   │   ├── Navbar.jsx    # Top navigation bar
│   │   │   ├── Sidebar.jsx   # Left-side sidebar
│   │   │   └── Button.jsx    # Reusable button
│   │   ├── chat/             # Chat-specific components
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Message.jsx
│   │   │   └── UserList.jsx
│   │   └──ස
│   │   └── admin/            # Admin-specific components
│   │       ├── UserTable.jsx
│   │       ├── ChatMonitor.jsx
│   │       └── AnalyticsChart.jsx
│   ├── pages/                # Page components
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Chat.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── NotFound.jsx
│   ├── layouts/              # Layout components
│   │   └── MainLayout.jsx    # Sidebar + navbar layout
│   ├── context/              # State management
│   │   └── AuthContext.jsx   # User auth and role
│   ├── services/             # API and Socket.IO
│   │   ├── api.js
│   │   └── socket.js
│   ├── styles/               # CSS
│   │   ├── tailwind.css
│   │   └── global.css
│   ├── App.jsx               # Main app with routes
│   ├── main.jsx              # Vite entry point
│   ├── routes.jsx            # React Router config
│   └── constants.js          # Constants (e.g., API_URL)
├── .env                      # Environment variables
├── .gitignore                # Ignore node_modules, .env, dist/
├── index.html                # Main HTML file
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite config
├── tailwind.config.js        # Tailwind config
└── README.md                 # This file

UI Plan

Sidebar (Left-Side):
Chat Page: Links for "Chat Rooms" (dynamic list), "Online Users" (via Socket.IO).
Admin Dashboard: Links for "Users" (manage users), "Chats" (monitor chats), "Analytics" (charts).
Design: Fixed width (~250px), dark theme, collapsible for mobile (future).


Navbar (Top):
Elements: App logo (left), username, logout button (right).
Design: Sticky, light/dark theme, responsive.


Layout: MainLayout.jsx combines sidebar, navbar, and page content.

Development Progress

Day 1: Planned frontend folder structure and UI requirements (sidebar + navbar).
Day 2: Initialized Vite project, installed dependencies, set up .env, and documented setup in README.

Next Steps

Configure Tailwind CSS and test basic UI layout.
Set up React Router for page navigation.
Plan backend folder structure and setup (if required).
Start designing sidebar and navbar components.

Notes

Use .env for sensitive data (e.g., API URLs).
Ensure .gitignore includes node_modules, .env, and dist/.
Follow the 30-day plan to complete the app by Day 30.

## Development Progress
- **Day 1**: Planned frontend folder structure and UI requirements.
- **Day 2**: Initialized Vite project, installed dependencies, set up README.
- **Day 3**: Set up React Router, created placeholder sidebar + navbar UI, planned backend structure.

