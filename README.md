# SCISA Senate Digital Governance Platform

> **Digitising Student Governance Through Technology**

The **SCISA Senate Digital Governance Platform** is a full-stack legislative management system developed for the **Science Students' Association (SCISA), KNUST**. It modernises Senate operations by combining a public-facing website with a secure administrative dashboard, enabling efficient management of legislative activities, institutional records, and official communications.

The platform was inspired by Ghana's ongoing digital transformation initiatives within parliamentary governance and aims to demonstrate how technology can improve transparency, efficiency, and continuity within student leadership institutions.

---

# Project Overview

The platform serves two primary purposes:

## Public Website

Provides students, executives, alumni, and visitors with easy access to Senate information, news, legislative documents, and official announcements.

## Legislative Management System

Provides authorised Senate officials with a secure environment to manage the day-to-day operations of the Senate, including sessions, committees, bills, motions, and institutional records.

---

# Key Features

## Public Portal

* Responsive modern website
* About the SCISA Senate
* Senate Leadership
* List of Senators
* Committees
* Bills & Motions
* Gallery
* News & Announcements
* Official Documents
* Senate Policies
* Contact Information

---

## Administrative Dashboard

### Authentication

* Secure Login
* JWT Authentication
* Role-Based Access Control (RBAC)

### User Roles

* Speaker
* Clerk
* Deputy Clerk
* Committee Leadership
* System Administrator

---

### Senate Management

* Dashboard Overview
* Session Scheduling
* Agenda Management
* Attendance Tracking
* Meeting Minutes
* Legislative Calendar

---

### Bills & Motions

* Create Bills
* Draft Motions
* Edit & Update Records
* Legislative Workflow
* Archive Completed Bills
* Search & Filter

---

### Committee Management

* Committee Profiles
* Committee Membership
* Committee Reports
* Committee Announcements

---

### Document Repository

* Constitution
* Standing Orders
* Official Reports
* Senate Publications
* Downloadable Documents

---

### Media Centre

* Photo Gallery
* Event Highlights
* Official Images

---

### Notifications

* Senate Announcements
* Session Notices
* Important Updates

---

### Search

* Search Bills
* Search Motions
* Search Documents
* Search Senators

---

# Technology Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion

## Backend

* Node.js
* Express.js
* REST API

## Database

* PostgreSQL
* Supabase
* Prisma ORM

## Authentication

* JWT
* Role-Based Access Control (RBAC)

## Deployment

* Vercel
* GitHub

## Development Tools

* Cursor AI
* VS Code
* Postman
* Git
* GitHub
* Figma

---

# System Architecture

```text
Users
   │
   ▼
Next.js Frontend
   │
REST API
   │
Express.js Backend
   │
Prisma ORM
   │
Supabase PostgreSQL Database
```

---

# Folder Structure

```bash
SCISA-SENATE/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── hooks/
│   ├── services/
│   └── assets/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── prisma/
│   └── utils/
│
├── public/
├── docs/
├── README.md
└── package.json
```

---

# Installation

Clone the repository.

```bash
git clone https://github.com/OwusuAsieduMichael/SCISA-SENATE.git
```

Navigate into the project.

```bash
cd SCISA-SENATE
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file and configure the following variables.

```env
DATABASE_URL=

DIRECT_URL=

JWT_SECRET=

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

# Future Roadmap

* Email Notifications
* Digital Voting System
* AI-assisted Legislative Search
* Meeting Transcript Generation
* Analytics Dashboard
* Mobile Application
* PDF Report Generation
* Audit Logs
* Version Control for Bills
* Multi-session Legislative Archive

---

# Live Demo

**Website**

https://scisa-senate.vercel.app

---

# Repository

https://github.com/OwusuAsieduMichael/SCISA-SENATE

---

# Project Status

**Current Status:** Active Development

Core functionality has been implemented, with additional enhancements and optimisation planned for future releases.

---

# Author

**Michael Owusu Asiedu**

Computer Science Student — Kwame Nkrumah University of Science and Technology (KNUST)

Software Engineer | Full-Stack Developer | UI/UX Enthusiast

---

# Acknowledgements

Special appreciation to:

* Rt. Hon. Henry Oduro Ntiamoah (Speaker, SCISA Senate)
* The SCISA Senate
* Science & Innovation Committee
* Computer Science Society (CSS-KNUST)

for their support, collaboration, and commitment towards advancing digital governance within student leadership.

---

## Licence

This project is intended for educational, institutional, and research purposes. Please contact the author before redistributing or deploying modified versions for other organisations.
