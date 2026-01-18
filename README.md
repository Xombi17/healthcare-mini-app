# CareConnect - AI-Powered Healthcare Support Portal

![Status](https://img.shields.io/badge/Status-Prototype-blue) ![Stack](https://img.shields.io/badge/Tech-React%20%7C%20Tailwind%20%7C%20Framer-indigo)

A decision-centric healthcare support prototype designed to connect patients with volunteers through intelligent triage and automation. Built for the "Mini Healthcare Support Web App" challenge.

## 🚀 Live Demo / Preview
https://healthcare-mini-app.vercel.app/

## 💡 The "AI & Automation" Idea: Smart Triage & Tagging
One of the biggest bottlenecks for NGOs during a crisis is sorting through hundreds of mixed emails—some offering help, some begging for it.

**CareConnect solves this with two automations:**
1.  **"EaseBot" (Frontend Triage)**: A simulated AI chat that proactively engages users, determines their intent (Need Help vs. Want to Help), and routes them to the correct form without navigation friction.
2.  **Smart Admin Triage (Backend Automation)**: An Admin Dashboard that uses simulated NLP to "read" unstructured volunteer bios. It automatically tags them with skills (e.g., "Medical Pro", "Has Vehicle", "Multi-lingual") so coordinators can filter and approve them in seconds, not hours.

## 🛠 Tech Stack
*   **Framework**: React 18 (Vite)
*   **Styling**: Tailwind CSS v4 (Glassmorphism & Modern UI)
*   **Animation**: Framer Motion (Micro-interactions & Page transitions)
*   **Icons**: Lucide React
*   **State Management**: React Hooks (Lifted State for simple data flow)

## 🏥 NGO Use-Case Compatibility
This app is designed as a **Rapid Response Portal**.
*   **For Patients**: Instant access to help without login walls. "Get Help Now" button is always visible.
*   **For Volunteers**: Quick onboarding. AI helps highlight their specific utility (e.g., a nurse with a car is clearer than just "Volunteer").
*   **For Admins**: A "Command Center" view to manage the chaos.

## 📦 How to Run Locally

1.  **Clone the repo**
    ```bash
    git clone <repository-url>
    cd healthcare-mini-app
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    # or
    bun run dev
    ```

4.  **Explore Features**
    *   **Home**: Try the "Get Started" flow or uses the Chatbot.
    *   **Admin**: Click the **Shield Icon (Admin)** in the top navigation bar to access the dashboard.
    *   **Simulate**: Submit a volunteer request, then go to Admin to see it appear and use the "Run AI Auto-Tagging" button.

## 📸 Key Features Checklist
- [x] **Responsive Design**: Mobile-first glassmorphism UI.
- [x] **Contact/Support Form**: Dynamic form for both Patients and Volunteers.
- [x] **AI Chatbot**: Simulated conversation flow for routing.
- [x] **Admin Dashboard**: Live view of submissions with "Approve" workflow.
- [x] **Smart Tagging**: Keyword extraction simulation for sorting volunteers.

---
*Created by Varad for Interview Task.*
