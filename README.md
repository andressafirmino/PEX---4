# Restaurant Order Management System

This ecosystem is a complete solution designed to modernize and optimize restaurant services. It consists of a complete full-stack architecture, featuring a dynamic web application for customers, an administrative panel, and a REST API to manage authentication, users, and the product catalog.

---

## 🏗️ Project Architecture

The repository is divided into two main applications:

* **[`/Back`](./Back):** The backend infrastructure. A REST API built with Node.js, Express, TypeScript, and Prisma ORM, with a PostgreSQL database.

* **[`/Front`](./Front):** The frontend application. A responsive SPA built with React, TypeScript, and Styled-components, providing an intuitive flow for both customers and administrators.

---

## 🚀 Main Features

### 📱 Customer Experience (Frontend)
* **Dynamic Menu Selection:** Browse and select multiple items from the catalog.

* **Real-Time Total Calculation:** Instant updates of the order value using React state management.

* **Interactive Checkout Summary:** Modal window to review items before finalizing the purchase.

* **WhatsApp Integration:** Automatic redirection to the store's chat with a pre-formatted order message.

### 🔐 Administrative Management (Full-Stack)
* **Secure Authentication:** Dedicated login screen that restricts access to verified administrators.

* **Product Ingestion and Management:** Graphical interface for administrators to easily add new snacks, drinks, or desserts to the database.

* **Database Population:** Automated script to generate a ready-to-use menu with 12 dummy products and an administrator account.

* **Static Image Service:** Automated local storage and routing for product media.

---

## 🛠️ Technologies

| Frontend | Backend | Database and Tools |

| :--- | :--- | :--- |

| ReactJS | Node.js (v21+) | PostgreSQL |

| TypeScript | Express | Prism ORM |

| styled-components | TypeScript | Git and NPM |

---

## ⚡ Quick Start Guide

### 1. Clone the entire ecosystem

<pre><code>git clone https://github.com/andressafirmino/PEX---4.git
cd PEX---4</code></pre>

### 2. Set up the Backend

Navigate to the backend directory, configure your environment variables, run migrations, and start the server:

<pre><code>cd Back
npm install
# Configure your .env file based on .env.example
npm run dev:migration:run
npm run dev:seed
npm run dev</code></pre>

*The API will be live at http://localhost:4000*

### 3. Set up the Frontend

Open a new terminal window, navigate to the frontend directory, and start the development environment:

<pre><code>cd Front
npm install
npm run dev</code></pre>

*The web app will be live at your local network port (usually http://localhost:5173)*

---

## 📄 Detailed Documentation

For specific details regarding environment variables, script workarounds (ERR_REQUIRE_ESM), and asset directories, please refer to the dedicated documentation inside each folder:

* [Backend Documentation & Setup Guide](./Back/README.md)
* [Frontend Documentation & Setup Guide](./Front/README.md)
