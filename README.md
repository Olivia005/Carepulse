<div align="center">

# 🏥 CarePulse

### Modern Healthcare & Patient Management Platform

A full-stack healthcare management application that streamlines patient registration, appointment scheduling, and administrative workflows with a modern, responsive interface.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Backend-F02E65?style=for-the-badge&logo=appwrite)](https://appwrite.io/)

</div>

---

## 📖 Overview

CarePulse is a modern healthcare management platform that simplifies the process of booking appointments, managing patient records, and handling administrative tasks. The application provides separate workflows for patients and administrators, ensuring an efficient healthcare experience.

---

## ✨ Features

### 👨‍⚕️ Patient Portal

- Secure patient registration
- Create and manage appointments
- Update personal information
- Appointment status tracking
- Responsive and user-friendly interface

### 🏥 Admin Dashboard

- View all appointments
- Schedule or reschedule appointments
- Cancel appointments
- Patient management
- Real-time appointment updates

### 📱 Modern UI

- Fully responsive design
- Clean healthcare-inspired interface
- Dark & Light friendly components
- Smooth animations
- Accessible forms and validation

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS, Shadcn UI |
| Backend | Appwrite |
| Forms | React Hook Form, Zod |
| Date Handling | React Date Picker |
| Notifications | React Hot Toast |
| Deployment | Vercel |

---

## 📂 Project Structure

```text
carepulse/
├── app/
│   ├── admin/                  # Admin dashboard
│   ├── aiRecommendations/      # AI-powered health recommendations
│   ├── api/                    # API routes
│   ├── chatbot/                # AI healthcare chatbot
│   ├── doctors/                # Doctors directory
│   ├── home/                   # Home dashboard
│   ├── laboratorytest/         # Lab test booking & reports
│   ├── patients/[userId]/      # Dynamic patient profile & appointments
│   ├── wayout/                 # Additional healthcare module
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── global-error.tsx
│
├── components/                 # Reusable UI components
├── constants/                  # Application constants
├── lib/                        # Utilities, Appwrite config & helper functions
├── public/                     # Static assets
├── types/                      # TypeScript types & interfaces
│
├── .env.local                  # Environment variables
├── components.json             # shadcn/ui configuration
├── instrumentation.ts          # Monitoring & instrumentation
├── next.config.ts              # Next.js configuration
├── eslint.config.mjs           # ESLint configuration
├── package.json
└── README.md
```
---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/carepulse.git

cd carepulse
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_ENDPOINT=

NEXT_PUBLIC_PROJECT_ID=

NEXT_PUBLIC_DATABASE_ID=

NEXT_PUBLIC_PATIENT_COLLECTION_ID=

NEXT_PUBLIC_DOCTOR_COLLECTION_ID=

NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID=

NEXT_PUBLIC_BUCKET_ID=
```

> Fill these values from your Appwrite project.

---

### Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 📸 Screenshots

> Add screenshots here after deployment.

### Home Page

```
images/home.png
```

### Patient Registration

```
images/register.png
```

### Appointment Booking

```
images/appointment.png
```

### Admin Dashboard

```
images/admin.png
```

---

## 📌 Future Improvements

- Email notifications
- SMS reminders
- Doctor authentication
- Online payments
- Medical history management
- Video consultations
- Analytics Dashboard

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Anubhav Sikder**

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile

---

<div align="center">

### ⭐ If you found this project useful, don't forget to star the repository!

</div>
