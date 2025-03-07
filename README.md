# Health and Wellness Management System (Ctruh_Bengaluru)

## Overview
A Health and Wellness Management System designed to help users track medications, receive reminders, generate reports, and manage sessions securely.

## Features
### Authentication
- User login/logout with JWT authentication.
- Secure password encryption using bcrypt.
- Session management with options for single and multi-device logout.

### Medication Management
- **One-time Medications**: Reminders for a specific date and time.
- **Recurring Medications**:
  - Daily reminders.
  - Weekly reminders (User selects specific days).
  - Mark medications as **done** upon completion.

### Session Management
- Logout from all devices.
- Logout from other devices while staying logged in on the current one.

### Cron Jobs
- Scheduled medication reminders (Daily/Weekly).
- Automated email notifications.

### Queues (BullMQ with Redis)
- Weekly report generation and email notifications.
- Efficient background task processing.

### Email Notifications
- Medication reminders.
- Weekly reports (in CSV format).
- Powered by Nodemailer with SMTP (Google App Password recommended).

## Tech Stack
- **Node.js 16**
- **MongoDB** (Database)
- **Redis** (Queue and session management)
- **Express.js** (API framework)
- **BullMQ** (Job queue processing)
- **Nodemailer** (Email service)
- **Docker** (Optional for containerized deployment)

## Installation
### Prerequisites
- Install **Node.js 16**.
- Install **MongoDB** and **Redis**.

### Setup
1. Clone the repository:
    git clone https://github.com/00karsa00/Ctruh_Bengaluru
    cd Ctruh_Bengaluru

2. Install dependencies:
    npm install

3. Create a .env file:
    cp .env.example .env
    Update the .env file with your database, Redis, and SMTP credentials.
    
4. Run the project:
    npm start

### API Documentation
 1. API request examples can be found in the requests-http/ folder in the root directory.
 2. Use Postman or REST Client to test the endpoints.

