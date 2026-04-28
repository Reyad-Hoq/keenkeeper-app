# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper is a responsive web application designed to help users maintain meaningful relationships by tracking interactions with friends. It allows users to monitor communication history, set contact goals, and stay connected consistently.

---

## 🚀 Live Features

* 👫 View and manage all friends in a clean card layout
* 📅 Track days since last contact and upcoming due dates
* ⚡ Quick Check-In (Call, Text, Video) with instant timeline updates
* 📜 Timeline to view all interaction history
* 📊 Analytics page with Pie Chart for interaction breakdown
* 🔔 Toast notifications for user actions
* 🔍 Filter timeline by interaction type (Call/Text/Video)
* ❌ Custom 404 page for invalid routes
* 🚧 Add friend page coming....

---

## 🧩 Pages Overview

### 🏠 Home Page

* Banner with title, subtitle, and action button
* Summary cards / Information cards
* Friend cards (grid layout)

### 👤 Friend Details Page

* Profile info (name, status, tags, bio, email)
* Stats cards (days since contact, goal, next due)
* Quick Check-In buttons
* Timeline entry creation on interaction

### 📜 Timeline Page

* Shows all interactions (Call/Text/Video)
* Includes date, icon, and title
* Filter functionality

### 📊 Stats Page

* Pie chart visualization of interaction types

### ❌ 404 Page

* Handles unknown routes gracefully

---

## 🛠️ Technologies Used

* ⚛️ React
* 🎨 Tailwind CSS
* 🧩 Daisy UI
* 📊 Recharts
* 🔔 React Toastify
* 🔀 React Router

---

## 📁 Data Structure

Friend data is stored in a local JSON file with realistic user information:

```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}
```

---

## 🎯 Key Features

1. **Interaction Tracking System**
   Users can log calls, texts, and video interactions which are instantly saved in the timeline.

2. **Smart Analytics**
   Pie chart visualization helps users understand communication patterns.

3. **Responsive Design**
   Fully optimized for mobile, tablet, and desktop devices.

---

## ⚙️ Other Functionalities

* ⏳ Loading animation while fetching data
* 🔁 Page reload works without errors (routing handled properly)
* 🎨 Status-based color indicators (overdue, almost due, on-track)
* 🧠 Clean state management using Context API

---

## 📌 Git Commits

Project includes **8+ meaningful commits** with clear messages such as:

* `added friend card component`
* `implemented timeline functionality`
* `added toastify notifications`

---

## 📖 Getting Started

```bash
npm install
npm run dev
```

---

## 📬 Conclusion

KeenKeeper helps users stay connected with friends by making relationship management simple, visual, and interactive.

---
