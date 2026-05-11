Dylan Gamero - Developer Portfolio

A minimalist, high-performance personal portfolio built with Next.js, Tailwind CSS v4, and GSAP. Designed with a "Digital Curator" aesthetic, featuring a deep dark theme and crimson red accents.

## Features

- **Bilingual Support (ES/EN)**: Built-in lightweight dictionary with automatic browser language detection.
- **Smooth Animations**: Scroll-triggered reveals, interactive timelines, and 3D card hover effects powered by GSAP.
- **Fully Responsive**: Carefully optimized for all screen sizes, from ultra-wide monitors to mobile devices.
- **Functional Contact Form**: Direct email delivery using the FormSubmit API (no custom backend required).
- **Modern Stack**: Leverages Next.js App Router, React, and Tailwind CSS v4.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) (GreenSock Animation Platform)

## Getting Started

First, make sure you are in the project directory.

1. **Install dependencies**:

Run the development server:

```Bash
npm install
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

## Configuration & Customization
Project Images: Place your project screenshots (e.g., wally-app.png) inside the /public directory at the root of your project. Next.js will automatically serve them.

Contact Form Email: To receive emails, open app/page.tsx, locate the handleFormSubmit function, and replace gamerodylan00@gmail.com with your desired receiving email address. Note: You will need to verify the email address upon the first submission via FormSubmit.

Colors & Theming: The primary colors, including the Crimson Red accent (#B91C1C), are configured using CSS variables in app/globals.css via Tailwind v4's @theme directive.

## Author
Dylan Gamero (@dypok)

GitHub: github.com/dypok

LinkedIn: linkedin.com/in/dylangamero

